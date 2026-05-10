# Firestore schema

Collection: `sentences`

Required fields:

```json
{
  "active": true,
  "type": "ask-case",
  "sentence": "Der Hund trägt <u>einen roten Ball</u>.",
  "target": "",
  "answer": "acusativo",
  "explanation": "tragen pide objeto directo: Wen oder was trägt der Hund?",
  "translation": "El perro lleva una pelota roja.",
  "verb": "tragen",
  "tense": "präsens",
  "level": "A1",
  "tags": ["acusativo", "objeto-directo"]
}
```

Valid `type` values:

- `ask-case`
- `identify-case`
- `acc-dat`

Valid `tense` values:

- `präsens`
- `präteritum`
- `perfekt`
- `futur`

Valid `answer` values:

- `nominativo`
- `acusativo`
- `dativo`
- `genitivo`

For `identify-case`, use `target` for the component that should be classified:

```json
{
  "active": true,
  "type": "identify-case",
  "sentence": "<strong>Die Kinder</strong> geben <strong>dem Mann</strong> <strong>den Schlüssel</strong>.",
  "target": "dem Mann",
  "answer": "dativo",
  "explanation": "Es la persona que recibe algo.",
  "translation": "Los niños le dan la llave al hombre.",
  "verb": "geben",
  "tense": "präsens",
  "level": "A1",
  "tags": ["dativo", "receptor"]
}
```

Generated seed:

- `data/firestore-seed-sentences.json` contains ready-to-import documents.
- `tools/generate-firestore-seed.mjs` regenerates the seed from the curated verb list.
