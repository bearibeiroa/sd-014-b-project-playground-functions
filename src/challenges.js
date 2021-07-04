// Desafio 1
function compareTrue(name1, name2) {
  if (name1 === true && name2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(str) {
  let strSeparate = str.split(' ');
  return strSeparate;
}

// Desafio 4
function concatName(array) {
  let namesArray = array[array.length - 1] + ', ' + array[0];
  return namesArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumber) {
  let result = 0;
  let maxNumber = Math.max(...arrayNumber);

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === maxNumber) {
      result += 1;
    }
  }
  return result;
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
