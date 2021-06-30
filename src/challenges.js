// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Para este desafio foi pesquisado sobre o método split no seguinte site:
// Source: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length - 1] + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties * 1;
  return totalPoints;
}

// Desafio 6
/* Foi pesquisado o seguinte site para entender a função Math.max (retorna o maior número de um ou mais números):
  Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max */
function highestCount(arrayNumbers) {
  let higherNumber = Math.max.apply(null, arrayNumbers);
  let count = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (higherNumber === arrayNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
/* Não estava passando no último teste (porque a comparação tem que ser feita entre valores positivos),
então pesquisei sobre o método Math.abs (que retorna o valor absoluto) no seguinte site:
/ Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } if (cat2Distance > cat1Distance) {
    return 'cat1';
} return 'os gatos trombam e o rato foge'; 
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let resultado = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {        
      resultado.push('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  } return resultado;
} 

// Desafio 9
function encode(encodeString) {
  let newString = '';
  for (let vogal of encodeString) {
    if (vogal === 'a') {
    vogal = '1';
    newString += vogal;
  } else if (vogal === 'e') {
    vogal = '2';
    newString += vogal;
  } else if (vogal === 'i') {
    vogal = '3';
    newString += vogal;
  } else if (vogal === 'o') {
    vogal = '4';
    newString += vogal;
  } else if (vogal === 'u') {
    vogal = '5';
    newString += vogal;
  } else {
    newString += vogal;
  }
} return newString; 
}

function decode(decodeString) {
  let newWord = '';
  for (let number of decodeString) {
    if (number === '1') {
    number = 'a';
    newWord += number;
  } else if (number === '2') {
    number = 'e';
    newWord += number;
  } else if (number === '3') {
    number = 'i';
    newWord += number;
  } else if (number === '4') {
    number = 'o';
    newWord += number;
  } else if (number === '5') {
    number = 'u';
    newWord += number;
  } else {
    newWord += number;
  }
} return newWord; 
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
