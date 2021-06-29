/* eslint-disable complexity */
// Desafio 1
function compareTrue(first, second) {
  if (first === true && second === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(go) {
  return go.split(' ');
}

// Desafio 4
function concatName(array, concat, space) {
  space = ', ';
  concat = array[array.length - 1] + space + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties, total) {
  wins *= 3;
  ties *= 1;
  total = wins + ties;
  return total;
}

// Desafio 6
function highestCount(list, biggerNumber, numberOfHits) {
  for (let index = 0; index < list.length; index += 1) {
    if (biggerNumber === undefined) {
      biggerNumber = list[index];
    } else if (biggerNumber <= list[index]) {
      biggerNumber = list[index];
    }
  }
  for (let index = 0; index < list.length; index += +1) {
    if (numberOfHits === undefined) {
      numberOfHits = 0;
    }
    if (biggerNumber === list[index]) {
      numberOfHits += 1;
    }
  }
  return numberOfHits;
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
