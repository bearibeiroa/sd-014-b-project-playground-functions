// Desafio 1
function compareTrue(param1, param2) {
  let result = false;
  if (param1 === true && param2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1].concat(', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (3 * wins) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumber = arrayOfNumbers[0];
  for (let number = 0; number < arrayOfNumbers.length; number += 1) {
    if (arrayOfNumbers[number] > highestNumber) {
      highestNumber = arrayOfNumbers[number];
    }
  }
  let countHighest = 0;
  for (let number = 0; number < arrayOfNumbers.length; number += 1) {
    if (arrayOfNumbers[number] === highestNumber) {
      countHighest += 1;
    }
  }
  return countHighest;
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
