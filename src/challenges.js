// Desafio 1
function compareTrue(value1, value2) {
  let result = false;

  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(String) {
  let result = String.split(' ');
  /* Método String split () utilizado para separar uma string em um array de strings, nesse caso, o programa pede que retorne cada palavra como um elemento separado do array.
  Método retirado de: https://www.w3schools.com/jsref/jsref_split.asp
*/
  return result;
}

// Desafio 4
function concatName(Array) {
  let last = Array[Array.length - 1];
  let first = Array[0];
  let result = last + ', ' + first;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let counter = 0;
  let highestNumber = numberArray[0];
  for (let index1 = 0; index1 < numberArray.length; index1 += 1) {
    let currentNumber = numberArray[index1];
    if (currentNumber >= highestNumber) {
      highestNumber = currentNumber;
    }
  }
  for (let index2 = 0; index2 < numberArray.length; index2 += 1) {
    if (highestNumber === numberArray[index2]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let draw = 'os gatos trombam e o rato foge';

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } if (distanceCat1 === distanceCat2) {
    return draw;
  }
}

// Desafio 8
function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      stringArray.push('fizzBuzz');
    }
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 > 0) {
      stringArray.push('fizz');
    }
    if (numberArray[index] % 5 === 0 && numberArray[index] % 3 > 0) {
      stringArray.push('buzz');
    }
    if (numberArray[index] % 5 > 0 && numberArray[index] % 3 > 0) {
      stringArray.push('bug!');
    }
  }
  return stringArray;
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
