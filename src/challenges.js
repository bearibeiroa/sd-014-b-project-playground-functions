// Desafio 1
function compareTrue (value1, value2) {
    if (value1 === true && value2 === true) {
      return true;
    } else {
      return false;
    } console.log(compareTrue);
}

// Desafio 2
function calcArea(base, height) {
  result = ((base * height)/2);
  return result;
}

// Desafio 3
function splitSentence(frase) {
  let divFrase = frase.split(' ');
  return divFrase;
}

// Desafio 4
function concatName(names = []) {
  let firstOne = names[0];
  let lastOne = names[names.length - 1];
  return lastOne + ', ' + firstOne
}

// Desafio 5
function footballPoints(wins, ties) {
  allPoints = ((wins * 3) + (ties * 1));
  return allPoints
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
