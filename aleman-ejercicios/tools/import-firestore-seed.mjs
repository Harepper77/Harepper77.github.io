import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config({ path: new URL("../.env", import.meta.url) });

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const seedPath = new URL("../data/firestore-seed-sentences.json", import.meta.url);
const collectionName = process.env.FIRESTORE_COLLECTION || "sentences";
const importMode = process.env.FIRESTORE_IMPORT_MODE || "upsert";
const deactivateStale = process.env.FIRESTORE_DEACTIVATE_STALE !== "false";
const projectId = process.env.FIRESTORE_PROJECT_ID || "deutsch-ad427";
const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const validAnswers = new Set(["nominativo", "acusativo", "dativo", "genitivo"]);
const validTypes = new Set(["ask-case", "identify-case", "acc-dat"]);
const validTenses = new Set(["präsens", "präteritum", "perfekt", "futur"]);

if (!["upsert", "create-only"].includes(importMode)) {
  throw new Error("FIRESTORE_IMPORT_MODE must be either upsert or create-only.");
}

if (!dryRun && !credentialsPath) {
  throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS. Copy .env.example to .env and point it to your local service account JSON.");
}

const repoRoot = path.resolve(new URL("../..", import.meta.url).pathname);

let resolvedCredentialsPath = "";

if (!dryRun) {
  resolvedCredentialsPath = path.resolve(credentialsPath);

  if (resolvedCredentialsPath.startsWith(repoRoot)) {
    throw new Error("Move the service account JSON outside this repository before importing.");
  }

  if (!existsSync(resolvedCredentialsPath)) {
    throw new Error(`Service account file not found: ${resolvedCredentialsPath}`);
  }
}

const seed = JSON.parse(await readFile(seedPath, "utf8"));

const assertString = (doc, key, index) => {
  if (typeof doc[key] !== "string" || doc[key].trim() === "") {
    throw new Error(`Document ${index} is missing string field: ${key}`);
  }
};

seed.docs.forEach((doc, index) => {
  ["type", "sentence", "answer", "explanation", "translation", "verb", "tense"].forEach((key) => {
    assertString(doc, key, index);
  });

  if (doc.active !== true) throw new Error(`Document ${index} must have active: true.`);
  if (!validTypes.has(doc.type)) throw new Error(`Document ${index} has invalid type: ${doc.type}`);
  if (!validAnswers.has(doc.answer)) throw new Error(`Document ${index} has invalid answer: ${doc.answer}`);
  if (!validTenses.has(doc.tense)) throw new Error(`Document ${index} has invalid tense: ${doc.tense}`);
  if (!Array.isArray(doc.tags)) throw new Error(`Document ${index} tags must be an array.`);
});

const documentIdFor = (doc) => createHash("sha1")
  .update(`${doc.type}|${doc.sentence}|${doc.target || ""}|${doc.answer}`)
  .digest("hex")
  .slice(0, 20);

if (dryRun) {
  const summary = seed.docs.reduce((acc, doc) => {
    acc.byType[doc.type] = (acc.byType[doc.type] || 0) + 1;
    acc.byTense[doc.tense] = (acc.byTense[doc.tense] || 0) + 1;
    acc.verbs.add(doc.verb);
    return acc;
  }, { byType: {}, byTense: {}, verbs: new Set() });

  console.log(JSON.stringify({
    dryRun: true,
    projectId,
    collectionName,
    importMode,
    documents: seed.docs.length,
    byType: summary.byType,
    byTense: summary.byTense,
    verbs: summary.verbs.size,
  }, null, 2));
  process.exit(0);
}

const serviceAccount = JSON.parse(await readFile(resolvedCredentialsPath, "utf8"));

if (serviceAccount.project_id !== projectId) {
  throw new Error(`Service account project_id (${serviceAccount.project_id}) does not match FIRESTORE_PROJECT_ID (${projectId}).`);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId,
});

const db = admin.firestore();
const collectionRef = db.collection(collectionName);
const now = admin.firestore.FieldValue.serverTimestamp();

let imported = 0;
let skipped = 0;
const activeSeedIds = new Set(seed.docs.map(documentIdFor));

for (let index = 0; index < seed.docs.length; index += 500) {
  const chunk = seed.docs.slice(index, index + 500);
  const batch = db.batch();

  for (const doc of chunk) {
    const docRef = collectionRef.doc(documentIdFor(doc));
    if (importMode === "create-only") {
      const existing = await docRef.get();
      if (existing.exists) {
        skipped += 1;
        continue;
      }
    }

    batch.set(docRef, {
      ...doc,
      importedAt: now,
      source: "curated-seed",
    }, { merge: importMode === "upsert" });
    imported += 1;
  }

  await batch.commit();
}

let deactivated = 0;

if (deactivateStale) {
  const staleSnapshot = await collectionRef
    .where("source", "==", "curated-seed")
    .where("active", "==", true)
    .get();

  for (let index = 0; index < staleSnapshot.docs.length; index += 500) {
    const chunk = staleSnapshot.docs.slice(index, index + 500);
    const batch = db.batch();
    let hasWrites = false;

    chunk.forEach((snapshotDoc) => {
      if (activeSeedIds.has(snapshotDoc.id)) return;
      batch.update(snapshotDoc.ref, {
        active: false,
        deactivatedAt: now,
        deactivationReason: "stale-seed-document",
      });
      deactivated += 1;
      hasWrites = true;
    });

    if (hasWrites) await batch.commit();
  }
}

console.log(JSON.stringify({
  ok: true,
  projectId,
  collectionName,
  importMode,
  imported,
  skipped,
  deactivated,
}, null, 2));
