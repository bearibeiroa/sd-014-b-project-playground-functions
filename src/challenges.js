// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayStrings = phrase.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(array) {
  const lastItem = array.length - 1;
  let str = array[lastItem];
  str = str.concat(', ', array[0]);
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }

  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }

  return points;
}

// Desafio 6
function calcNumberRepetitions(numbers, higherNumber) {
  let quantityLargerNumber = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === higherNumber) {
      quantityLargerNumber += 1;
    }
  }
  return quantityLargerNumber;
}

function highestCount(numbers) {
  let higherNumber = -1;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >= higherNumber) {
      higherNumber = numbers[i];
    }
  }

  if (higherNumber === -1) return 1;

  let quantity = calcNumberRepetitions(numbers, higherNumber);

  return quantity;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const positionCat1 = Math.abs(mouse - cat1);
  const positionCat2 = Math.abs(mouse - cat2);

  if (positionCat1 < positionCat2) {
    return 'cat1';
  }

  if (positionCat1 > positionCat2) {
    return 'cat2';
  }

  if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function strFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(numbers) {
  const array = [];

  for (let i = 0; i < numbers.length; i += 1) {
    let value = strFizzBuzz(numbers[i]);
    array.push(value);
  }
  return array;
}

// Desafio 9
/**
 * Consultei o blog da Trybe para resolver este desafio 
 * Link: https://blog.betrybe.com/javascript/javascript-replace/
 */
function encode(str) {
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
}
function decode(str) {
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  str = str.replace(/5/g, 'u');
  return str;
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
