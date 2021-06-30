/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calcTotal = (base * height) / 2;
  return calcTotal;
}

// Desafio 3
function splitSentence(word) {
  let separador = word.split(' ');
  return separador;
}

// Desafio 4
function concatName(word) {
  let resultadoName = `${word[word.length - 1]}, ${word[0]}`;
  return resultadoName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontosWins = wins * 3;
  let totalPontosTies = ties * 1;
  let totalPontos = totalPontosWins + totalPontosTies;
  return totalPontos;
}

// Desafio 6
function highestCount(numbersOfCount) {
  let quantRepetido = 0;
  let maxNumber = Math.max(...numbersOfCount);
  for (let index = 0; index <= numbersOfCount.length; index += 1) {
    if (maxNumber === numbersOfCount[index]) quantRepetido += 1;
  }
  return quantRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let primeiroChegar = '';
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    primeiroChegar = 'cat1';
  } else if (distCat2 < distCat1) {
    primeiroChegar = 'cat2';
  } else {
    primeiroChegar = 'os gatos trombam e o rato foge';
  }
  return primeiroChegar;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(numeros) {
  let newFizz = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      newFizz.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      newFizz.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      newFizz.push('buzz');
    } else {
      newFizz.push('bug!');
    }
  }
  return newFizz;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  let newEncode = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      newEncode += 1;
    } else if (string[index] === 'e') {
      newEncode += 2;
    } else if (string[index] === 'i') {
      newEncode += 3;
    } else if (string[index] === 'o') {
      newEncode += 4;
    } else if (string[index] === 'u') {
      newEncode += 5;
    } else {
      newEncode += string[index];
    }
  }
  return newEncode;
}
// eslint-disable-next-line complexity
function decode(string) {
  let newDecode = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      newDecode += 'a';
    } else if (string[index] === '2') {
      newDecode += 'e';
    } else if (string[index] === '3') {
      newDecode += 'i';
    } else if (string[index] === '4') {
      newDecode += 'o';
    } else if (string[index] === '5') {
      newDecode += 'u';
    } else {
      newDecode += string[index];
    }
  }
  return newDecode;
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
