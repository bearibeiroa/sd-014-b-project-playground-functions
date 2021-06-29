// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase;
}

// Desafio 4
function concatName(array) {
  let firstName = array[array.length - 1];
  let secondName = array[0];
  let newArray = firstName + ', ' + secondName;
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highNumber = array[0];
  let counter = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highNumber) {
      highNumber = array[index];
    }
  }
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (highNumber === array[secondIndex]) {
      counter += 1;
    }
  }
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
