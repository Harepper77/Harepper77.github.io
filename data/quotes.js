// Citas del hero — rotan solas cada semestre (ene–jun / jul–dic).
// Textos verificados palabra por palabra en ediciones de dominio público.
// "big" es el fragmento grande del hero; "lines" es la cita completa que se muestra debajo.
const heroQuotes = [
  {
    big: 'Half reveal<br/><em>and</em><br/>half conceal',
    lines: ['For words, like Nature, half reveal', 'And half conceal the Soul within.'],
    source: 'Alfred, Lord Tennyson · In Memoriam A.H.H., V (1850)',
    es: 'Pues las palabras, como la Naturaleza, a medias revelan / y a medias ocultan el alma que llevan dentro.'
  },
  {
    big: 'Who simply tell<br/>the most <em>heart-easing</em><br/>things.',
    lines: ['And they shall be accounted poet kings', 'Who simply tell the most heart-easing things.'],
    source: 'John Keats · Sleep and Poetry (1817)',
    es: 'Y serán contados como reyes poetas / quienes con sencillez cuentan las cosas que más alivian el corazón.'
  },
  {
    big: 'If I could<br/><em>understand</em><br/>what you are',
    lines: ['Little flower—but if I could understand', 'What you are, root and all, and all in all,', 'I should know what God and man is.'],
    source: 'Alfred, Lord Tennyson · Flower in the Crannied Wall (1869)',
    es: 'Florecita, si pudiera entender / lo que eres, con todo y raíz, por completo, / sabría qué es Dios y qué es el hombre.'
  },
  {
    big: 'A new planet<br/><em>swims into</em><br/>his ken',
    lines: ['Then felt I like some watcher of the skies', 'When a new planet swims into his ken;'],
    source: 'John Keats · On First Looking into Chapman\'s Homer (1816)',
    es: 'Entonces me sentí como un vigía de los cielos / cuando un planeta nuevo entra en su mirada.'
  },
  {
    big: 'I am a part<br/><em>of all that</em><br/>I have met.',
    lines: ['I am a part of all that I have met;'],
    source: 'Alfred, Lord Tennyson · Ulysses (1842)',
    es: 'Soy parte de todo lo que he encontrado.'
  }
];

// La primera cita corresponde al semestre jul–dic 2026; cada semestre avanza una.
function getHeroQuote(date) {
  const d = date || new Date();
  const semester = d.getFullYear() * 2 + (d.getMonth() >= 6 ? 1 : 0);
  const start = 2026 * 2 + 1;
  const n = heroQuotes.length;
  return heroQuotes[(((semester - start) % n) + n) % n];
}

function renderHeroQuote(lang) {
  const q = getHeroQuote();
  const h1 = document.getElementById('hero-quote');
  const full = document.getElementById('hero-quote-full');
  const tr = document.getElementById('hero-quote-es');
  if (!h1) return;
  h1.innerHTML = q.big;
  full.innerHTML = q.lines.join('<br/>') + '<cite>' + q.source + '</cite>';
  tr.textContent = lang === 'es' ? q.es : '';
  tr.hidden = lang !== 'es';
}
