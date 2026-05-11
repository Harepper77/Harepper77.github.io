import { writeFile } from "node:fs/promises";

const verbs = [
  "essen", "trinken", "lesen", "schreiben", "sehen", "kaufen", "verkaufen", "nehmen",
  "geben", "gehen", "kommen", "fahren", "laufen", "anrufen", "aufräumen", "zuhören",
  "öffnen", "schließen", "fragen", "antworten", "spielen", "sprechen", "arbeiten",
  "reparieren", "lernen", "studieren", "anmachen", "ausmachen", "stellen", "stehen",
  "legen", "liegen", "tanzen", "unterrichten", "besuchen", "bauen", "wollen", "können",
  "dürfen", "müssen", "sollen", "mögen", "gefallen", "brauchen", "denken", "wissen",
  "bezahlen", "machen", "erzählen", "singen", "fliegen", "sich setzen", "sich treffen mit",
  "sich interessieren für", "haben", "ausleihen", "rennen", "schlafen", "tragen", "bringen",
  "kochen", "backen", "helfen", "schicken",
];

const people = [
  { nom: "der Mann", cap: "Der Mann", acc: "den Mann", dat: "dem Mann", gen: "des Mannes", es: "el hombre" },
  { nom: "die Frau", cap: "Die Frau", acc: "die Frau", dat: "der Frau", gen: "der Frau", es: "la mujer" },
  { nom: "das Kind", cap: "Das Kind", acc: "das Kind", dat: "dem Kind", gen: "des Kindes", es: "el niño" },
  { nom: "der Lehrer", cap: "Der Lehrer", acc: "den Lehrer", dat: "dem Lehrer", gen: "des Lehrers", es: "el maestro" },
  { nom: "die Lehrerin", cap: "Die Lehrerin", acc: "die Lehrerin", dat: "der Lehrerin", gen: "der Lehrerin", es: "la maestra" },
  { nom: "der Freund", cap: "Der Freund", acc: "den Freund", dat: "dem Freund", gen: "des Freundes", es: "el amigo" },
  { nom: "die Freundin", cap: "Die Freundin", acc: "die Freundin", dat: "der Freundin", gen: "der Freundin", es: "la amiga" },
  { nom: "der Nachbar", cap: "Der Nachbar", acc: "den Nachbarn", dat: "dem Nachbarn", gen: "des Nachbarn", es: "el vecino" },
  { nom: "die Mutter", cap: "Die Mutter", acc: "die Mutter", dat: "der Mutter", gen: "der Mutter", es: "la madre" },
  { nom: "der Bruder", cap: "Der Bruder", acc: "den Bruder", dat: "dem Bruder", gen: "des Bruders", es: "el hermano" },
  { nom: "die Schwester", cap: "Die Schwester", acc: "die Schwester", dat: "der Schwester", gen: "der Schwester", es: "la hermana" },
  { nom: "der Student", cap: "Der Student", acc: "den Studenten", dat: "dem Studenten", gen: "des Studenten", es: "el estudiante" },
];

const objects = [
  { acc: "den Apfel", nom: "der Apfel", es: "la manzana" },
  { acc: "das Wasser", nom: "das Wasser", es: "el agua" },
  { acc: "das Buch", nom: "das Buch", es: "el libro" },
  { acc: "den Brief", nom: "der Brief", es: "la carta" },
  { acc: "den Film", nom: "der Film", es: "la película" },
  { acc: "die Tasche", nom: "die Tasche", es: "la bolsa" },
  { acc: "das Fahrrad", nom: "das Fahrrad", es: "la bicicleta" },
  { acc: "den Schlüssel", nom: "der Schlüssel", es: "la llave" },
  { acc: "die Tür", nom: "die Tür", es: "la puerta" },
  { acc: "das Fenster", nom: "das Fenster", es: "la ventana" },
  { acc: "das Licht", nom: "das Licht", es: "la luz" },
  { acc: "den Computer", nom: "der Computer", es: "la computadora" },
  { acc: "den Tisch", nom: "der Tisch", es: "la mesa" },
  { acc: "das Bett", nom: "das Bett", es: "la cama" },
  { acc: "das Lied", nom: "das Lied", es: "la canción" },
  { acc: "den Kuchen", nom: "der Kuchen", es: "el pastel" },
  { acc: "eine Suppe", nom: "eine Suppe", es: "una sopa" },
  { acc: "eine E-Mail", nom: "eine E-Mail", es: "un correo" },
  { acc: "die Geschichte", nom: "die Geschichte", es: "la historia" },
  { acc: "das Haus", nom: "das Haus", es: "la casa" },
  { acc: "die Aufgabe", nom: "die Aufgabe", es: "la tarea" },
  { acc: "die Sprache", nom: "die Sprache", es: "el idioma" },
  { acc: "das Zimmer", nom: "das Zimmer", es: "el cuarto" },
  { acc: "die Rechnung", nom: "die Rechnung", es: "la cuenta" },
];

const objectByAcc = (acc) => objects.find((object) => object.acc === acc);

const verbObjects = {
  essen: ["den Apfel", "den Kuchen", "eine Suppe"],
  trinken: ["das Wasser"],
  lesen: ["das Buch", "den Brief", "eine E-Mail"],
  schreiben: ["den Brief", "eine E-Mail", "die Aufgabe"],
  sehen: ["den Film", "das Haus", "das Fenster"],
  kaufen: ["die Tasche", "das Fahrrad", "den Computer"],
  verkaufen: ["das Fahrrad", "den Computer", "die Tasche"],
  nehmen: ["den Schlüssel", "das Buch", "die Tasche"],
  öffnen: ["die Tür", "das Fenster", "eine E-Mail"],
  schließen: ["die Tür", "das Fenster", "die Tasche"],
  reparieren: ["das Fahrrad", "den Computer", "das Fenster"],
  anmachen: ["das Licht", "den Computer"],
  ausmachen: ["das Licht", "den Computer"],
  aufräumen: ["das Zimmer", "den Tisch"],
  tragen: ["die Tasche", "den Schlüssel", "das Buch"],
  bringen: ["den Kuchen", "eine Suppe", "das Wasser"],
  kochen: ["eine Suppe"],
  backen: ["den Kuchen"],
  bezahlen: ["die Rechnung"],
  machen: ["die Aufgabe"],
  haben: ["den Schlüssel", "das Fahrrad", "die Tasche"],
  brauchen: ["den Computer", "das Buch", "den Schlüssel"],
  ausleihen: ["das Buch", "das Fahrrad", "den Computer"],
  bauen: ["das Haus", "den Tisch"],
  erzählen: ["die Geschichte"],
  wissen: ["die Aufgabe", "die Sprache"],
  geben: ["den Schlüssel", "das Buch", "den Brief"],
  schicken: ["den Brief", "eine E-Mail", "die Aufgabe"],
};

const objectForVerb = (verb, index) => {
  const compatible = verbObjects[verb] || objects.map((object) => object.acc);
  return objectByAcc(compatible[index % compatible.length]);
};

const places = [
  { acc: "in den Park", dat: "im Park", esAcc: "al parque", esDat: "en el parque" },
  { acc: "in die Schule", dat: "in der Schule", esAcc: "a la escuela", esDat: "en la escuela" },
  { acc: "ins Büro", dat: "im Büro", esAcc: "a la oficina", esDat: "en la oficina" },
  { acc: "auf den Tisch", dat: "auf dem Tisch", esAcc: "sobre la mesa", esDat: "sobre la mesa" },
  { acc: "an die Wand", dat: "an der Wand", esAcc: "a la pared", esDat: "en la pared" },
  { acc: "neben das Bett", dat: "neben dem Bett", esAcc: "junto a la cama", esDat: "junto a la cama" },
  { acc: "unter den Stuhl", dat: "unter dem Stuhl", esAcc: "debajo de la silla", esDat: "debajo de la silla" },
  { acc: "vor das Haus", dat: "vor dem Haus", esAcc: "frente a la casa", esDat: "frente a la casa" },
];

const movementPlaces = [
  { acc: "in den Park", esAcc: "al parque" },
  { acc: "in die Schule", esAcc: "a la escuela" },
  { acc: "ins Büro", esAcc: "a la oficina" },
  { acc: "nach Hause", esAcc: "a casa" },
  { acc: "zum Bahnhof", esAcc: "a la estación de tren" },
  { acc: "in die Stadt", esAcc: "a la ciudad" },
];

const activityPlaces = {
  arbeiten: { dat: "im Büro", esDat: "en la oficina" },
  lernen: { dat: "in der Schule", esDat: "en la escuela" },
  studieren: { dat: "an der Universität", esDat: "en la universidad" },
  stehen: { dat: "an der Tür", esDat: "en la puerta" },
  tanzen: { dat: "im Wohnzimmer", esDat: "en la sala" },
  spielen: { dat: "im Park", esDat: "en el parque" },
  sprechen: { dat: "mit dem Lehrer", esDat: "con el maestro" },
  singen: { dat: "im Chor", esDat: "en el coro" },
  schlafen: { dat: "im Bett", esDat: "en la cama" },
};

const placementExamples = [
  { object: objects[2], acc: "auf den Tisch", dat: "auf dem Tisch", esAcc: "sobre la mesa", esDat: "sobre la mesa" },
  { object: objects[3], acc: "in die Tasche", dat: "in der Tasche", esAcc: "en la bolsa", esDat: "en la bolsa" },
  { object: objects[7], acc: "neben die Tür", dat: "neben der Tür", esAcc: "junto a la puerta", esDat: "junto a la puerta" },
  { object: objects[10], acc: "an die Wand", dat: "an der Wand", esAcc: "en la pared", esDat: "en la pared" },
  { object: objects[11], acc: "auf den Schreibtisch", dat: "auf dem Schreibtisch", esAcc: "sobre el escritorio", esDat: "sobre el escritorio" },
  { object: objects[14], acc: "unter das Bett", dat: "unter dem Bett", esAcc: "debajo de la cama", esDat: "debajo de la cama" },
  { object: objects[16], acc: "in den Topf", dat: "im Topf", esAcc: "en la olla", esDat: "en la olla" },
  { object: objects[17], acc: "in den Ordner", dat: "im Ordner", esAcc: "en la carpeta", esDat: "en la carpeta" },
];

const seatPlaces = [
  { acc: "auf den Stuhl", esAcc: "en la silla" },
  { acc: "auf das Sofa", esAcc: "en el sofá" },
  { acc: "an den Tisch", esAcc: "a la mesa" },
  { acc: "neben die Freundin", esAcc: "junto a la amiga" },
];

const conjugations = {
  essen: { präsens: "isst", präteritum: "aß", perfekt: "hat gegessen", futur: "wird essen", es: "come" },
  trinken: { präsens: "trinkt", präteritum: "trank", perfekt: "hat getrunken", futur: "wird trinken", es: "bebe" },
  lesen: { präsens: "liest", präteritum: "las", perfekt: "hat gelesen", futur: "wird lesen", es: "lee" },
  schreiben: { präsens: "schreibt", präteritum: "schrieb", perfekt: "hat geschrieben", futur: "wird schreiben", es: "escribe" },
  sehen: { präsens: "sieht", präteritum: "sah", perfekt: "hat gesehen", futur: "wird sehen", es: "ve" },
  kaufen: { präsens: "kauft", präteritum: "kaufte", perfekt: "hat gekauft", futur: "wird kaufen", es: "compra" },
  verkaufen: { präsens: "verkauft", präteritum: "verkaufte", perfekt: "hat verkauft", futur: "wird verkaufen", es: "vende" },
  nehmen: { präsens: "nimmt", präteritum: "nahm", perfekt: "hat genommen", futur: "wird nehmen", es: "toma" },
  öffnen: { präsens: "öffnet", präteritum: "öffnete", perfekt: "hat geöffnet", futur: "wird öffnen", es: "abre" },
  schließen: { präsens: "schließt", präteritum: "schloss", perfekt: "hat geschlossen", futur: "wird schließen", es: "cierra" },
  reparieren: { präsens: "repariert", präteritum: "reparierte", perfekt: "hat repariert", futur: "wird reparieren", es: "repara" },
  anmachen: { präsens: "macht", prefix: "an", präteritum: "machte", perfekt: "hat angemacht", futur: "wird anmachen", es: "enciende" },
  ausmachen: { präsens: "macht", prefix: "aus", präteritum: "machte", perfekt: "hat ausgemacht", futur: "wird ausmachen", es: "apaga" },
  aufräumen: { präsens: "räumt", prefix: "auf", präteritum: "räumte", perfekt: "hat aufgeräumt", futur: "wird aufräumen", es: "ordena" },
  tragen: { präsens: "trägt", präteritum: "trug", perfekt: "hat getragen", futur: "wird tragen", es: "lleva" },
  bringen: { präsens: "bringt", präteritum: "brachte", perfekt: "hat gebracht", futur: "wird bringen", es: "trae" },
  kochen: { präsens: "kocht", präteritum: "kochte", perfekt: "hat gekocht", futur: "wird kochen", es: "cocina" },
  backen: { präsens: "backt", präteritum: "backte", perfekt: "hat gebacken", futur: "wird backen", es: "hornea" },
  bezahlen: { präsens: "bezahlt", präteritum: "bezahlte", perfekt: "hat bezahlt", futur: "wird bezahlen", es: "paga" },
  machen: { präsens: "macht", präteritum: "machte", perfekt: "hat gemacht", futur: "wird machen", es: "hace" },
  haben: { präsens: "hat", präteritum: "hatte", perfekt: "hat gehabt", futur: "wird haben", es: "tiene" },
  brauchen: { präsens: "braucht", präteritum: "brauchte", perfekt: "hat gebraucht", futur: "wird brauchen", es: "necesita" },
  fragen: { präsens: "fragt", präteritum: "fragte", perfekt: "hat gefragt", futur: "wird fragen", es: "pregunta a" },
  anrufen: { präsens: "ruft", prefix: "an", präteritum: "rief", perfekt: "hat angerufen", futur: "wird anrufen", es: "llama a" },
  besuchen: { präsens: "besucht", präteritum: "besuchte", perfekt: "hat besucht", futur: "wird besuchen", es: "visita a" },
  unterrichten: { präsens: "unterrichtet", präteritum: "unterrichtete", perfekt: "hat unterrichtet", futur: "wird unterrichten", es: "enseña a" },
  ausleihen: { präsens: "leiht", prefix: "aus", präteritum: "lieh", perfekt: "hat ausgeliehen", futur: "wird ausleihen", es: "presta" },
  helfen: { präsens: "hilft", präteritum: "half", perfekt: "hat geholfen", futur: "wird helfen", es: "ayuda a", case: "dativo" },
  antworten: { präsens: "antwortet", präteritum: "antwortete", perfekt: "hat geantwortet", futur: "wird antworten", es: "responde a", case: "dativo" },
  zuhören: { präsens: "hört", prefix: "zu", präteritum: "hörte", perfekt: "hat zugehört", futur: "wird zuhören", es: "escucha a", case: "dativo" },
  gefallen: { präsens: "gefällt", präteritum: "gefiel", perfekt: "hat gefallen", futur: "wird gefallen", es: "le gusta a", case: "dativo" },
  geben: { präsens: "gibt", präteritum: "gab", perfekt: "hat gegeben", futur: "wird geben", es: "da" },
  schicken: { präsens: "schickt", präteritum: "schickte", perfekt: "hat geschickt", futur: "wird schicken", es: "envía" },
  legen: { präsens: "legt", präteritum: "legte", perfekt: "hat gelegt", futur: "wird legen", es: "pone" },
  stellen: { präsens: "stellt", präteritum: "stellte", perfekt: "hat gestellt", futur: "wird stellen", es: "coloca" },
  liegen: { präsens: "liegt", präteritum: "lag", perfekt: "hat gelegen", futur: "wird liegen", es: "está colocado", case: "dativo-place" },
  stehen: { präsens: "steht", präteritum: "stand", perfekt: "hat gestanden", futur: "wird stehen", es: "está de pie", case: "dativo-place" },
  gehen: { präsens: "geht", präteritum: "ging", perfekt: "ist gegangen", futur: "wird gehen", es: "va", aux: "ist" },
  kommen: { präsens: "kommt", präteritum: "kam", perfekt: "ist gekommen", futur: "wird kommen", es: "viene", aux: "ist" },
  fahren: { präsens: "fährt", präteritum: "fuhr", perfekt: "ist gefahren", futur: "wird fahren", es: "va en vehículo", aux: "ist" },
  laufen: { präsens: "läuft", präteritum: "lief", perfekt: "ist gelaufen", futur: "wird laufen", es: "camina/corre", aux: "ist" },
  fliegen: { präsens: "fliegt", präteritum: "flog", perfekt: "ist geflogen", futur: "wird fliegen", es: "vuela", aux: "ist" },
  rennen: { präsens: "rennt", präteritum: "rannte", perfekt: "ist gerannt", futur: "wird rennen", es: "corre", aux: "ist" },
  schlafen: { präsens: "schläft", präteritum: "schlief", perfekt: "hat geschlafen", futur: "wird schlafen", es: "duerme" },
  lernen: { präsens: "lernt", präteritum: "lernte", perfekt: "hat gelernt", futur: "wird lernen", es: "aprende" },
  studieren: { präsens: "studiert", präteritum: "studierte", perfekt: "hat studiert", futur: "wird studieren", es: "estudia" },
  arbeiten: { präsens: "arbeitet", präteritum: "arbeitete", perfekt: "hat gearbeitet", futur: "wird arbeiten", es: "trabaja" },
  tanzen: { präsens: "tanzt", präteritum: "tanzte", perfekt: "hat getanzt", futur: "wird tanzen", es: "baila" },
  singen: { präsens: "singt", präteritum: "sang", perfekt: "hat gesungen", futur: "wird singen", es: "canta" },
  spielen: { präsens: "spielt", präteritum: "spielte", perfekt: "hat gespielt", futur: "wird spielen", es: "juega" },
  sprechen: { präsens: "spricht", präteritum: "sprach", perfekt: "hat gesprochen", futur: "wird sprechen", es: "habla" },
  bauen: { präsens: "baut", präteritum: "baute", perfekt: "hat gebaut", futur: "wird bauen", es: "construye" },
  erzählen: { präsens: "erzählt", präteritum: "erzählte", perfekt: "hat erzählt", futur: "wird erzählen", es: "cuenta" },
  denken: { präsens: "denkt", präteritum: "dachte", perfekt: "hat gedacht", futur: "wird denken", es: "piensa" },
  wissen: { präsens: "weiß", präteritum: "wusste", perfekt: "hat gewusst", futur: "wird wissen", es: "sabe" },
  wollen: { präsens: "will", präteritum: "wollte", perfekt: "hat gewollt", futur: "wird wollen", es: "quiere" },
  können: { präsens: "kann", präteritum: "konnte", perfekt: "hat gekonnt", futur: "wird können", es: "puede" },
  dürfen: { präsens: "darf", präteritum: "durfte", perfekt: "hat gedurft", futur: "wird dürfen", es: "tiene permiso para" },
  müssen: { präsens: "muss", präteritum: "musste", perfekt: "hat gemusst", futur: "wird müssen", es: "debe" },
  sollen: { präsens: "soll", präteritum: "sollte", perfekt: "hat gesollt", futur: "wird sollen", es: "debe" },
  mögen: { präsens: "mag", präteritum: "mochte", perfekt: "hat gemocht", futur: "wird mögen", es: "le gusta" },
};

const tenseLabels = {
  präsens: "presente",
  präteritum: "pretérito",
  perfekt: "perfecto",
  futur: "futuro I",
};

const sentenceForTense = (subject, verb, object, tense) => {
  const data = conjugations[verb];
  if (tense === "präsens" && data.prefix) return `${subject.cap} ${data.präsens} ${object} ${data.prefix}.`;
  if (tense === "präteritum" && data.prefix) return `${subject.cap} ${data.präteritum} ${object} ${data.prefix}.`;
  if (tense === "perfekt") {
    const [auxiliary, ...participle] = data.perfekt.split(" ");
    return `${subject.cap} ${auxiliary} ${object} ${participle.join(" ")}.`;
  }
  if (tense === "futur") {
    return `${subject.cap} wird ${object} ${verb}.`;
  }
  return `${subject.cap} ${data[tense]} ${object}.`;
};

const modalSentence = (subject, verb, object, tense) => {
  const data = conjugations[verb];
  if (verb === "mögen") return sentenceForTense(subject, verb, object, tense);
  if (tense === "perfekt") return `${subject.cap} hat ${object} lesen ${verb}.`;
  if (tense === "futur") return `${subject.cap} wird ${object} lesen ${verb}.`;
  return `${subject.cap} ${data[tense]} ${object} lesen.`;
};

const ditransitiveSentence = (subject, verb, recipient, object, tense) => {
  const data = conjugations[verb];
  if (tense === "perfekt") {
    const [auxiliary, ...participle] = data.perfekt.split(" ");
    return `${subject.cap} ${auxiliary} ${recipient} ${object} ${participle.join(" ")}.`;
  }
  if (tense === "futur") return `${subject.cap} wird ${recipient} ${object} ${verb}.`;
  return `${subject.cap} ${data[tense]} ${recipient} ${object}.`;
};

const reflexivePrepSentence = (subject, item, person, tenseIndex) => {
  const tense = tenses[tenseIndex];
  const target = item.answer === "dativo" ? person.dat : person.acc;
  if (tense === "präsens") return `${subject.cap} ${item.present} <u>${item.prep} ${target}</u>.`;
  if (tense === "präteritum") return `${subject.cap} ${item.past} <u>${item.prep} ${target}</u>.`;
  if (tense === "perfekt") return `${subject.cap} hat sich <u>${item.prep} ${target}</u> ${item.participle}.`;
  return `${subject.cap} wird sich <u>${item.prep} ${target}</u> ${item.infinitive}.`;
};

const prepositionalSentence = (subject, verb, prepositionalTarget, tense) => {
  const data = conjugations[verb];
  if (tense === "perfekt") {
    const [auxiliary, ...participle] = data.perfekt.split(" ");
    return `${subject.cap} ${auxiliary} ${prepositionalTarget} ${participle.join(" ")}.`;
  }
  if (tense === "futur") return `${subject.cap} wird ${prepositionalTarget} ${verb}.`;
  return `${subject.cap} ${data[tense]} ${prepositionalTarget}.`;
};

const extraAccusativeScenarios = [
  { subject: people[0], verb: "essen", object: objectByAcc("den Apfel"), tail: "am Morgen", tailEs: "por la mañana" },
  { subject: people[1], verb: "trinken", object: objectByAcc("das Wasser"), tail: "nach dem Sport", tailEs: "después del deporte" },
  { subject: people[2], verb: "lesen", object: objectByAcc("das Buch"), tail: "im Zug", tailEs: "en el tren" },
  { subject: people[3], verb: "schreiben", object: objectByAcc("eine E-Mail"), tail: "im Büro", tailEs: "en la oficina" },
  { subject: people[4], verb: "sehen", object: objectByAcc("den Film"), tail: "am Abend", tailEs: "por la noche" },
  { subject: people[5], verb: "kaufen", object: objectByAcc("den Kuchen"), tail: "in der Bäckerei", tailEs: "en la panadería" },
  { subject: people[6], verb: "verkaufen", object: objectByAcc("das Fahrrad"), tail: "am Samstag", tailEs: "el sábado" },
  { subject: people[7], verb: "nehmen", object: objectByAcc("den Schlüssel"), tail: "aus der Tasche", tailEs: "de la bolsa" },
  { subject: people[8], verb: "öffnen", object: objectByAcc("die Tür"), tail: "langsam", tailEs: "lentamente" },
  { subject: people[9], verb: "schließen", object: objectByAcc("das Fenster"), tail: "wegen des Regens", tailEs: "por la lluvia" },
  { subject: people[10], verb: "reparieren", object: objectByAcc("den Computer"), tail: "zu Hause", tailEs: "en casa" },
  { subject: people[11], verb: "anmachen", object: objectByAcc("das Licht"), tail: "im Zimmer", tailEs: "en el cuarto" },
  { subject: people[0], verb: "ausmachen", object: objectByAcc("das Licht"), tail: "vor dem Schlafen", tailEs: "antes de dormir" },
  { subject: people[1], verb: "aufräumen", object: objectByAcc("das Zimmer"), tail: "am Wochenende", tailEs: "el fin de semana" },
  { subject: people[2], verb: "tragen", object: objectByAcc("die Tasche"), tail: "zur Schule", tailEs: "a la escuela" },
  { subject: people[3], verb: "bringen", object: objectByAcc("eine Suppe"), tail: "zum Tisch", tailEs: "a la mesa" },
  { subject: people[4], verb: "kochen", object: objectByAcc("eine Suppe"), tail: "für die Familie", tailEs: "para la familia" },
  { subject: people[5], verb: "backen", object: objectByAcc("den Kuchen"), tail: "für den Besuch", tailEs: "para la visita" },
  { subject: people[6], verb: "bezahlen", object: objectByAcc("die Rechnung"), tail: "im Restaurant", tailEs: "en el restaurante" },
  { subject: people[7], verb: "machen", object: objectByAcc("die Aufgabe"), tail: "nach der Schule", tailEs: "después de la escuela" },
  { subject: people[8], verb: "haben", object: objectByAcc("den Schlüssel"), tail: "in der Hand", tailEs: "en la mano" },
  { subject: people[9], verb: "brauchen", object: objectByAcc("den Computer"), tail: "für die Arbeit", tailEs: "para el trabajo" },
  { subject: people[10], verb: "ausleihen", object: objectByAcc("das Buch"), tail: "in der Bibliothek", tailEs: "en la biblioteca" },
  { subject: people[11], verb: "bauen", object: objectByAcc("das Haus"), tail: "auf dem Land", tailEs: "en el campo" },
  { subject: people[0], verb: "erzählen", object: objectByAcc("die Geschichte"), tail: "nach dem Essen", tailEs: "después de comer" },
];

const sentenceEs = (subject, verb, objectEs, tense) => {
  const label = tenseLabels[tense];
  return `${subject.es[0].toUpperCase()}${subject.es.slice(1)} ${conjugations[verb].es} ${objectEs}. (${label})`;
};

const docs = [];
const add = (doc) => {
  docs.push({
    active: true,
    level: "A1-A2",
    createdBy: "codex-seed",
    ...doc,
  });
};

const tenses = ["präsens", "präteritum", "perfekt", "futur"];
const accusativeVerbs = [
  "essen", "trinken", "lesen", "schreiben", "sehen", "kaufen", "verkaufen", "nehmen",
  "öffnen", "schließen", "reparieren", "anmachen", "ausmachen", "tragen", "bringen",
  "kochen", "backen", "bezahlen", "machen", "haben", "brauchen", "aufräumen",
  "ausleihen", "bauen", "erzählen", "wissen",
];

accusativeVerbs.forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex) % people.length];
    const object = objectForVerb(verb, index + tenseIndex);
    add({
      type: "ask-case",
      sentence: sentenceForTense(subject, verb, `<u>${object.acc}</u>`, tense),
      target: object.acc,
      answer: "acusativo",
      explanation: `${verb} usa aquí objeto directo: Wen oder was?`,
      translation: sentenceEs(subject, verb, object.es, tense),
      verb,
      tense,
      tags: ["acusativo", "objeto-directo", verb, tense],
    });
  });
});

["fragen", "anrufen", "besuchen", "unterrichten"].forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex + 1) % people.length];
    const person = people[(index + tenseIndex + 5) % people.length];
    add({
      type: "ask-case",
      sentence: sentenceForTense(subject, verb, `<u>${person.acc}</u>`, tense),
      target: person.acc,
      answer: "acusativo",
      explanation: `${verb} usa aquí una persona como objeto directo: Wen?`,
      translation: sentenceEs(subject, verb, person.es, tense),
      verb,
      tense,
      tags: ["acusativo", "persona", verb, tense],
    });
  });
});

[
  "gehen", "kommen", "fahren", "laufen", "arbeiten", "lernen", "studieren", "stehen",
  "tanzen", "spielen", "sprechen", "singen", "fliegen", "rennen", "schlafen",
].forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex + 3) % people.length];
    const moves = ["gehen", "kommen", "fahren", "laufen", "fliegen", "rennen"].includes(verb);
    const place = moves
      ? movementPlaces[(index + tenseIndex) % movementPlaces.length]
      : activityPlaces[verb];
    const sentence = sentenceForTense(subject, verb, moves ? place.acc : place.dat, tense)
      .replace(subject.cap, `<u>${subject.cap}</u>`);
    add({
      type: "ask-case",
      sentence,
      target: subject.nom,
      answer: "nominativo",
      explanation: "La parte subrayada es el sujeto: Wer?",
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} ${conjugations[verb].es} ${moves ? place.esAcc : place.esDat}. (${tenseLabels[tense]})`,
      verb,
      tense,
      tags: ["nominativo", "sujeto", verb, tense],
    });
  });
});

["wollen", "können", "dürfen", "müssen", "sollen", "mögen"].forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex + 4) % people.length];
    const object = verb === "mögen"
      ? objectForVerb(verb, index + tenseIndex + 2)
      : objectForVerb("lesen", index + tenseIndex + 2);
    add({
      type: "ask-case",
      sentence: modalSentence(subject, verb, `<u>${object.acc}</u>`, tense),
      target: object.acc,
      answer: "acusativo",
      explanation: `Con ${verb}, el sustantivo funciona como objeto directo: Wen oder was?`,
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} ${conjugations[verb].es} ${object.es}. (${tenseLabels[tense]})`,
      verb,
      tense,
      tags: ["acusativo", "modal", verb, tense],
    });
  });
});

[
  { verb: "sich treffen mit", present: "trifft sich", past: "traf sich", participle: "getroffen", infinitive: "treffen", prep: "mit", answer: "dativo", es: "se reúne con" },
  { verb: "sich interessieren für", present: "interessiert sich", past: "interessierte sich", participle: "interessiert", infinitive: "interessieren", prep: "für", answer: "acusativo", es: "se interesa por" },
].forEach((item, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex + 2) % people.length];
    const person = people[(index + tenseIndex + 8) % people.length];
    const target = item.answer === "dativo" ? person.dat : person.acc;
    add({
      type: "acc-dat",
      sentence: reflexivePrepSentence(subject, item, person, tenseIndex),
      target: `${item.prep} ${target}`,
      answer: item.answer,
      explanation: `${item.prep} rige ${item.answer} en esta expresión.`,
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} ${item.es} ${person.es}. (${tenseLabels[tense]})`,
      verb: item.verb,
      tense,
      tags: [item.answer, "verbo-reflexivo", item.verb, tense],
    });
  });
});

["denken"].forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex + 5) % people.length];
    const object = objectForVerb("denken", index + tenseIndex + 4);
    add({
      type: "acc-dat",
      sentence: prepositionalSentence(subject, verb, `<u>an ${object.acc}</u>`, tense),
      target: `an ${object.acc}`,
      answer: "acusativo",
      explanation: "denken an usa acusativo para la cosa en la que se piensa: Woran?",
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} piensa en ${object.es}. (${tenseLabels[tense]})`,
      verb,
      tense,
      tags: ["acusativo", "preposición", verb, tense],
    });
  });
});

placementExamples.slice(0, 4).forEach((place, index) => {
  const subject = people[(index + 6) % people.length];
  const object = place.object;
  add({
    type: "acc-dat",
    sentence: `${subject.cap} stellt ${object.acc} <u>${place.acc}</u>.`,
    target: place.acc,
    answer: "acusativo",
    explanation: "stellen expresa movimiento o colocación hacia un lugar: wohin?",
    translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} coloca ${object.es} ${place.esAcc}.`,
    verb: "stellen",
    tense: "präsens",
    tags: ["acusativo", "wechselpräposition", "stellen"],
  });
});

extraAccusativeScenarios.forEach((scenario, scenarioIndex) => {
  tenses.forEach((tense) => {
    const objectWithTail = `<u>${scenario.object.acc}</u> ${scenario.tail}`;
    add({
      type: "ask-case",
      sentence: sentenceForTense(scenario.subject, scenario.verb, objectWithTail, tense),
      target: scenario.object.acc,
      answer: "acusativo",
      explanation: `${scenario.verb} usa aquí objeto directo: Wen oder was?`,
      translation: `${scenario.subject.es[0].toUpperCase()}${scenario.subject.es.slice(1)} ${conjugations[scenario.verb].es} ${scenario.object.es} ${scenario.tailEs}. (${tenseLabels[tense]})`,
      verb: scenario.verb,
      tense,
      tags: ["acusativo", "objeto-directo", "extra-pool", scenario.verb, tense],
      sortGroup: `extra-${scenarioIndex}`,
    });
  });
});

seatPlaces.forEach((place, index) => {
  const subject = people[(index + 6) % people.length];
  add({
    type: "acc-dat",
    sentence: `${subject.cap} setzt sich <u>${place.acc}</u>.`,
    target: place.acc,
    answer: "acusativo",
    explanation: "sich setzen expresa movimiento hacia un lugar: wohin?",
    translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} se sienta ${place.esAcc}.`,
    verb: "sich setzen",
    tense: "präsens",
    tags: ["acusativo", "reflexivo", "sich setzen"],
  });
});

["helfen", "antworten", "zuhören", "gefallen"].forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex + 2) % people.length];
    const recipient = people[(index + tenseIndex + 6) % people.length];
    add({
      type: "ask-case",
      sentence: sentenceForTense(subject, verb, `<u>${recipient.dat}</u>`, tense),
      target: recipient.dat,
      answer: "dativo",
      explanation: `${verb} rige dativo en esta oración: Wem?`,
      translation: sentenceEs(subject, verb, recipient.es, tense),
      verb,
      tense,
      tags: ["dativo", "verbo-dativo", verb, tense],
    });
  });
});

["geben", "schicken", "bringen"].forEach((verb, index) => {
  tenses.forEach((tense, tenseIndex) => {
    const subject = people[(index + tenseIndex) % people.length];
    const recipient = people[(index + tenseIndex + 4) % people.length];
    const object = objectForVerb(verb, index + tenseIndex + 7);
    const sentence = ditransitiveSentence(subject, verb, `<strong>${recipient.dat}</strong>`, `<strong>${object.acc}</strong>`, tense);
    add({
      type: "identify-case",
      sentence,
      target: recipient.dat,
      answer: "dativo",
      explanation: "Es la persona que recibe algo: Wem?",
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} ${conjugations[verb].es} ${object.es} a ${recipient.es}. (${tenseLabels[tense]})`,
      verb,
      tense,
      tags: ["dativo", "receptor", verb, tense],
    });
    add({
      type: "identify-case",
      sentence,
      target: object.acc,
      answer: "acusativo",
      explanation: "Es la cosa dada, enviada o traída: Wen oder was?",
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} ${conjugations[verb].es} ${object.es} a ${recipient.es}. (${tenseLabels[tense]})`,
      verb,
      tense,
      tags: ["acusativo", "objeto-directo", verb, tense],
    });
  });
});

placementExamples.forEach((place, index) => {
  const subject = people[index % people.length];
  const object = place.object;
  add({
    type: "acc-dat",
    sentence: `${subject.cap} legt ${object.acc} <u>${place.acc}</u>.`,
    target: place.acc,
    answer: "acusativo",
    explanation: "Movimiento hacia un lugar con Wechselpräposition: wohin?",
    translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} pone ${object.es} ${place.esAcc}.`,
    verb: "legen",
    tense: "präsens",
    tags: ["acusativo", "wechselpräposition", "legen"],
  });
  add({
    type: "acc-dat",
    sentence: `${object.nom[0].toUpperCase()}${object.nom.slice(1)} liegt <u>${place.dat}</u>.`,
    target: place.dat,
    answer: "dativo",
    explanation: "Ubicación fija con Wechselpräposition: wo?",
    translation: `${object.es[0].toUpperCase()}${object.es.slice(1)} está ${place.esDat}.`,
    verb: "liegen",
    tense: "präsens",
    tags: ["dativo", "wechselpräposition", "liegen"],
  });
});

movementPlaces.forEach((place, index) => {
  const subject = people[index % people.length];
  add({
    type: "acc-dat",
    sentence: `${subject.cap} geht <u>${place.acc}</u>.`,
    target: place.acc,
    answer: place.acc.startsWith("zu") || place.acc.startsWith("nach") ? "dativo" : "acusativo",
    explanation: place.acc.startsWith("zu")
      ? "zu rige dativo y marca destino."
      : place.acc.startsWith("nach")
        ? "nach rige dativo y marca destino."
      : "Movimiento hacia un destino: wohin?",
    translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} va ${place.esAcc}.`,
    verb: "gehen",
    tense: "präsens",
    tags: ["dirección", "gehen"],
  });
});

const genitiveNouns = [
  { nom: "der Name", es: "el nombre", predicates: [{ de: "ist bekannt", es: "es conocido" }, { de: "ist kurz", es: "es corto" }] },
  { nom: "die Tasche", es: "la bolsa", predicates: [{ de: "ist neu", es: "es nueva" }, { de: "liegt auf dem Tisch", es: "está sobre la mesa" }] },
  { nom: "das Fahrrad", es: "la bicicleta", predicates: [{ de: "ist neu", es: "es nueva" }, { de: "steht im Hof", es: "está en el patio" }] },
  { nom: "der Schlüssel", es: "la llave", predicates: [{ de: "ist wichtig", es: "es importante" }, { de: "liegt auf dem Tisch", es: "está sobre la mesa" }] },
  { nom: "die Wohnung", es: "el departamento", predicates: [{ de: "ist schön", es: "es bonito" }, { de: "ist groß", es: "es grande" }] },
  { nom: "das Zimmer", es: "el cuarto", predicates: [{ de: "ist klein", es: "es pequeño" }, { de: "ist sauber", es: "está limpio" }] },
  { nom: "der Computer", es: "la computadora", predicates: [{ de: "ist neu", es: "es nueva" }, { de: "steht im Büro", es: "está en la oficina" }] },
  { nom: "die Aufgabe", es: "la tarea", predicates: [{ de: "ist wichtig", es: "es importante" }, { de: "ist schwer", es: "es difícil" }] },
  { nom: "das Buch", es: "el libro", predicates: [{ de: "ist interessant", es: "es interesante" }, { de: "liegt auf dem Tisch", es: "está sobre la mesa" }] },
  { nom: "der Brief", es: "la carta", predicates: [{ de: "ist wichtig", es: "es importante" }, { de: "liegt in der Tasche", es: "está en la bolsa" }] },
  { nom: "die Lampe", es: "la lámpara", predicates: [{ de: "ist neu", es: "es nueva" }, { de: "steht im Zimmer", es: "está en el cuarto" }] },
  { nom: "das Fenster", es: "la ventana", predicates: [{ de: "ist offen", es: "está abierta" }, { de: "ist sauber", es: "está limpia" }] },
];

for (let index = 0; index < 96; index += 1) {
  const noun = genitiveNouns[index % genitiveNouns.length];
  const owner = people[(index + Math.floor(index / genitiveNouns.length)) % people.length];
  const predicate = noun.predicates[index % noun.predicates.length];
  add({
    type: "ask-case",
    sentence: `${noun.nom[0].toUpperCase()}${noun.nom.slice(1)} <u>${owner.gen}</u> ${predicate.de}.`,
    target: owner.gen,
    answer: "genitivo",
    explanation: `${owner.gen} expresa posesión o pertenencia: Wessen?`,
    translation: `${noun.es[0].toUpperCase()}${noun.es.slice(1)} de ${owner.es} ${predicate.es}.`,
    verb: "sein",
    tense: "präsens",
    tags: ["genitivo", "posesión", "extra-genitivo"],
    sortGroup: `genitive-ask-${index}`,
  });
}

for (let index = 0; index < 48; index += 1) {
  const noun = genitiveNouns[(index + 3) % genitiveNouns.length];
  const owner = people[(index + 5) % people.length];
  const predicate = noun.predicates[index % noun.predicates.length];
  add({
    type: "identify-case",
    sentence: `<strong>${noun.nom[0].toUpperCase()}${noun.nom.slice(1)}</strong> <strong>${owner.gen}</strong> ${predicate.de}.`,
    target: owner.gen,
    answer: "genitivo",
    explanation: "Indica de quién es algo: Wessen?",
    translation: `${noun.es[0].toUpperCase()}${noun.es.slice(1)} de ${owner.es} ${predicate.es}.`,
    verb: "sein",
    tense: "präsens",
    tags: ["genitivo", "posesión", "identify-case", "extra-genitivo"],
    sortGroup: `genitive-identify-${index}`,
  });
}

const seed = {
  generatedAt: new Date().toISOString(),
  collection: "sentences",
  verbs,
  count: docs.length,
  docs,
};

await writeFile(new URL("../data/firestore-seed-sentences.json", import.meta.url), `${JSON.stringify(seed, null, 2)}\n`);
console.log(`Generated ${docs.length} Firestore sentence documents.`);
