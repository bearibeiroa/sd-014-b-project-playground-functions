// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
  return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2
}

// Desafio 3
function splitSentence(nomesArrays) {
  let valueStrings = nomesArrays.split(' ');
  return valueStrings;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let index = 0; index < wins; index ++) {
    points += 3;
  }

  for (let index = 0; index < ties; index ++) {
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
