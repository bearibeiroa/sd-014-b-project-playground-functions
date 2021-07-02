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
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4

function concatName(frase) {
  let a = frase[frase.length - 1]; 
  let b = frase[0];
  return (a + ', ' + b);
}

// Desafio 5

function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6

function highestCount(num) {
  let maior = -1;
  let count = 0;
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > maior) {
      maior = num[index];
    }
  }
  for (let index = 0; index < num.length; index += 1) {
    if (maior === num[index]) {
      count += 1;
    }
  }
  return count;
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
