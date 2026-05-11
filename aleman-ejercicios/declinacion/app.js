const CASES = {
  nominativo: {
    label: "Nominativo",
    question: "Wer / Was?",
    hint: "sujeto o atributo con sein/werden/bleiben",
  },
  acusativo: {
    label: "Acusativo",
    question: "Wen / Was?",
    hint: "objeto directo o movimiento hacia un lugar",
  },
  dativo: {
    label: "Dativo",
    question: "Wem?",
    hint: "objeto indirecto, receptor o posición fija",
  },
  genitivo: {
    label: "Genitivo",
    question: "Wessen?",
    hint: "posesión o pertenencia",
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyDUUMKUyCeTdZo3tdRCubLKT6e3gJVqBJA",
  authDomain: "deutsch-ad427.firebaseapp.com",
  projectId: "deutsch-ad427",
  storageBucket: "deutsch-ad427.firebasestorage.app",
  messagingSenderId: "555516594899",
  appId: "1:555516594899:web:a1c6f8f2d8109fd4ffa226",
  measurementId: "G-2RYDXGT095",
};

const FIRESTORE_COLLECTION = "sentences";

const askCaseBank = [
  ["Der Hund trägt <u>einen roten Ball</u>.", "acusativo", "tragen pide objeto directo: Wen oder was trägt der Hund?", "El perro lleva una pelota roja."],
  ["<u>Die Lehrerin</u> erklärt die Aufgabe.", "nominativo", "La persona que realiza la acción es el sujeto: Wer erklärt die Aufgabe?", "La maestra explica la tarea."],
  ["Wir helfen <u>dem Nachbarn</u> im Garten.", "dativo", "helfen rige dativo: Wem helfen wir?", "Ayudamos al vecino en el jardín."],
  ["Das Fahrrad <u>meines Bruders</u> ist neu.", "genitivo", "meines Bruders indica pertenencia: Wessen Fahrrad?", "La bicicleta de mi hermano es nueva."],
  ["Anna kauft <u>einen Apfel</u> auf dem Markt.", "acusativo", "kaufen toma objeto directo: Was kauft Anna?", "Anna compra una manzana en el mercado."],
  ["<u>Der kleine Junge</u> liest ein Buch.", "nominativo", "Der kleine Junge es quien lee: Wer liest ein Buch?", "El niño pequeño lee un libro."],
  ["Ich antworte <u>der Freundin</u> sofort.", "dativo", "antworten rige dativo: Wem antworte ich?", "Le respondo a la amiga de inmediato."],
  ["Die Tasche <u>der Mutter</u> liegt im Flur.", "genitivo", "der Mutter expresa posesión: Wessen Tasche?", "La bolsa de la madre está en el pasillo."],
  ["Paul sieht <u>den Film</u> am Abend.", "acusativo", "sehen toma objeto directo: Was sieht Paul?", "Paul ve la película por la noche."],
  ["<u>Das Wetter</u> ist heute schön.", "nominativo", "Das Wetter funciona como sujeto: Was ist heute schön?", "El clima está bonito hoy."],
  ["Der Arzt gibt <u>dem Kind</u> Medizin.", "dativo", "dem Kind es receptor: Wem gibt der Arzt Medizin?", "El médico le da medicina al niño."],
  ["Die Farbe <u>des Autos</u> gefällt mir.", "genitivo", "des Autos indica de quién o de qué es el color: Wessen Farbe?", "Me gusta el color del coche."],
  ["Mia schreibt <u>eine Nachricht</u>.", "acusativo", "schreiben puede tomar objeto directo: Was schreibt Mia?", "Mia escribe un mensaje."],
  ["<u>Meine Schwester</u> wohnt in Berlin.", "nominativo", "Meine Schwester es el sujeto de wohnt: Wer wohnt in Berlin?", "Mi hermana vive en Berlín."],
  ["Wir danken <u>dem Lehrer</u>.", "dativo", "danken rige dativo: Wem danken wir?", "Le damos las gracias al maestro."],
  ["Der Name <u>des Hotels</u> ist kurz.", "genitivo", "des Hotels expresa pertenencia: Wessen Name?", "El nombre del hotel es corto."],
];

const identifyBank = [
  {
    sentence: "<strong>Die Kinder</strong> geben <strong>dem Mann</strong> <strong>den Schlüssel</strong>.",
    translation: "Los niños le dan la llave al hombre.",
    targets: [
      ["die Kinder", "nominativo", "Son quienes dan el objeto."],
      ["dem Mann", "dativo", "Es el receptor de la acción."],
      ["den Schlüssel", "acusativo", "Es lo que se entrega."],
    ],
  },
  {
    sentence: "<strong>Der Vater</strong> liest <strong>dem Baby</strong> <strong>eine Geschichte</strong> vor.",
    translation: "El padre le lee una historia al bebé.",
    targets: [
      ["der Vater", "nominativo", "Es el sujeto."],
      ["dem Baby", "dativo", "Es quien recibe la lectura."],
      ["eine Geschichte", "acusativo", "Es el objeto leido."],
    ],
  },
  {
    sentence: "<strong>Die Wohnung</strong> <strong>meiner Tante</strong> hat <strong>einen Balkon</strong>.",
    translation: "El departamento de mi tía tiene un balcón.",
    targets: [
      ["die Wohnung", "nominativo", "Es el sujeto de hat."],
      ["meiner Tante", "genitivo", "Indica posesión."],
      ["einen Balkon", "acusativo", "Es el objeto directo de hat."],
    ],
  },
  {
    sentence: "<strong>Der Student</strong> zeigt <strong>der Frau</strong> <strong>den Plan</strong>.",
    translation: "El estudiante le muestra el plano a la mujer.",
    targets: [
      ["der Student", "nominativo", "Realiza la acción."],
      ["der Frau", "dativo", "Persona a quien se muestra algo."],
      ["den Plan", "acusativo", "Lo que se muestra."],
    ],
  },
  {
    sentence: "<strong>Das Zimmer</strong> <strong>des Kindes</strong> braucht <strong>eine Lampe</strong>.",
    translation: "La habitación del niño necesita una lámpara.",
    targets: [
      ["das Zimmer", "nominativo", "Es el sujeto."],
      ["des Kindes", "genitivo", "Marca pertenencia."],
      ["eine Lampe", "acusativo", "Es lo que necesita."],
    ],
  },
  {
    sentence: "<strong>Die Nachbarin</strong> bringt <strong>dem alten Mann</strong> <strong>eine Suppe</strong>.",
    translation: "La vecina le lleva una sopa al hombre mayor.",
    targets: [
      ["die Nachbarin", "nominativo", "Quién trae algo."],
      ["dem alten Mann", "dativo", "Destinatario."],
      ["eine Suppe", "acusativo", "Objeto directo."],
    ],
  },
  {
    sentence: "<strong>Der Preis</strong> <strong>des Buches</strong> überrascht <strong>die Kundin</strong>.",
    translation: "El precio del libro sorprende a la clienta.",
    targets: [
      ["der Preis", "nominativo", "Es aquello que sorprende."],
      ["des Buches", "genitivo", "Indica de qué es el precio."],
      ["die Kundin", "acusativo", "Persona afectada por überraschen."],
    ],
  },
  {
    sentence: "<strong>Meine Freundin</strong> schenkt <strong>ihrem Bruder</strong> <strong>ein Hemd</strong>.",
    translation: "Mi amiga le regala una camisa a su hermano.",
    targets: [
      ["meine Freundin", "nominativo", "Sujeto de schenkt."],
      ["ihrem Bruder", "dativo", "Receptor del regalo."],
      ["ein Hemd", "acusativo", "Cosa regalada."],
    ],
  },
];

const accDatBank = [
  ["Wir gehen heute <u>in den Park</u>.", "acusativo", "Movimiento hacia un lugar con Wechselpräposition: wohin?", "Hoy vamos al parque."],
  ["Die Tasche liegt <u>auf dem Stuhl</u>.", "dativo", "Posición fija: wo?", "La bolsa está sobre la silla."],
  ["Ich stelle die Tasse <u>auf den Tisch</u>.", "acusativo", "Movimiento/cambio de posición: wohin?", "Pongo la taza sobre la mesa."],
  ["Der Schlüssel ist <u>in der Tasche</u>.", "dativo", "Ubicación sin movimiento: wo?", "La llave está en la bolsa."],
  ["Sie wartet <u>an der Haltestelle</u>.", "dativo", "Lugar fijo: wo?", "Ella espera en la parada."],
  ["Max hängt das Bild <u>an die Wand</u>.", "acusativo", "Dirección hacia la pared: wohin?", "Max cuelga el cuadro en la pared."],
  ["Die Katze sitzt <u>unter dem Tisch</u>.", "dativo", "Posición: wo?", "El gato está sentado debajo de la mesa."],
  ["Lea legt das Buch <u>neben das Bett</u>.", "acusativo", "Movimiento hacia una ubicación: wohin?", "Lea pone el libro junto a la cama."],
  ["Wir fahren <u>zum Bahnhof</u>.", "dativo", "zu siempre rige dativo.", "Vamos en vehículo a la estación de tren."],
  ["Ich kaufe Blumen <u>für meine Mutter</u>.", "acusativo", "für siempre rige acusativo.", "Compro flores para mi madre."],
  ["Der Kaffee ist <u>für den Gast</u>.", "acusativo", "für rige acusativo.", "El café es para el invitado."],
  ["Tom spricht <u>mit dem Arzt</u>.", "dativo", "mit siempre rige dativo.", "Tom habla con el médico."],
  ["Die Kinder laufen <u>durch den Garten</u>.", "acusativo", "durch rige acusativo.", "Los niños corren por el jardín."],
  ["Nach dem Kurs fahre ich nach Hause.", "dativo", "nach rige dativo.", "Después del curso voy a casa."],
  ["Ohne den Mantel ist es kalt.", "acusativo", "ohne rige acusativo.", "Sin el abrigo hace frío."],
  ["Seit einer Woche lerne ich Deutsch.", "dativo", "seit rige dativo.", "Desde hace una semana aprendo alemán."],
];

const curatedPeople = [
  { nom: "Der Mann", dat: "dem Mann", gen: "des Mannes", es: "el hombre" },
  { nom: "Die Frau", dat: "der Frau", gen: "der Frau", es: "la mujer" },
  { nom: "Das Kind", dat: "dem Kind", gen: "des Kindes", es: "el niño" },
  { nom: "Der Lehrer", dat: "dem Lehrer", gen: "des Lehrers", es: "el maestro" },
  { nom: "Die Lehrerin", dat: "der Lehrerin", gen: "der Lehrerin", es: "la maestra" },
  { nom: "Der Student", dat: "dem Studenten", gen: "des Studenten", es: "el estudiante" },
  { nom: "Die Studentin", dat: "der Studentin", gen: "der Studentin", es: "la estudiante" },
  { nom: "Der Bruder", dat: "dem Bruder", gen: "des Bruders", es: "el hermano" },
  { nom: "Die Schwester", dat: "der Schwester", gen: "der Schwester", es: "la hermana" },
  { nom: "Der Freund", dat: "dem Freund", gen: "des Freundes", es: "el amigo" },
  { nom: "Die Freundin", dat: "der Freundin", gen: "der Freundin", es: "la amiga" },
  { nom: "Der Nachbar", dat: "dem Nachbarn", gen: "des Nachbarn", es: "el vecino" },
  { nom: "Die Nachbarin", dat: "der Nachbarin", gen: "der Nachbarin", es: "la vecina" },
  { nom: "Der Arzt", dat: "dem Arzt", gen: "des Arztes", es: "el médico" },
  { nom: "Die Ärztin", dat: "der Ärztin", gen: "der Ärztin", es: "la médica" },
  { nom: "Der Vater", dat: "dem Vater", gen: "des Vaters", es: "el padre" },
  { nom: "Die Mutter", dat: "der Mutter", gen: "der Mutter", es: "la madre" },
  { nom: "Der Gast", dat: "dem Gast", gen: "des Gastes", es: "el invitado" },
  { nom: "Die Kundin", dat: "der Kundin", gen: "der Kundin", es: "la clienta" },
  { nom: "Der Junge", dat: "dem Jungen", gen: "des Jungen", es: "el muchacho" },
];

const curatedObjects = [
  { acc: "den Apfel", nom: "der Apfel", es: "la manzana" },
  { acc: "die Tasche", nom: "die Tasche", es: "la bolsa" },
  { acc: "das Buch", nom: "das Buch", es: "el libro" },
  { acc: "den Brief", nom: "der Brief", es: "la carta" },
  { acc: "die Lampe", nom: "die Lampe", es: "la lámpara" },
  { acc: "das Fahrrad", nom: "das Fahrrad", es: "la bicicleta" },
  { acc: "den Schlüssel", nom: "der Schlüssel", es: "la llave" },
  { acc: "die Zeitung", nom: "die Zeitung", es: "el periódico" },
  { acc: "das Handy", nom: "das Handy", es: "el celular" },
  { acc: "den Kaffee", nom: "der Kaffee", es: "el café" },
  { acc: "die Suppe", nom: "die Suppe", es: "la sopa" },
  { acc: "das Wasser", nom: "das Wasser", es: "el agua" },
  { acc: "den Stift", nom: "der Stift", es: "el bolígrafo" },
  { acc: "die Blume", nom: "die Blume", es: "la flor" },
  { acc: "das Fenster", nom: "das Fenster", es: "la ventana" },
  { acc: "den Film", nom: "der Film", es: "la película" },
  { acc: "die Musik", nom: "die Musik", es: "la música" },
  { acc: "das Brot", nom: "das Brot", es: "el pan" },
  { acc: "den Plan", nom: "der Plan", es: "el plan" },
  { acc: "die Rechnung", nom: "die Rechnung", es: "la cuenta" },
];

const curatedPlaces = [
  { acc: "in den Park", dat: "im Park", esAcc: "al parque", esDat: "en el parque" },
  { acc: "in die Küche", dat: "in der Küche", esAcc: "a la cocina", esDat: "en la cocina" },
  { acc: "ins Zimmer", dat: "im Zimmer", esAcc: "al cuarto", esDat: "en el cuarto" },
  { acc: "auf den Tisch", dat: "auf dem Tisch", esAcc: "sobre la mesa", esDat: "sobre la mesa" },
  { acc: "an die Wand", dat: "an der Wand", esAcc: "a la pared", esDat: "en la pared" },
  { acc: "unter den Stuhl", dat: "unter dem Stuhl", esAcc: "debajo de la silla", esDat: "debajo de la silla" },
  { acc: "neben das Bett", dat: "neben dem Bett", esAcc: "junto a la cama", esDat: "junto a la cama" },
  { acc: "vor das Haus", dat: "vor dem Haus", esAcc: "frente a la casa", esDat: "frente a la casa" },
  { acc: "hinter die Tür", dat: "hinter der Tür", esAcc: "detrás de la puerta", esDat: "detrás de la puerta" },
  { acc: "über das Sofa", dat: "über dem Sofa", esAcc: "encima del sofá", esDat: "encima del sofá" },
];

const curatedExpansion = (() => {
  const ask = [];
  const identify = [];
  const accDat = [];
  const personAcc = (person) => {
    if (person.nom.startsWith("Die ")) return `die ${person.nom.slice(4)}`;
    if (person.nom.startsWith("Das ")) return `das ${person.nom.slice(4)}`;
    const masculine = person.nom.slice(4);
    const nDeclension = ["Student", "Nachbar", "Junge"].includes(masculine) ? "n" : "";
    return `den ${masculine}${nDeclension}`;
  };
  const nomVerbs = [
    ["liest jeden Morgen.", "lee cada mañana."],
    ["lernt Deutsch.", "aprende alemán."],
    ["arbeitet heute.", "trabaja hoy."],
    ["kocht am Abend.", "cocina por la noche."],
    ["schläft lange.", "duerme mucho."],
    ["wartet kurz.", "espera un momento."],
    ["singt leise.", "canta en voz baja."],
    ["tanzt gern.", "baila con gusto."],
    ["spielt im Garten.", "juega en el jardín."],
    ["telefoniert am Mittag.", "habla por teléfono al mediodía."],
  ];
  const accVerbs = [
    ["kauft", "compra"], ["liest", "lee"], ["sucht", "busca"], ["findet", "encuentra"],
    ["braucht", "necesita"], ["öffnet", "abre"], ["nimmt", "toma"], ["sieht", "ve"],
    ["schreibt", "escribe"], ["bezahlt", "paga"],
  ];
  const datVerbs = [
    ["hilft", "ayuda a"], ["dankt", "agradece a"], ["antwortet", "responde a"],
    ["glaubt", "cree a"], ["folgt", "sigue a"], ["gratuliert", "felicita a"],
    ["gehört", "pertenece a"], ["gefällt", "gusta a"], ["fehlt", "le falta a"],
    ["passt", "le queda bien a"],
  ];

  curatedPeople.forEach((person, index) => {
    const [deVerb, esVerb] = nomVerbs[index % nomVerbs.length];
    ask.push([`<u>${person.nom}</u> ${deVerb}`, "nominativo", `${person.nom} es quien realiza la acción: Wer?`, `${person.es[0].toUpperCase()}${person.es.slice(1)} ${esVerb}`]);
  });

  curatedPeople.forEach((person, index) => {
    const object = curatedObjects[index % curatedObjects.length];
    const [deVerb, esVerb] = accVerbs[index % accVerbs.length];
    ask.push([`${person.nom} ${deVerb} <u>${object.acc}</u>.`, "acusativo", `${object.acc} es el objeto directo: Wen oder was?`, `${person.es[0].toUpperCase()}${person.es.slice(1)} ${esVerb} ${object.es}.`]);
  });

  curatedPeople.forEach((person, index) => {
    const recipient = curatedPeople[(index + 5) % curatedPeople.length];
    const [deVerb, esVerb] = datVerbs[index % datVerbs.length];
    ask.push([`${person.nom} ${deVerb} <u>${recipient.dat}</u>.`, "dativo", `${recipient.dat} recibe o experimenta la acción: Wem?`, `${person.es[0].toUpperCase()}${person.es.slice(1)} ${esVerb} ${recipient.es}.`]);
  });

  curatedObjects.forEach((object, index) => {
    const owner = curatedPeople[index % curatedPeople.length];
    ask.push([`${object.nom[0].toUpperCase()}${object.nom.slice(1)} <u>${owner.gen}</u> ist hier.`, "genitivo", `${owner.gen} expresa pertenencia: Wessen?`, `${object.es[0].toUpperCase()}${object.es.slice(1)} de ${owner.es} está aquí.`]);
  });

  for (let index = 0; index < 40; index += 1) {
    const subject = curatedPeople[index % curatedPeople.length];
    const recipient = curatedPeople[(index + 7) % curatedPeople.length];
    const object = curatedObjects[(index + 3) % curatedObjects.length];
    identify.push({
      sentence: `<strong>${subject.nom}</strong> gibt <strong>${recipient.dat}</strong> <strong>${object.acc}</strong>.`,
      translation: `${subject.es[0].toUpperCase()}${subject.es.slice(1)} le da ${object.es} a ${recipient.es}.`,
      targets: [
        [subject.nom.toLowerCase(), "nominativo", "Es el sujeto de la oración."],
        [recipient.dat, "dativo", "Es la persona que recibe algo."],
        [object.acc, "acusativo", "Es el objeto directo."],
      ],
    });
  }

  for (let index = 0; index < 20; index += 1) {
    const object = curatedObjects[index % curatedObjects.length];
    const owner = curatedPeople[(index + 4) % curatedPeople.length];
    const buyer = curatedPeople[(index + 9) % curatedPeople.length];
    const buyerAcc = personAcc(buyer);
    identify.push({
      sentence: `<strong>${object.nom[0].toUpperCase()}${object.nom.slice(1)}</strong> <strong>${owner.gen}</strong> braucht <strong>${buyerAcc}</strong>.`,
      translation: `${object.es[0].toUpperCase()}${object.es.slice(1)} de ${owner.es} necesita a ${buyer.es}.`,
      targets: [
        [`${object.nom}`, "nominativo", "Es el sujeto de la oración."],
        [owner.gen, "genitivo", "Indica posesión o pertenencia."],
        [buyerAcc, "acusativo", "Es la persona requerida por braucht."],
      ],
    });
  }

  curatedPlaces.forEach((place, index) => {
    const object = curatedObjects[index % curatedObjects.length];
    accDat.push([`Ich lege ${object.acc} <u>${place.acc}</u>.`, "acusativo", "Hay movimiento hacia un lugar: wohin?", `Pongo ${object.es} ${place.esAcc}.`]);
    accDat.push([`${object.nom[0].toUpperCase()}${object.nom.slice(1)} liegt <u>${place.dat}</u>.`, "dativo", "Describe una ubicación fija: wo?", `${object.es[0].toUpperCase()}${object.es.slice(1)} está ${place.esDat}.`]);
    accDat.push([`Wir gehen heute <u>${place.acc}</u>.`, "acusativo", "Ir hacia un lugar usa acusativo con preposición de doble vía: wohin?", `Hoy vamos ${place.esAcc}.`]);
    accDat.push([`Wir warten <u>${place.dat}</u>.`, "dativo", "Esperar en un lugar fijo responde a wo?", `Esperamos ${place.esDat}.`]);
  });

  curatedPeople.slice(0, 10).forEach((person, index) => {
    const object = curatedObjects[(index + 10) % curatedObjects.length];
    accDat.push([`Ich kaufe ${object.acc} <u>für ${personAcc(person)}</u>.`, "acusativo", "für siempre rige acusativo.", `Compro ${object.es} para ${person.es}.`]);
    accDat.push([`${person.nom} spricht <u>mit ${curatedPeople[(index + 3) % curatedPeople.length].dat}</u>.`, "dativo", "mit siempre rige dativo.", `${person.es[0].toUpperCase()}${person.es.slice(1)} habla con ${curatedPeople[(index + 3) % curatedPeople.length].es}.`]);
  });

  return { ask, identify, accDat };
})();

askCaseBank.push(...curatedExpansion.ask);
identifyBank.push(...curatedExpansion.identify);
accDatBank.push(...curatedExpansion.accDat);

const state = {
  questions: [],
  pool: null,
  source: "local",
};

const randomInt = (max) => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
};

const shuffle = (items) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
};

const pick = (items, count) => shuffle(items).slice(0, count);

const toQuestion = ([sentence, answer, explanation, translation]) => ({
  sentence,
  answer,
  explanation,
  translation,
});

const localQuestionPool = () => ({
  ask: askCaseBank.map(toQuestion),
  identify: flattenIdentifyBank().map((item) => ({
    sentence: item.sentence,
    target: item.target,
    answer: item.answer,
    explanation: item.note,
    translation: item.translation,
  })),
  accDat: accDatBank.map(toQuestion),
});

const updateSourceStatus = (status) => {
  const statusNode = document.querySelector("#source-status");
  if (!statusNode) return;
  statusNode.textContent = status;
};

const normalizeRemoteQuestion = (doc) => {
  const data = doc.data();
  const type = data.type || data.exerciseType;
  const normalizedType = {
    ask: "ask",
    "ask-case": "ask",
    identify: "identify",
    "identify-case": "identify",
    accdat: "accDat",
    "acc-dat": "accDat",
    "accusative-dative": "accDat",
  }[type];

  if (!normalizedType || !data.sentence || !data.answer || !data.explanation || !data.translation) {
    return null;
  }

  return {
    type: normalizedType,
    sentence: data.sentence,
    target: data.target || "",
    answer: data.answer,
    explanation: data.explanation,
    translation: data.translation,
  };
};

const loadRemoteQuestionPool = async () => {
  try {
    const [{ initializeApp }, firestore] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"),
    ]);
    const { getFirestore, collection, getDocs, query, where } = firestore;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const snapshot = await getDocs(query(
      collection(db, FIRESTORE_COLLECTION),
      where("active", "==", true),
    ));

    const remotePool = { ask: [], identify: [], accDat: [] };
    snapshot.docs
      .map(normalizeRemoteQuestion)
      .filter(Boolean)
      .forEach((question) => {
        remotePool[question.type].push(question);
      });

    if (remotePool.ask.length && remotePool.identify.length && remotePool.accDat.length) {
      return remotePool;
    }
  } catch (error) {
    console.warn("No se pudo cargar Firestore. Usando banco local.", error);
  }

  return null;
};

const caseOptions = () => shuffle(Object.entries(CASES).map(([value, item]) => ({
  value,
  label: item.label,
})));

const questionOptions = () => shuffle(Object.entries(CASES).map(([value, item]) => ({
  value,
  label: item.question,
})));

const escapeAttribute = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const translationIcon = (translation) => `
  <button class="translation-tip" type="button" aria-label="Ver traducción" data-tooltip="${escapeAttribute(translation)}">
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.1 2.3 3.1 5.3 3.1 9s-1 6.7-3.1 9M12 3c-2.1 2.3-3.1 5.3-3.1 9s1 6.7 3.1 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  </button>
`;

const sentenceWithTranslation = (sentence, translation) => `
  <span class="sentence__text">${sentence}</span>
  ${translationIcon(translation)}
`;

const makeQuestionCard = ({ id, sentence, target, answer, options, explanation, translation }) => {
  const article = document.createElement("article");
  article.className = "question-card";
  article.dataset.answer = answer;
  article.dataset.id = id;

  const sentenceNode = document.createElement("p");
  sentenceNode.className = "sentence";
  sentenceNode.innerHTML = target
    ? `<span class="target">${target}</span> -> ${sentenceWithTranslation(sentence, translation)}`
    : sentenceWithTranslation(sentence, translation);

  const answers = document.createElement("div");
  answers.className = "answers";
  answers.setAttribute("role", "radiogroup");
  answers.setAttribute("aria-label", "Opciones de respuesta");

  options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    label.innerHTML = `
      <input type="radio" name="${id}" value="${option.value}">
      <span>${option.label}</span>
    `;
    answers.append(label);
  });

  const feedback = document.createElement("p");
  feedback.className = "feedback";
  feedback.textContent = explanation;

  article.append(sentenceNode, answers, feedback);
  return article;
};

const flattenIdentifyBank = () => identifyBank.flatMap((item) =>
  item.targets.map(([target, answer, note]) => ({
    sentence: item.sentence,
    translation: item.translation,
    target,
    answer,
    note,
  }))
);

const render = () => {
  const pool = state.pool || localQuestionPool();
  const selectedCount = Number(document.querySelector("#question-count").value);
  const askCount = Math.floor(selectedCount / 3);
  const identifyCount = Math.floor(selectedCount / 3);
  const accDatCount = selectedCount - askCount - identifyCount;
  const askList = document.querySelector("#ask-case-list");
  const identifyList = document.querySelector("#identify-case-list");
  const accDatList = document.querySelector("#acc-dat-list");

  askList.innerHTML = "";
  identifyList.innerHTML = "";
  accDatList.innerHTML = "";
  state.questions = [];

  pick(pool.ask, askCount).forEach((item, index) => {
    const id = `ask-${index}`;
    state.questions.push(id);
    askList.append(makeQuestionCard({
      id,
      sentence: item.sentence,
      answer: item.answer,
      options: questionOptions(),
      explanation: `${CASES[item.answer].label}: ${item.explanation}`,
      translation: item.translation,
    }));
  });

  pick(pool.identify, identifyCount).forEach((item, index) => {
    const id = `identify-${index}`;
    state.questions.push(id);
    identifyList.append(makeQuestionCard({
      id,
      target: item.target,
      sentence: item.sentence,
      answer: item.answer,
      options: caseOptions(),
      explanation: `${CASES[item.answer].label}: ${item.explanation}`,
      translation: item.translation,
    }));
  });

  pick(pool.accDat, accDatCount).forEach((item, index) => {
    const id = `accdat-${index}`;
    state.questions.push(id);
    accDatList.append(makeQuestionCard({
      id,
      sentence: item.sentence,
      answer: item.answer,
      options: shuffle([
        { value: "acusativo", label: "Acusativo" },
        { value: "dativo", label: "Dativo" },
      ]),
      explanation: `${CASES[item.answer].label}: ${item.explanation}`,
      translation: item.translation,
    }));
  });

  updateScore(0, state.questions.length);
};

const updateScore = (correct, total) => {
  document.querySelector("#score").textContent = `${correct} / ${total}`;
};

const checkAll = () => {
  let correct = 0;
  const cards = document.querySelectorAll(".question-card[data-answer]");

  cards.forEach((card) => {
    const selected = card.querySelector("input:checked");
    const isCorrect = selected?.value === card.dataset.answer;

    card.classList.add("has-feedback");
    card.classList.toggle("is-correct", Boolean(isCorrect));
    card.classList.toggle("is-wrong", Boolean(selected && !isCorrect));

    if (isCorrect) correct += 1;
  });

  updateScore(correct, cards.length);
};

document.querySelector("#check-all").addEventListener("click", checkAll);
document.querySelector("#new-exercise").addEventListener("click", render);
document.querySelector("#question-count").addEventListener("change", render);

const init = async () => {
  state.pool = localQuestionPool();
  updateSourceStatus("Banco local");
  render();

  const remotePool = await loadRemoteQuestionPool();
  if (remotePool) {
    state.pool = remotePool;
    state.source = "firestore";
    updateSourceStatus("Firestore activo");
    render();
  }
};

init();
