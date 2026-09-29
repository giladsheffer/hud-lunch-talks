export function textDirection(text) {
  let hebrew = 0;
  let latin = 0;
  for (const char of text) {
    if (/[\u0590-\u05FF]/.test(char)) hebrew += 1;
    else if (/[A-Za-z]/.test(char)) latin += 1;
  }
  return hebrew > latin ? "rtl" : "ltr";
}

export function parseTalks(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== "" && !line.startsWith("#"));
}

export function shuffleDeck(length, last, random) {
  const deck = [];
  for (let i = 0; i < length; i++) deck.push(i);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const swap = deck[i];
    deck[i] = deck[j];
    deck[j] = swap;
  }
  if (deck.length > 1 && deck[0] === last) {
    const j = 1 + Math.floor(random() * (deck.length - 1));
    const swap = deck[0];
    deck[0] = deck[j];
    deck[j] = swap;
  }
  return deck;
}
