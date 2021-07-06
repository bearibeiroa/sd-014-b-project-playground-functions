// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 && v2) { return true; }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let sentenceS = string.split(' ');
  return sentenceS;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array[array.length - 1];
  let first = array[0];
  let result = `${last}, ${first}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(numberlist) {
  // seu código aqui
  let count = 0;
  let maiornum = numberlist[0];
  for (let index = 0; index < numberlist.length; index += 1) {
    let numeroatual = numberlist[index];
    if (numeroatual >= maiornum) {
      maiornum = numeroatual;
    }
  }
  for (let index2 = 0; index2 < numberlist.length; index2 += 1) {
    if (maiornum === numberlist[index2]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return ('cat1');
  } if (distancia1 > distancia2) {
    return ('cat2');
  } if (distancia1 === distancia2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
  function FizzBuzzBug(numeros) {
    if (numeros % 3 === 0 && numeros % 5 === 0) { return ('fizzBuzz'); }
    if (numeros % 5 === 0) { return ('buzz'); }
    if (numeros % 3 === 0) { return ('fizz'); }
    return ('bug!');
  }
  function fizzBuzz(numeros) {
    let resposta = [];
    for (let count = 0; count < numeros.length; count += 1) {
      resposta.push(FizzBuzzBug(numeros[count]));
    }
    return resposta;
  }
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
