const columns = [
  { key: "maskulin", label: "Maskulin", noun: "Mann" },
  { key: "feminin", label: "Feminin", noun: "Frau" },
  { key: "neutrum", label: "Neutrum", noun: "Kind" },
  { key: "plural", label: "Plural", noun: "Kinder" },
];

const rows = [
  {
    key: "nominativ",
    label: "Nominativ",
    question: "Wer / was?",
    answers: { maskulin: "der", feminin: "die", neutrum: "das", plural: "die" },
  },
  {
    key: "akkusativ",
    label: "Akkusativ",
    question: "Wen / was?",
    answers: { maskulin: "den", feminin: "die", neutrum: "das", plural: "die" },
  },
  {
    key: "dativ",
    label: "Dativ",
    question: "Wem / mit wem?",
    answers: { maskulin: "dem", feminin: "der", neutrum: "dem", plural: "den" },
  },
  {
    key: "genitiv",
    label: "Genitiv",
    question: "Wessen?",
    answers: { maskulin: "des", feminin: "der", neutrum: "des", plural: "der" },
  },
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

const cellId = (row, column) => `${row.key}-${column.key}`;

const allCells = () => rows.flatMap((row) => columns.map((column) => ({
  id: cellId(row, column),
  row,
  column,
  answer: row.answers[column.key],
})));

const chooseFixedCells = () => {
  const cells = allCells();
  const fixedCount = Math.round(cells.length * 0.3);
  state.fixedCells = new Set(shuffle(cells).slice(0, fixedCount).map((cell) => cell.id));
};

const updateScore = (correct, total) => {
  document.querySelector("#score").textContent = `${correct} / ${total}`;
};

const makeEditableCell = (cell) => `
  <div class="answer-row">
    <input
      class="answer-input"
      type="text"
      autocomplete="off"
      autocapitalize="none"
      spellcheck="false"
      maxlength="3"
      aria-label="${cell.row.label} ${cell.column.label}"
      data-answer="${cell.answer}"
    >
    <strong>${cell.column.noun}</strong>
  </div>
  <span class="cell-feedback" aria-live="polite"></span>
`;

const makeFixedCell = (cell) => `
  <div class="answer-row">
    <span class="fixed-answer">${cell.answer}</span>
    <strong>${cell.column.noun}</strong>
  </div>
  <span class="noun-hint">Pista escrita</span>
`;

const render = () => {
  chooseFixedCells();
  const tbody = document.querySelector("#article-body");
  tbody.innerHTML = "";

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row" class="case-label">
        <strong>${row.label}</strong>
        <span>${row.question}</span>
      </th>
    `;

    columns.forEach((column) => {
      const cell = {
        id: cellId(row, column),
        row,
        column,
        answer: row.answers[column.key],
      };
      const td = document.createElement("td");
      td.className = "article-cell";
      td.dataset.answer = cell.answer;
      td.innerHTML = state.fixedCells.has(cell.id)
        ? makeFixedCell(cell)
        : makeEditableCell(cell);
      tr.append(td);
    });

    tbody.append(tr);
  });

  updateScore(0, document.querySelectorAll(".answer-input").length);
};

const normalize = (value) => value.trim().toLowerCase();

const checkAll = () => {
  const inputs = [...document.querySelectorAll(".answer-input")];
  let correct = 0;

  inputs.forEach((input) => {
    const cell = input.closest(".article-cell");
    const feedback = cell.querySelector(".cell-feedback");
    const isCorrect = normalize(input.value) === input.dataset.answer;

    cell.classList.toggle("is-correct", isCorrect);
    cell.classList.toggle("is-wrong", !isCorrect);
    feedback.textContent = isCorrect
      ? "Correcto"
      : "Revisa este artículo";

    if (isCorrect) correct += 1;
  });

  updateScore(correct, inputs.length);
};

const showAnswers = () => {
  document.querySelectorAll(".answer-input").forEach((input) => {
    input.value = input.dataset.answer;
    const cell = input.closest(".article-cell");
    const feedback = cell.querySelector(".cell-feedback");
    cell.classList.add("is-correct");
    cell.classList.remove("is-wrong");
    feedback.textContent = `Respuesta: ${input.dataset.answer}`;
  });
  const inputs = document.querySelectorAll(".answer-input");
  updateScore(inputs.length, inputs.length);
};

document.querySelector("#check-all").addEventListener("click", checkAll);
document.querySelector("#new-table").addEventListener("click", render);
document.querySelector("#show-answers").addEventListener("click", showAnswers);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("answer-input")) {
    checkAll();
  }
});

render();
