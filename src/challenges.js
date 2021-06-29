// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringValue) {
  return stringValue.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${names.pop()}, ${names.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  return wins * winPoints + ties * tiePoints;
}

// Desafio 6
// Consultei o MDN Web Docs para implementar a 'arrow function expressions' do ES2015 e poder usar a função sort para números inteiros.
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function highestCount(array) {
  array = array.sort((a, b) => a - b);
  function isHighest(value) {
    return value === array[array.length - 1];
  }
  return array.filter(isHighest).length;
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
