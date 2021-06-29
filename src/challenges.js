// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let removedor = string.split(' ');
  return removedor;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayDeString) {
  return arrayDeString[arrayDeString.length - 1] + ", " + arrayDeString[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  wins = 3 * wins;
  ties = 1 * ties;
  return wins + ties;
}
console.log(footballPoints(3, 5));

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  let contNumero = 0;
  for (let indice = 0; indice < numeros.length; indice += 1) {
    if (numeros[indice] > maiorNumero) {
      maiorNumero = numeros[indice];
      contNumero += 1;
    }
  }
  return contNumero;
}
console.log(highestCount([2, 10, 6, 10, 10, 6, 6, 10, 10]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaCat1 = cat1 - mouse;
  distanciaCat2 = cat2 - mouse;
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(array) {
  for (let index in array) {

  }
}

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
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
