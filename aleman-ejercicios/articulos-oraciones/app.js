const articlePool = [
  {
    before: "",
    phrase: "alte Mann",
    after: "trinkt heute Kaffee.",
    article: "der",
    caseName: "Nominativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "El hombre viejo toma café hoy.",
  },
  {
    before: "",
    phrase: "junge Frau",
    after: "hat gestern einen Brief geschrieben.",
    article: "die",
    caseName: "Nominativ",
    gender: "feminin",
    tense: "Perfekt",
    translation: "La mujer joven escribió una carta ayer.",
  },
  {
    before: "",
    phrase: "kleine Kind",
    after: "wird morgen im Park spielen.",
    article: "das",
    caseName: "Nominativ",
    gender: "neutrum",
    tense: "Futur I",
    translation: "El niño pequeño jugará mañana en el parque.",
  },
  {
    before: "",
    phrase: "netten Nachbarn",
    after: "kamen am Abend nach Hause.",
    article: "die",
    caseName: "Nominativ",
    gender: "plural",
    tense: "Präteritum",
    translation: "Los vecinos amables llegaron a casa por la tarde.",
  },
  {
    before: "Ich sehe",
    phrase: "neuen Lehrer",
    after: "in der Schule.",
    article: "den",
    caseName: "Akkusativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "Veo al maestro nuevo en la escuela.",
  },
  {
    before: "Wir haben",
    phrase: "rote Tasche",
    after: "im Supermarkt gekauft.",
    article: "die",
    caseName: "Akkusativ",
    gender: "feminin",
    tense: "Perfekt",
    translation: "Compramos la bolsa roja en el supermercado.",
  },
  {
    before: "Paul las",
    phrase: "interessante Buch",
    after: "am Wochenende.",
    article: "das",
    caseName: "Akkusativ",
    gender: "neutrum",
    tense: "Präteritum",
    translation: "Paul leyó el libro interesante el fin de semana.",
  },
  {
    before: "Anna wird",
    phrase: "frischen Brötchen",
    after: "morgen kaufen.",
    article: "die",
    caseName: "Akkusativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Anna comprará los panecillos frescos mañana.",
  },
  {
    before: "Ich helfe",
    phrase: "alten Mann",
    after: "nach der Schule.",
    article: "dem",
    caseName: "Dativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "Ayudo al hombre viejo después de la escuela.",
  },
  {
    before: "Wir haben",
    phrase: "netten Lehrerin",
    after: "eine Frage gestellt.",
    article: "der",
    caseName: "Dativ",
    gender: "feminin",
    tense: "Perfekt",
    translation: "Le hicimos una pregunta a la maestra amable.",
  },
  {
    before: "Das Spielzeug lag auf",
    phrase: "kleinen Tisch",
    after: ".",
    article: "dem",
    caseName: "Dativ",
    gender: "maskulin",
    tense: "Präteritum",
    translation: "El juguete estaba sobre la mesa pequeña.",
  },
  {
    before: "Der Lehrer wird",
    phrase: "ruhigen Kindern",
    after: "eine Geschichte erzählen.",
    article: "den",
    caseName: "Dativ",
    gender: "plural",
    tense: "Futur I",
    translation: "El maestro les contará una historia a los niños tranquilos.",
  },
  {
    before: "",
    phrase: "gute Freund",
    after: "ruft mich später an.",
    article: "der",
    caseName: "Nominativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "El buen amigo me llama más tarde.",
  },
  {
    before: "",
    phrase: "kleine Küche",
    after: "war gestern sehr sauber.",
    article: "die",
    caseName: "Nominativ",
    gender: "feminin",
    tense: "Präteritum",
    translation: "La cocina pequeña estuvo muy limpia ayer.",
  },
  {
    before: "",
    phrase: "neue Auto",
    after: "ist schnell gefahren.",
    article: "das",
    caseName: "Nominativ",
    gender: "neutrum",
    tense: "Perfekt",
    translation: "El auto nuevo fue rápido.",
  },
  {
    before: "",
    phrase: "alten Bücher",
    after: "werden im Regal stehen.",
    article: "die",
    caseName: "Nominativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Los libros viejos estarán en el estante.",
  },
  {
    before: "Du nimmst",
    phrase: "schwarzen Stift",
    after: "aus der Tasche.",
    article: "den",
    caseName: "Akkusativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "Tomas el bolígrafo negro de la bolsa.",
  },
  {
    before: "Meine Mutter hat",
    phrase: "warme Suppe",
    after: "gekocht.",
    article: "die",
    caseName: "Akkusativ",
    gender: "feminin",
    tense: "Perfekt",
    translation: "Mi madre cocinó la sopa caliente.",
  },
  {
    before: "Tom öffnete",
    phrase: "große Fenster",
    after: "am Morgen.",
    article: "das",
    caseName: "Akkusativ",
    gender: "neutrum",
    tense: "Präteritum",
    translation: "Tom abrió la ventana grande por la mañana.",
  },
  {
    before: "Wir werden",
    phrase: "neuen Wörter",
    after: "heute lernen.",
    article: "die",
    caseName: "Akkusativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Aprenderemos las palabras nuevas hoy.",
  },
  {
    before: "Sie antwortet",
    phrase: "jungen Studentin",
    after: "sehr freundlich.",
    article: "der",
    caseName: "Dativ",
    gender: "feminin",
    tense: "Präsens",
    translation: "Ella le responde muy amablemente a la estudiante joven.",
  },
  {
    before: "Ich bin mit",
    phrase: "alten Fahrrad",
    after: "zur Schule gefahren.",
    article: "dem",
    caseName: "Dativ",
    gender: "neutrum",
    tense: "Perfekt",
    translation: "Fui a la escuela con la bicicleta vieja.",
  },
  {
    before: "Die Kinder spielten mit",
    phrase: "kleinen Hund",
    after: "im Garten.",
    article: "dem",
    caseName: "Dativ",
    gender: "maskulin",
    tense: "Präteritum",
    translation: "Los niños jugaron con el perro pequeño en el jardín.",
  },
  {
    before: "Anna wird mit",
    phrase: "neuen Kolleginnen",
    after: "sprechen.",
    article: "den",
    caseName: "Dativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Anna hablará con las colegas nuevas.",
  },
  {
    before: "",
    phrase: "schöne Park",
    after: "gefällt meiner Schwester.",
    article: "der",
    caseName: "Nominativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "El parque bonito le gusta a mi hermana.",
  },
  {
    before: "",
    phrase: "lange Straße",
    after: "war gestern gesperrt.",
    article: "die",
    caseName: "Nominativ",
    gender: "feminin",
    tense: "Präteritum",
    translation: "La calle larga estuvo cerrada ayer.",
  },
  {
    before: "",
    phrase: "helle Zimmer",
    after: "hat mir sehr gefallen.",
    article: "das",
    caseName: "Nominativ",
    gender: "neutrum",
    tense: "Perfekt",
    translation: "La habitación luminosa me gustó mucho.",
  },
  {
    before: "",
    phrase: "neuen Lampen",
    after: "werden morgen ankommen.",
    article: "die",
    caseName: "Nominativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Las lámparas nuevas llegarán mañana.",
  },
  {
    before: "Der Mechaniker repariert",
    phrase: "alten Wagen",
    after: "heute.",
    article: "den",
    caseName: "Akkusativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "El mecánico repara el coche viejo hoy.",
  },
  {
    before: "Ich habe",
    phrase: "blaue Jacke",
    after: "bezahlt.",
    article: "die",
    caseName: "Akkusativ",
    gender: "feminin",
    tense: "Perfekt",
    translation: "Pagué la chaqueta azul.",
  },
  {
    before: "Der Vater brachte",
    phrase: "kleine Paket",
    after: "zur Post.",
    article: "das",
    caseName: "Akkusativ",
    gender: "neutrum",
    tense: "Präteritum",
    translation: "El padre llevó el paquete pequeño al correo.",
  },
  {
    before: "Sie wird",
    phrase: "wichtigen E-Mails",
    after: "später schreiben.",
    article: "die",
    caseName: "Akkusativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Ella escribirá los correos importantes más tarde.",
  },
  {
    before: "Der Sohn dankt",
    phrase: "geduldigen Vater",
    after: ".",
    article: "dem",
    caseName: "Dativ",
    gender: "maskulin",
    tense: "Präsens",
    translation: "El hijo le agradece al padre paciente.",
  },
  {
    before: "Wir haben mit",
    phrase: "freundlichen Ärztin",
    after: "gesprochen.",
    article: "der",
    caseName: "Dativ",
    gender: "feminin",
    tense: "Perfekt",
    translation: "Hablamos con la doctora amable.",
  },
  {
    before: "Das Buch lag neben",
    phrase: "kleinen Bett",
    after: ".",
    article: "dem",
    caseName: "Dativ",
    gender: "neutrum",
    tense: "Präteritum",
    translation: "El libro estaba junto a la cama pequeña.",
  },
  {
    before: "Ich werde",
    phrase: "müden Gästen",
    after: "Wasser bringen.",
    article: "den",
    caseName: "Dativ",
    gender: "plural",
    tense: "Futur I",
    translation: "Les llevaré agua a los invitados cansados.",
  },
];

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

const balancedPick = (count) => {
  const grouped = articlePool.reduce((acc, item) => {
    acc[item.caseName] ||= [];
    acc[item.caseName].push(item);
    return acc;
  }, {});
  const cases = ["Nominativ", "Akkusativ", "Dativ"];
  const selected = [];

  while (selected.length < count) {
    cases.forEach((caseName) => {
      if (selected.length >= count) return;
      const options = shuffle(grouped[caseName]).filter((item) => !selected.includes(item));
      selected.push(options[0]);
    });
  }

  return shuffle(selected);
};

const escapeAttribute = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const normalize = (value) => value.trim().toLowerCase();

const updateScore = (correct, total) => {
  document.querySelector("#score").textContent = `${correct} / ${total}`;
};

const translationIcon = (translation) => `
  <button class="translation-tip" type="button" aria-label="Ver traducción" data-tooltip="${escapeAttribute(translation)}">
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.1 2.3 3.1 5.3 3.1 9s-1 6.7-3.1 9M12 3c-2.1 2.3-3.1 5.3-3.1 9s1 6.7 3.1 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  </button>
`;

const render = () => {
  const count = Number(document.querySelector("#question-count").value);
  const list = document.querySelector("#question-list");
  list.innerHTML = "";

  balancedPick(count).forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.dataset.answer = item.article;
    card.innerHTML = `
      <p class="sentence">
        ${item.before ? `<span>${item.before}</span>` : ""}
        <span class="blank-group">
          <input
            class="article-input"
            type="text"
            autocomplete="off"
            autocapitalize="none"
            spellcheck="false"
            maxlength="3"
            aria-label="Artículo de la oración ${index + 1}"
            data-answer="${item.article}"
          >
          <strong>${item.phrase}</strong>
        </span>
        <span>${item.after}</span>
        ${translationIcon(item.translation)}
      </p>
      <div class="meta-row">
        <span class="tag">${item.caseName}</span>
        <span class="tag">${item.gender}</span>
        <span class="tag">${item.tense}</span>
      </div>
      <p class="feedback" aria-live="polite"></p>
    `;
    list.append(card);
  });

  updateScore(0, document.querySelectorAll(".article-input").length);
};

const markInput = (input, showAnswer = false) => {
  const card = input.closest(".question-card");
  const feedback = card.querySelector(".feedback");
  const isCorrect = normalize(input.value) === input.dataset.answer;

  card.classList.toggle("is-correct", isCorrect);
  card.classList.toggle("is-wrong", !isCorrect);
  feedback.textContent = isCorrect
    ? "Correcto"
    : showAnswer
      ? `Respuesta: ${input.dataset.answer}`
      : "Revisa el caso y el género";

  if (showAnswer) input.value = input.dataset.answer;
  return isCorrect;
};

const checkAll = () => {
  const inputs = [...document.querySelectorAll(".article-input")];
  const correct = inputs.filter((input) => markInput(input)).length;
  updateScore(correct, inputs.length);
};

const showAnswers = () => {
  const inputs = [...document.querySelectorAll(".article-input")];
  const correct = inputs.filter((input) => markInput(input, true)).length;
  updateScore(correct, inputs.length);
};

document.querySelector("#check-all").addEventListener("click", checkAll);
document.querySelector("#new-exercise").addEventListener("click", render);
document.querySelector("#show-answers").addEventListener("click", showAnswers);
document.querySelector("#question-count").addEventListener("change", render);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("article-input")) {
    checkAll();
  }
});

render();
