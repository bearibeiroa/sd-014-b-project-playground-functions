// Desafio 1
function compareTrue(n1, n2) {

  if (n1 === true && n2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(array) {
  let lastItem = array[array.length -1];
  let firstItem = array[0];
  return lastItem + ', ' + firstItem
}
// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let totalPoints = winPoints + ties
  return totalPoints
}
// Desafio 6
function highestCount(array) {
  //funções max e apply informadas pela fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
  let higherNumber = Math.max.apply(null, array)
  let count = 0;
  for (let index in array) {
    if (higherNumber === array[index]) {
      count += 1
    }
  }
  return count
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
