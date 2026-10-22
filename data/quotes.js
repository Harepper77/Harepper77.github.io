// Citas del hero — rotan solas cada semestre (ene–jun / jul–dic).
// Textos en inglés verificados palabra por palabra en ediciones de dominio público.
// "big"/"bigEs": fragmento grande del hero; "lines"/"linesEs": cita completa debajo.
const heroQuotes = [
  {
    big: 'Half reveal<br/><em>and</em><br/>half conceal',
    bigEs: 'A medias revelan<br/><em>y</em><br/>a medias ocultan',
    lines: ['For words, like Nature, half reveal', 'And half conceal the Soul within.'],
    linesEs: ['Pues las palabras, como la Naturaleza, a medias revelan', 'y a medias ocultan el alma que llevan dentro.'],
    source: 'Alfred, Lord Tennyson · In Memoriam A.H.H., V (1850)'
  },
  {
    big: 'Who simply tell<br/>the most <em>heart-easing</em><br/>things.',
    bigEs: 'Quienes con sencillez<br/>cuentan lo que <em>alivia</em><br/>el corazón.',
    lines: ['And they shall be accounted poet kings', 'Who simply tell the most heart-easing things.'],
    linesEs: ['Y serán contados como reyes poetas', 'quienes con sencillez cuentan lo que más alivia el corazón.'],
    source: 'John Keats · Sleep and Poetry (1817)'
  },
  {
    big: 'If I could<br/><em>understand</em><br/>what you are',
    bigEs: 'Si pudiera<br/><em>entender</em><br/>lo que eres',
    lines: ['Little flower—but if I could understand', 'What you are, root and all, and all in all,', 'I should know what God and man is.'],
    linesEs: ['Florecita, si pudiera entender', 'lo que eres, con todo y raíz, por completo,', 'sabría qué es Dios y qué es el hombre.'],
    source: 'Alfred, Lord Tennyson · Flower in the Crannied Wall (1869)'
  },
  {
    big: 'A new planet<br/><em>swims into</em><br/>his ken',
    bigEs: 'Un planeta nuevo<br/><em>entra en</em><br/>su mirada',
    lines: ['Then felt I like some watcher of the skies', 'When a new planet swims into his ken;'],
    linesEs: ['Entonces me sentí como un vigía de los cielos', 'cuando un planeta nuevo entra en su mirada.'],
    source: 'John Keats · On First Looking into Chapman\'s Homer (1816)'
  },
  {
    big: 'I am a part<br/><em>of all that</em><br/>I have met.',
    bigEs: 'Soy parte<br/><em>de todo lo que</em><br/>he encontrado.',
    lines: ['I am a part of all that I have met;'],
    linesEs: ['Soy parte de todo lo que he encontrado.'],
    source: 'Alfred, Lord Tennyson · Ulysses (1842)'
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

// En español: fragmento y cita traducidos, con el original en inglés en pequeño.
function renderHeroQuote(lang) {
  const q = getHeroQuote();
  const h1 = document.getElementById('hero-quote');
  const full = document.getElementById('hero-quote-full');
  const orig = document.getElementById('hero-quote-es');
  if (!h1) return;
  const es = lang === 'es';
  h1.innerHTML = es ? q.bigEs : q.big;
  full.innerHTML = (es ? q.linesEs : q.lines).join('<br/>') + '<cite>' + q.source + '</cite>';
  orig.innerHTML = es ? q.lines.join('<br/>') : '';
  orig.hidden = !es;
}
