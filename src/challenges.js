// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayStrings = phrase.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(array) {
  const lastItem = array.length - 1;
  let str = array[lastItem];
  str = str.concat(', ', array[0]);
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }

  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }

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
