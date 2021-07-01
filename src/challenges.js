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
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  let maiorNumero = Math.max(...numeros);
  for (let index in numeros) {
    if (maiorNumero === numeros[index]) {
      contNumero += 1;
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = contNumero;
    }
  }
  return indexNumeroRepetido;
}
console.log(highestCount([-2, -2, -1, -1, -10, -5, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaCat1 = Math.abs(cat1 - mouse);
  distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let count = 0;
  for (let index in array) {
    if (array[index] % 3 === 0) {
     
    } else if (array[index] % 5 === 0) {

    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {

    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {

    }
  }
  return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
