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

// Desafio 6, outra possibilidade
// function highestCount(array) {
//   function isHighest(value) {
//     return value === Math.max.apply(null, array);
//   }
//   return array.filter(isHighest).length;
// }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 + cat2) / 2 === mouse) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse + cat1 < mouse + cat2) {
    return 'cat1';
  }
  if (mouse + cat1 > mouse + cat2) {
    return 'cat2';
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
