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
function concatName(nomesArrays) {
  const lastItem = nomesArrays.length - 1;
  let str = nomesArrays[lastItem];
  str = str.concat(', ', array[0]);
  
  return str;
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
function highestCount(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  function isHighest(value) {
    return value === numbers[numbers.length - 1];
  }
  return numbers.filter(isHighest).length;
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
  string = string.replace('a', 1);
  string = string.replace('e', 2);
  string = string.replace('i', 3);
  string = string.replace('o', 4);
  string = string.replace('u', 5);
  return string;
}
function decode() {
  string = string.replace(1, 'a');
  string = string.replace(2, 'e');
  string = string.replace(3, 'i');
  string = string.replace(4, 'o');
  string = string.replace(5, 'u');
  return string;
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
