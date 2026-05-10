# Firebase import

This app reads public exercises from Firestore collection `sentences`.

## 1. Create local credentials

In Firebase Console:

1. Project settings
2. Service accounts
3. Generate new private key
4. Save the JSON outside this repository, for example:

```txt
/Users/user/.firebase-keys/deutsch-ad427-service-account.json
```

Do not put the service account JSON in this repo.

## 2. Configure local env

Copy:

```sh
cp aleman-ejercicios/.env.example aleman-ejercicios/.env
```

Edit `.env`:

```txt
GOOGLE_APPLICATION_CREDENTIALS=/Users/user/.firebase-keys/deutsch-ad427-service-account.json
FIRESTORE_PROJECT_ID=deutsch-ad427
FIRESTORE_COLLECTION=sentences
FIRESTORE_IMPORT_MODE=upsert
FIRESTORE_DEACTIVATE_STALE=true
```

## 3. Install tooling

```sh
cd aleman-ejercicios
npm install
```

## 4. Validate before writing

```sh
npm run seed:dry-run
```

## 5. Import

```sh
npm run seed:import
```

When `FIRESTORE_DEACTIVATE_STALE=true`, documents previously imported from
`source: curated-seed` that no longer exist in the generated seed are marked
`active: false`. This prevents older generated sentences from staying in the
public exercise pool after curation changes.

## Security notes

- `.env` is ignored by git.
- Service account JSON patterns are ignored by git.
- The import script refuses to run if the service account JSON is inside this repository.
- The public app uses Firebase client config only. That config is not a server secret.
- Firestore writes remain blocked from the public app by `firestore.rules`.
