// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = base*height/2;
  return result;
}

// Desafio 3
function splitSentence(param) {
  let arrSplit = param.split(' ');
  return arrSplit
}
/* Nota do aluno: Para fazer o desafio 3 pesquisei e achei um vídeo no youtube do canal @CodeVault que 
me ajudou a achar a função 'split'
source: 'https://www.youtube.com/watch?v=hTZmGihfU_w'
*/

// Desafio 4
function concatName(param1) {
  let lastName = param1[param1.length - 1];
  let firstName = param1[0];
  return lastName + ', ' + firstName
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
