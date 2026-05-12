const temporals = [
  "heute", "morgen", "gestern", "am Montag", "am Wochenende",
  "jeden Morgen", "um acht Uhr", "nach der Schule", "im Sommer", "später",
];

const causals = [
  "wegen der Arbeit", "wegen des Regens", "wegen der Prüfung", "aus Interesse", "aus Liebe",
  "wegen des Kurses", "wegen der Familie", "aus Zeitmangel", "wegen des Wetters", "wegen des Termins",
];

const modals = [
  "mit dem Bus", "mit dem Zug", "gern", "schnell", "langsam",
  "mit meiner Freundin", "allein", "mit dem Fahrrad", "leise", "gut",
];

const locals = [
  "in der Schule", "im Park", "zu Hause", "in Berlin", "im Büro",
  "in der Küche", "am Bahnhof", "in der Bibliothek", "im Supermarkt", "im Restaurant",
];

const orderPool = [
  ["Anna", "lernt", "heute", "Deutsch."],
  ["Wir", "fahren", "morgen", "mit dem Zug", "nach Berlin."],
  ["Paul", "hat", "gestern", "im Park", "Fußball", "gespielt."],
  ["Ich", "werde", "am Montag", "im Büro", "arbeiten."],
  ["Die Kinder", "aßen", "am Abend", "eine Suppe."],
  ["Meine Schwester", "hat", "am Wochenende", "ein Buch", "gelesen."],
  ["Der Lehrer", "erklärt", "heute", "in der Schule", "die Aufgabe."],
  ["Tom", "wird", "später", "zu Hause", "kochen."],
];

const verbPool = [
  { text: "Ich ___ morgen Deutsch ___.", blanks: ["werde", "lernen"], hint: "(lernen, Futur I)" },
  { text: "Wir ___ gestern nach Hause ___.", blanks: ["sind", "gegangen"], hint: "(gehen, Perfekt)" },
  { text: "Anna ___ jeden Morgen Kaffee.", blanks: ["trinkt"], hint: "(trinken, Präsens)" },
  { text: "Paul ___ am Samstag ein Buch.", blanks: ["las"], hint: "(lesen, Präteritum)" },
  { text: "Die Kinder ___ im Park ___.", blanks: ["haben", "gespielt"], hint: "(spielen, Perfekt)" },
  { text: "Du ___ morgen den Lehrer ___.", blanks: ["wirst", "fragen"], hint: "(fragen, Futur I)" },
  { text: "Meine Mutter ___ eine Suppe.", blanks: ["kocht"], hint: "(kochen, Präsens)" },
  { text: "Der Student ___ in Berlin.", blanks: ["studierte"], hint: "(studieren, Präteritum)" },
];

const classifyPool = [
  { sentence: "Ich lerne heute Deutsch.", translation: "Yo aprendo alemán hoy.", answer: "Präsens" },
  { sentence: "Wir haben gestern Pizza gegessen.", translation: "Nosotros comimos pizza ayer.", answer: "Perfekt" },
  { sentence: "Sie ging am Montag in die Schule.", translation: "Ella fue a la escuela el lunes.", answer: "Präteritum" },
  { sentence: "Er wird morgen im Büro arbeiten.", translation: "Él trabajará mañana en la oficina.", answer: "Futur I" },
  { sentence: "Anna fährt heute wegen der Arbeit mit dem Zug nach Berlin.", translation: "Anna va hoy a Berlín en tren por trabajo.", answer: "TEKAMOLO" },
  { sentence: "Paul hat am Wochenende im Park Fußball gespielt.", translation: "Paul jugó fútbol el fin de semana en el parque.", answer: "Perfekt" },
  { sentence: "Die Lehrerin erklärte die Aufgabe.", translation: "La maestra explicó la tarea.", answer: "Präteritum" },
  { sentence: "Wir werden später zu Hause kochen.", translation: "Nosotros cocinaremos más tarde en casa.", answer: "Futur I" },
];

const tekamoloBase = [
  { subject: "Ich", verb: "lerne", object: "Deutsch." },
  { subject: "Anna", verb: "fährt", object: "zur Schule." },
  { subject: "Wir", verb: "essen", object: "eine Suppe." },
  { subject: "Paul", verb: "arbeitet", object: "an der Aufgabe." },
  { subject: "Die Kinder", verb: "spielen", object: "Fußball." },
];

const state = {
  questions: [],
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

const normalize = (value) => value
  .trim()
  .replace(/\s+/g, " ")
  .replace(/\s+\./g, ".")
  .toLowerCase();

const escapeAttribute = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const updateScore = (correct, total) => {
  document.querySelector("#score").textContent = `${correct} / ${total}`;
};

const makeCard = (id, type, answer, content, feedback) => {
  const card = document.createElement("article");
  card.className = "question-card";
  card.dataset.id = id;
  card.dataset.type = type;
  card.dataset.answer = answer;
  card.innerHTML = `${content}<p class="feedback">${feedback}</p>`;
  return card;
};

const makeChipHtml = (word, tokenId, extraClass = "") => `
  <button class="chip ${extraClass}" type="button" draggable="true" data-token-id="${tokenId}">${word}</button>
`;

const translationIcon = (translation) => `
  <button class="translation-tip" type="button" aria-label="Ver traducción" data-tooltip="${escapeAttribute(translation)}">
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.1 2.3 3.1 5.3 3.1 9s-1 6.7-3.1 9M12 3c-2.1 2.3-3.1 5.3-3.1 9s1 6.7 3.1 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  </button>
`;

const makeOrderCard = (id, words, prompt) => {
  const answer = words.join(" ");
  const tokens = words.map((word, index) => ({ word, id: `${id}-${index}` }));
  const shuffledTokens = shuffle(tokens);
  const content = `
    <p class="sentence">${prompt}</p>
    <div class="answer-zone" data-answer-zone aria-label="Respuesta ordenada"></div>
    <div class="chip-zone" aria-label="Elementos disponibles">
      ${shuffledTokens.map((token) => makeChipHtml(token.word, token.id)).join("")}
    </div>
  `;
  const card = makeCard(id, "order", answer, content, `Respuesta: ${answer}`);
  card.dataset.tokens = JSON.stringify(tokens);
  return card;
};

const renderOrder = () => {
  const list = document.querySelector("#order-list");
  list.innerHTML = "";
  pick(orderPool, 3).forEach((words, index) => {
    list.append(makeOrderCard(`order-${index}`, words, "Orden correcto:"));
  });
};

const renderVerbs = () => {
  const list = document.querySelector("#verb-list");
  list.innerHTML = "";
  pick(verbPool, 3).forEach((item, index) => {
    let blankIndex = 0;
    const html = item.text.replaceAll("___", () => `
      <input class="blank-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" data-answer="${item.blanks[blankIndex++]}">
    `);
    const answer = item.blanks.join("|");
    const content = `<p class="sentence">${html} <span class="hint">${item.hint}</span></p>`;
    list.append(makeCard(`verb-${index}`, "verb", answer, content, `Respuesta: ${item.blanks.join(" / ")}`));
  });
};

const renderClassify = () => {
  const list = document.querySelector("#classify-list");
  list.innerHTML = "";
  const options = ["Präsens", "Perfekt", "Präteritum", "Futur I", "TEKAMOLO"];
  pick(classifyPool, 3).forEach((item, index) => {
    const name = `classify-${index}`;
    const content = `
      <p class="sentence"><span class="sentence__text">${item.sentence}</span>${translationIcon(item.translation)}</p>
      <div class="choice-row">
        ${shuffle(options).map((option) => `
          <label class="choice">
            <input type="radio" name="${name}" value="${option}">
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    `;
    list.append(makeCard(name, "classify", item.answer, content, `Respuesta: ${item.answer}`));
  });
};

const makeTekamoloQuestion = (index) => {
  const base = tekamoloBase[index % tekamoloBase.length];
  const temporal = temporals[randomInt(temporals.length)];
  const causal = causals[randomInt(causals.length)];
  const modal = modals[randomInt(modals.length)];
  const local = locals[randomInt(locals.length)];
  return [
    base.subject,
    base.verb,
    temporal,
    causal,
    modal,
    local,
    base.object,
  ];
};

const renderTekamolo = () => {
  const list = document.querySelector("#tekamolo-list");
  list.innerHTML = "";
  [0, 1, 2].forEach((slot) => {
    const words = makeTekamoloQuestion(slot);
    list.append(makeOrderCard(`tekamolo-${slot}`, words, "Orden TEKAMOLO: temporal → causal → modal → local"));
  });
};

const render = () => {
  renderOrder();
  renderVerbs();
  renderClassify();
  renderTekamolo();
  updateScore(0, document.querySelectorAll(".question-card").length);
};

const selectedOrderText = (card) => [...card.querySelectorAll("[data-answer-zone] .chip")]
  .map((chip) => chip.textContent)
  .join(" ");

const checkCard = (card) => {
  const type = card.dataset.type;
  let isCorrect = false;

  if (type === "order") {
    isCorrect = normalize(selectedOrderText(card)) === normalize(card.dataset.answer);
  }

  if (type === "verb") {
    const inputs = [...card.querySelectorAll(".blank-input")];
    isCorrect = inputs.every((input) => normalize(input.value) === normalize(input.dataset.answer));
  }

  if (type === "classify") {
    const selected = card.querySelector("input:checked");
    isCorrect = selected?.value === card.dataset.answer;
  }

  card.classList.add("has-feedback");
  card.classList.toggle("is-correct", isCorrect);
  card.classList.toggle("is-wrong", !isCorrect);
  return isCorrect;
};

const checkAll = () => {
  const cards = [...document.querySelectorAll(".question-card")];
  const correct = cards.filter(checkCard).length;
  updateScore(correct, cards.length);
};

const showAnswers = () => {
  document.querySelectorAll(".question-card").forEach((card) => {
    if (card.dataset.type === "verb") {
      card.querySelectorAll(".blank-input").forEach((input) => {
        input.value = input.dataset.answer;
      });
    }
    if (card.dataset.type === "classify") {
      const input = card.querySelector(`input[value="${card.dataset.answer}"]`);
      if (input) input.checked = true;
    }
    if (card.dataset.type === "order") {
      const zone = card.querySelector("[data-answer-zone]");
      const tokens = JSON.parse(card.dataset.tokens);
      zone.innerHTML = tokens.map((token) => makeChipHtml(token.word, token.id, "chip--answer")).join("");
      card.querySelectorAll(".chip-zone .chip").forEach((chip) => {
        chip.disabled = true;
      });
    }
  });
  checkAll();
};

const addChipToAnswer = (chip, beforeElement = null) => {
  const card = chip.closest(".question-card");
  const zone = card?.querySelector("[data-answer-zone]");
  if (!zone || chip.closest("[data-answer-zone]")) return;
  const clone = chip.cloneNode(true);
  clone.classList.add("chip--answer");
  clone.disabled = false;
  zone.insertBefore(clone, beforeElement);
  chip.disabled = true;
};

const removeChipFromAnswer = (chip) => {
  const card = chip.closest(".question-card");
  const source = card?.querySelector(`.chip-zone .chip[data-token-id="${chip.dataset.tokenId}"]`);
  if (source) source.disabled = false;
  chip.remove();
};

const getDragAfterElement = (zone, x, y) => {
  const chips = [...zone.querySelectorAll(".chip:not(.is-dragging)")];
  return chips.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offsetY = y - box.top - box.height / 2;
    const offsetX = x - box.left - box.width / 2;
    const offset = Math.abs(offsetY) > box.height ? offsetY : offsetX;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
};

document.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  if (chip.classList.contains("chip--answer")) {
    removeChipFromAnswer(chip);
    return;
  }
  if (!chip.disabled) addChipToAnswer(chip);
});

document.addEventListener("dragstart", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip || chip.disabled) return;
  chip.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", chip.dataset.tokenId);
});

document.addEventListener("dragend", (event) => {
  event.target.closest(".chip")?.classList.remove("is-dragging");
  document.querySelectorAll(".answer-zone.is-drag-over").forEach((zone) => zone.classList.remove("is-drag-over"));
});

document.addEventListener("dragover", (event) => {
  const zone = event.target.closest("[data-answer-zone]");
  if (!zone) return;
  const dragging = document.querySelector(".chip.is-dragging");
  if (!dragging || zone.closest(".question-card") !== dragging.closest(".question-card")) return;
  event.preventDefault();
  zone.classList.add("is-drag-over");
  if (!dragging || !dragging.classList.contains("chip--answer")) return;
  zone.insertBefore(dragging, getDragAfterElement(zone, event.clientX, event.clientY));
});

document.addEventListener("dragleave", (event) => {
  const zone = event.target.closest("[data-answer-zone]");
  if (zone && !zone.contains(event.relatedTarget)) zone.classList.remove("is-drag-over");
});

document.addEventListener("drop", (event) => {
  const zone = event.target.closest("[data-answer-zone]");
  const dragging = document.querySelector(".chip.is-dragging");
  if (!zone || !dragging || zone.closest(".question-card") !== dragging.closest(".question-card")) return;
  event.preventDefault();
  zone.classList.remove("is-drag-over");
  if (dragging.classList.contains("chip--answer")) {
    zone.insertBefore(dragging, getDragAfterElement(zone, event.clientX, event.clientY));
    return;
  }
  addChipToAnswer(dragging, getDragAfterElement(zone, event.clientX, event.clientY));
});

document.querySelector("#check-all").addEventListener("click", checkAll);
document.querySelector("#new-exercise").addEventListener("click", render);
document.querySelector("#show-answers").addEventListener("click", showAnswers);

render();
