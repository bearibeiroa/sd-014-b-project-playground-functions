// Desafio 1
function compareTrue(firstNumber, secondNumber) {
  if (firstNumber === true && secondNumber === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(str) {
  let result = str.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  let result = lastElement + ', ' + firstElement;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  let maxNumber = Math.max(array);
  let repetitions = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maxNumber) {
      repetitions += 1
    }
  }
  return repetitions;
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
