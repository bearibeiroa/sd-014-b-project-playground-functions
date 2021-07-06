// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 && v2) { return true; }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let sentenceS = string.split(' ');
  return sentenceS;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array[array.length - 1];
  let first = array[0];
  let result = `ÚLTIMO ITEM${last}PRIMEIRO ITEM${first}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
