/* eslint-disable no-undef */
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
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  // eslint-disable-next-line prefer-template
  return string[string.length - 1] + ', ' + string[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = Math.max.apply(null, array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (higherNumber === array[index])
      count += 1;
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner1 = Math.abs(cat1 - mouse);
  let winner2 = Math.abs(cat2 - mouse);
  if (winner1 > winner2) {
    return 'cat2';
  } else if (winner2 > winner1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
