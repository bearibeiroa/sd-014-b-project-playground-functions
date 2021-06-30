// Desafio 1
function compareTrue(statement1, statement2) {
  let resultado;
  if (statement1 === true && statement2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(3, 4));

// Desafio 3
function splitSentence(string) {
  let words = string.split(' '); // Split a string into an array of substrings * note que se nao tive espaço em " " vai retonar a separação por letra
  for (let i = 0; i < string.length; i += 1) { // returnArray é array que retorna a substring que vieram da string principal (propriedade )  
    return words;
  }
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(parametro) {
  let firstItem = parametro[0];
  let lastItem = parametro[parametro.length - 1];
  let firstAndLast = [];
  for (let i = 0; i < parametro.length; i += 1) { // ${} template literals/to embed expressions within normal strings
    firstAndLast = `${lastItem}, ${firstItem}`; // Template literals are enclosed by the backtick (` `)
  } return firstAndLast;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let total = wins * pointsWin + ties * pointsTie;
  return total;
}

// Desafio 6
function highestCount(array) {
  let highestValue = array[0]; // define o valor de comparação inicial (primeiro elemento);
  let counter = 0; // define o contador do maior número
  for (let i = 0; i < array.length; i += 1) { // loop pelos elementos do array
    if (array[i] > highestValue) { // se o valor da posiçao do array for maior que o numero de comparação ele assume o posto
      highestValue = array[i];
      counter = 0;
    }
    if (array[i] === highestValue) { // compara o valor máximo definido com os elementos da array do loop
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([-1, -4, -5, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanCat1 = Math.abs(mouse - cat1); // the absolute value or modulus of a real number
  let distanCat2 = Math.abs(mouse - cat2);
  if (distanCat1 > distanCat2) {
    return 'cat2';
  } if (distanCat2 > distanCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode() {
}

function decode() {
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
