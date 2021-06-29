// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array = ['']) {
  let first = array[0] || '';
  let last = array[array.length - 1] || '';
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let maxNumber = Math.max(...array);
  array.forEach((n) => {
    if (maxNumber === n) {
      counter += 1;
    }
  });
  return counter;
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
