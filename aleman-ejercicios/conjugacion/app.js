const persons = [
  { key: "ich", label: "ich" },
  { key: "du", label: "du" },
  { key: "er", label: "er / sie / es" },
  { key: "wir", label: "wir" },
  { key: "ihr", label: "ihr" },
  { key: "sie", label: "sie / Sie" },
];

const tenses = ["Präsens", "Präteritum", "Perfekt", "Futur I"];
const werden = ["werde", "wirst", "wird", "werden", "werdet", "werden"];
const haben = ["habe", "hast", "hat", "haben", "habt", "haben"];
const sein = ["bin", "bist", "ist", "sind", "seid", "sind"];
const reflexiveAcc = ["mich", "dich", "sich", "uns", "euch", "sich"];

const verbs = [
  { infinitive: "essen", translation: "comer", present: ["esse", "isst", "isst", "essen", "esst", "essen"], preterite: ["aß", "aßest", "aß", "aßen", "aßt", "aßen"], perfectAux: "haben", participle: "gegessen" },
  { infinitive: "trinken", translation: "beber", participle: "getrunken" },
  { infinitive: "lesen", translation: "leer", present: ["lese", "liest", "liest", "lesen", "lest", "lesen"], preterite: ["las", "lasest", "las", "lasen", "last", "lasen"], perfectAux: "haben", participle: "gelesen" },
  { infinitive: "schreiben", translation: "escribir", preterite: ["schrieb", "schriebst", "schrieb", "schrieben", "schriebt", "schrieben"], participle: "geschrieben" },
  { infinitive: "sehen", translation: "ver", present: ["sehe", "siehst", "sieht", "sehen", "seht", "sehen"], preterite: ["sah", "sahst", "sah", "sahen", "saht", "sahen"], participle: "gesehen" },
  { infinitive: "kaufen", translation: "comprar" },
  { infinitive: "verkaufen", translation: "vender", noGe: true },
  { infinitive: "nehmen", translation: "tomar / llevar", present: ["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"], preterite: ["nahm", "nahmst", "nahm", "nahmen", "nahmt", "nahmen"], participle: "genommen" },
  { infinitive: "geben", translation: "dar", present: ["gebe", "gibst", "gibt", "geben", "gebt", "geben"], preterite: ["gab", "gabst", "gab", "gaben", "gabt", "gaben"], participle: "gegeben" },
  { infinitive: "gehen", translation: "ir", preterite: ["ging", "gingst", "ging", "gingen", "gingt", "gingen"], perfectAux: "sein", participle: "gegangen" },
  { infinitive: "kommen", translation: "venir", preterite: ["kam", "kamst", "kam", "kamen", "kamt", "kamen"], perfectAux: "sein", participle: "gekommen" },
  { infinitive: "fahren", translation: "ir en vehículo / manejar", present: ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], preterite: ["fuhr", "fuhrst", "fuhr", "fuhren", "fuhrt", "fuhren"], perfectAux: "sein", participle: "gefahren" },
  { infinitive: "laufen", translation: "correr / caminar", present: ["laufe", "läufst", "läuft", "laufen", "lauft", "laufen"], preterite: ["lief", "liefst", "lief", "liefen", "lieft", "liefen"], perfectAux: "sein", participle: "gelaufen" },
  { infinitive: "anrufen", translation: "llamar por teléfono", prefix: "an", base: "rufen", present: ["rufe an", "rufst an", "ruft an", "rufen an", "ruft an", "rufen an"], preterite: ["rief an", "riefst an", "rief an", "riefen an", "rieft an", "riefen an"], participle: "angerufen" },
  { infinitive: "aufräumen", translation: "ordenar / recoger", prefix: "auf", base: "räumen", participle: "aufgeräumt" },
  { infinitive: "zuhören", translation: "escuchar con atención", prefix: "zu", base: "hören", participle: "zugehört" },
  { infinitive: "öffnen", translation: "abrir", stem: "öffn", endings: ["e", "est", "et", "en", "et", "en"] },
  { infinitive: "schließen", translation: "cerrar", preterite: ["schloss", "schlossest", "schloss", "schlossen", "schlosst", "schlossen"], participle: "geschlossen" },
  { infinitive: "fragen", translation: "preguntar" },
  { infinitive: "antworten", translation: "responder", stem: "antwort", endings: ["e", "est", "et", "en", "et", "en"] },
  { infinitive: "spielen", translation: "jugar / tocar" },
  { infinitive: "sprechen", translation: "hablar", present: ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"], preterite: ["sprach", "sprachst", "sprach", "sprachen", "spracht", "sprachen"], participle: "gesprochen" },
  { infinitive: "arbeiten", translation: "trabajar", stem: "arbeit", endings: ["e", "est", "et", "en", "et", "en"] },
  { infinitive: "reparieren", translation: "reparar", noGe: true },
  { infinitive: "lernen", translation: "aprender" },
  { infinitive: "studieren", translation: "estudiar en la universidad", noGe: true },
  { infinitive: "anmachen", translation: "encender", prefix: "an", base: "machen", participle: "angemacht" },
  { infinitive: "ausmachen", translation: "apagar", prefix: "aus", base: "machen", participle: "ausgemacht" },
  { infinitive: "stellen", translation: "poner de pie / colocar" },
  { infinitive: "stehen", translation: "estar de pie", preterite: ["stand", "standest", "stand", "standen", "standet", "standen"], participle: "gestanden" },
  { infinitive: "legen", translation: "poner acostado / colocar" },
  { infinitive: "liegen", translation: "estar acostado / estar situado", preterite: ["lag", "lagst", "lag", "lagen", "lagt", "lagen"], participle: "gelegen" },
  { infinitive: "tanzen", translation: "bailar" },
  { infinitive: "unterrichten", translation: "enseñar / dar clase", noGe: true },
  { infinitive: "besuchen", translation: "visitar / asistir a", noGe: true },
  { infinitive: "bauen", translation: "construir" },
  { infinitive: "wollen", translation: "querer", present: ["will", "willst", "will", "wollen", "wollt", "wollen"], preterite: ["wollte", "wolltest", "wollte", "wollten", "wolltet", "wollten"], participle: "gewollt" },
  { infinitive: "können", translation: "poder / saber hacer", present: ["kann", "kannst", "kann", "können", "könnt", "können"], preterite: ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"], participle: "gekonnt" },
  { infinitive: "dürfen", translation: "poder / tener permiso", present: ["darf", "darfst", "darf", "dürfen", "dürft", "dürfen"], preterite: ["durfte", "durftest", "durfte", "durften", "durftet", "durften"], participle: "gedurft" },
  { infinitive: "müssen", translation: "tener que / deber", present: ["muss", "musst", "muss", "müssen", "müsst", "müssen"], preterite: ["musste", "musstest", "musste", "mussten", "musstet", "mussten"], participle: "gemusst" },
  { infinitive: "sollen", translation: "deber / se supone que", present: ["soll", "sollst", "soll", "sollen", "sollt", "sollen"], preterite: ["sollte", "solltest", "sollte", "sollten", "solltet", "sollten"], participle: "gesollt" },
  { infinitive: "mögen", translation: "gustar / querer", present: ["mag", "magst", "mag", "mögen", "mögt", "mögen"], preterite: ["mochte", "mochtest", "mochte", "mochten", "mochtet", "mochten"], participle: "gemocht" },
  { infinitive: "gefallen", translation: "gustar / agradar", present: ["gefalle", "gefällst", "gefällt", "gefallen", "gefallt", "gefallen"], preterite: ["gefiel", "gefielst", "gefiel", "gefielen", "gefielt", "gefielen"], participle: "gefallen" },
  { infinitive: "brauchen", translation: "necesitar" },
  { infinitive: "denken", translation: "pensar", preterite: ["dachte", "dachtest", "dachte", "dachten", "dachtet", "dachten"], participle: "gedacht" },
  { infinitive: "wissen", translation: "saber", present: ["weiß", "weißt", "weiß", "wissen", "wisst", "wissen"], preterite: ["wusste", "wusstest", "wusste", "wussten", "wusstet", "wussten"], participle: "gewusst" },
  { infinitive: "bezahlen", translation: "pagar", noGe: true },
  { infinitive: "machen", translation: "hacer" },
  { infinitive: "erzählen", translation: "contar / narrar", noGe: true },
  { infinitive: "singen", translation: "cantar", preterite: ["sang", "sangst", "sang", "sangen", "sangt", "sangen"], participle: "gesungen" },
  { infinitive: "fliegen", translation: "volar", preterite: ["flog", "flogst", "flog", "flogen", "flogt", "flogen"], perfectAux: "sein", participle: "geflogen" },
  { infinitive: "sich setzen", translation: "sentarse", reflexive: true, base: "setzen", participle: "gesetzt" },
  { infinitive: "sich treffen mit", translation: "encontrarse con", reflexive: true, base: "treffen", suffix: "mit", present: ["treffe mich mit", "triffst dich mit", "trifft sich mit", "treffen uns mit", "trefft euch mit", "treffen sich mit"], preterite: ["traf mich mit", "trafst dich mit", "traf sich mit", "trafen uns mit", "traft euch mit", "trafen sich mit"], participle: "getroffen" },
  { infinitive: "sich interessieren für", translation: "interesarse por", reflexive: true, base: "interessieren", suffix: "für", noGe: true },
  { infinitive: "haben", translation: "tener", present: haben, preterite: ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"], participle: "gehabt" },
  { infinitive: "ausleihen", translation: "prestar / tomar prestado", prefix: "aus", base: "leihen", preterite: ["lieh aus", "liehst aus", "lieh aus", "liehen aus", "lieht aus", "liehen aus"], participle: "ausgeliehen" },
  { infinitive: "rennen", translation: "correr", preterite: ["rannte", "ranntest", "rannte", "rannten", "ranntet", "rannten"], perfectAux: "sein", participle: "gerannt" },
  { infinitive: "schlafen", translation: "dormir", present: ["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"], preterite: ["schlief", "schliefst", "schlief", "schliefen", "schlieft", "schliefen"], participle: "geschlafen" },
  { infinitive: "tragen", translation: "llevar puesto / cargar", present: ["trage", "trägst", "trägt", "tragen", "tragt", "tragen"], preterite: ["trug", "trugst", "trug", "trugen", "trugt", "trugen"], participle: "getragen" },
  { infinitive: "bringen", translation: "traer / llevar", preterite: ["brachte", "brachtest", "brachte", "brachten", "brachtet", "brachten"], participle: "gebracht" },
  { infinitive: "kochen", translation: "cocinar" },
  { infinitive: "backen", translation: "hornear", present: ["backe", "bäckst", "bäckt", "backen", "backt", "backen"], preterite: ["backte", "backtest", "backte", "backten", "backtet", "backten"], participle: "gebacken" },
  { infinitive: "helfen", translation: "ayudar", present: ["helfe", "hilfst", "hilft", "helfen", "helft", "helfen"], preterite: ["half", "halfst", "half", "halfen", "halft", "halfen"], participle: "geholfen" },
  { infinitive: "schicken", translation: "mandar / enviar" },
];

const state = {
  fixedCells: new Set(),
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

const getStem = (verb) => {
  if (verb.stem) return verb.stem;
  const source = verb.base || verb.infinitive;
  return source.endsWith("en") ? source.slice(0, -2) : source.slice(0, -1);
};

const regularPresent = (verb) => {
  const stem = getStem(verb);
  const endings = verb.endings || ["e", "st", "t", "en", "t", "en"];
  return endings.map((ending) => `${stem}${ending}`);
};

const regularPreterite = (verb) => {
  const stem = getStem(verb);
  const endings = ["te", "test", "te", "ten", "tet", "ten"];
  return endings.map((ending) => `${stem}${ending}`);
};

const regularParticiple = (verb) => {
  if (verb.participle) return verb.participle;
  const source = verb.base || verb.infinitive;
  const stem = getStem(verb);
  if (verb.prefix) return `${verb.prefix}ge${stem}t`;
  if (verb.noGe || source.endsWith("ieren")) return `${stem}t`;
  return `ge${stem}t`;
};

const withReflexive = (verb, forms) => {
  if (!verb.reflexive || verb.present) return forms;
  return forms.map((form, index) => `${form} ${reflexiveAcc[index]}${verb.suffix ? ` ${verb.suffix}` : ""}`);
};

const withPrefix = (verb, forms) => {
  if (!verb.prefix || verb.present) return forms;
  return forms.map((form) => `${form} ${verb.prefix}`);
};

const presentForms = (verb) => verb.present || withPrefix(verb, withReflexive(verb, regularPresent(verb)));
const preteriteForms = (verb) => verb.preterite || withPrefix(verb, withReflexive(verb, regularPreterite(verb)));
const auxForms = (verb) => (verb.perfectAux === "sein" ? sein : haben);

const conjugate = (verb, tense, personIndex) => {
  if (tense === "Präsens") return presentForms(verb)[personIndex];
  if (tense === "Präteritum") return preteriteForms(verb)[personIndex];
  if (tense === "Perfekt") {
    const reflexive = verb.reflexive ? ` ${reflexiveAcc[personIndex]}` : "";
    return `${auxForms(verb)[personIndex]}${reflexive} ${regularParticiple(verb)}`;
  }
  if (verb.reflexive) {
    return `${werden[personIndex]} ${reflexiveAcc[personIndex]} ${verb.base}${verb.suffix ? ` ${verb.suffix}` : ""}`;
  }
  return `${werden[personIndex]} ${verb.infinitive}`;
};

const normalize = (value) => value.trim().replace(/\s+/g, " ").toLowerCase();

const updateScore = (correct, total) => {
  document.querySelector("#score").textContent = `${correct} / ${total}`;
};

const allInputs = () => [
  ...document.querySelectorAll(".answer-select"),
  ...document.querySelectorAll(".answer-input"),
];

const renderMatch = () => {
  const list = document.querySelector("#match-list");
  const selected = pick(verbs, 10);
  const translations = shuffle(selected.map((verb) => verb.translation));
  list.innerHTML = "";

  selected.forEach((verb) => {
    const row = document.createElement("div");
    row.className = "match-row";
    row.dataset.answer = verb.translation;
    row.innerHTML = `
      <strong class="verb-label">${verb.infinitive}</strong>
      <select class="answer-select" aria-label="Traducción de ${verb.infinitive}" data-answer="${verb.translation}">
        <option value="">Selecciona traducción</option>
        ${translations.map((translation) => `<option value="${translation}">${translation}</option>`).join("")}
      </select>
      <span class="cell-feedback" aria-live="polite"></span>
    `;
    list.append(row);
  });
};

const tableCellId = (tableId, personIndex) => `${tableId}-${personIndex}`;

const renderTables = () => {
  const grid = document.querySelector("#table-grid");
  grid.innerHTML = "";

  pick(verbs, 2).forEach((verb, tableIndex) => {
    const tense = tenses[randomInt(tenses.length)];
    const tableId = `table-${tableIndex}`;
    const fixedCount = Math.round(persons.length * 0.3);
    const fixed = new Set(shuffle(persons.map((_, index) => tableCellId(tableId, index))).slice(0, fixedCount));
    const card = document.createElement("article");
    card.className = "table-card";
    card.innerHTML = `
      <div class="table-card__header">
        <h3>${verb.infinitive}</h3>
        <span class="table-card__meta">${verb.translation} · ${tense}</span>
      </div>
      <div class="table-wrap">
        <table class="conjugation-table">
          <thead>
            <tr>
              <th scope="col">Persona</th>
              <th scope="col">Forma</th>
            </tr>
          </thead>
          <tbody>
            ${persons.map((person, personIndex) => {
              const answer = conjugate(verb, tense, personIndex);
              const isFixed = fixed.has(tableCellId(tableId, personIndex));
              return `
                <tr>
                  <th scope="row">${person.label}</th>
                  <td class="answer-cell">
                    ${isFixed
                      ? `<span class="fixed-answer">${answer}</span><span class="cell-feedback">Pista escrita</span>`
                      : `<input class="answer-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" data-answer="${answer}" aria-label="${verb.infinitive} ${tense} ${person.label}"><span class="cell-feedback" aria-live="polite"></span>`}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
    grid.append(card);
  });
};

const renderSentences = () => {
  const list = document.querySelector("#sentence-list");
  list.innerHTML = "";

  pick(verbs, 8).forEach((verb, index) => {
    const tense = tenses[randomInt(tenses.length)];
    const personIndex = randomInt(persons.length);
    const person = persons[personIndex];
    const answer = conjugate(verb, tense, personIndex);
    const card = document.createElement("article");
    card.className = "sentence-card";
    card.innerHTML = `
      <p class="sentence-line">
        <strong>${person.label}</strong>
        <input class="answer-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" data-answer="${answer}" aria-label="Forma de ${verb.infinitive}">
      </p>
      <span class="sentence-meta">(${verb.infinitive}, ${tense}) · ${verb.translation}</span>
      <span class="sentence-feedback" aria-live="polite"></span>
    `;
    list.append(card);
  });
};

const render = () => {
  renderMatch();
  renderTables();
  renderSentences();
  updateScore(0, allInputs().length);
};

const markField = (field, showAnswer = false) => {
  const holder = field.closest(".match-row, .answer-cell, .sentence-card");
  const feedback = holder.querySelector(".cell-feedback, .sentence-feedback");
  const isCorrect = normalize(field.value) === normalize(field.dataset.answer);

  holder.classList.toggle("is-correct", isCorrect);
  holder.classList.toggle("is-wrong", !isCorrect);
  feedback.textContent = isCorrect
    ? "Correcto"
    : showAnswer
      ? `Respuesta: ${field.dataset.answer}`
      : "Revisa esta forma";

  if (showAnswer) field.value = field.dataset.answer;
  return isCorrect;
};

const checkAll = () => {
  const inputs = allInputs();
  const correct = inputs.filter((input) => markField(input)).length;
  updateScore(correct, inputs.length);
};

const showAnswers = () => {
  const inputs = allInputs();
  const correct = inputs.filter((input) => markField(input, true)).length;
  updateScore(correct, inputs.length);
};

document.querySelector("#check-all").addEventListener("click", checkAll);
document.querySelector("#new-exercise").addEventListener("click", render);
document.querySelector("#show-answers").addEventListener("click", showAnswers);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches(".answer-input")) {
    checkAll();
  }
});

render();
