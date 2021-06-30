// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true)
    return true;
    else
    return false;
}

// Desafio 2
function calcArea(base , height) {
  return (base*height / 2);
}

// Desafio 3
function splitSentence(frase) {
    let transformToArray = [];

    transformToArray = frase.split(' ');

    return transformToArray;
}

// Desafio 4
function concatName(arrayStrings) {
  let transformToString = '';

  transformToString = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];

  return transformToString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestValue = arrayNumbers[0];
  let countHighestValue = 0;

  for (let index = 1 ; index <= arrayNumbers.length - 1; index += 1) {
    if (highestValue < arrayNumbers[index]) {
      highestValue = arrayNumbers[index];
    }
  }

  for (let index = 0 ; index <= arrayNumbers.length - 1 ; index += 1) {
    if (highestValue == arrayNumbers[index]) {
      countHighestValue += 1;
    }
  }

  return countHighestValue;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distanceCat1 = 0;
    let distanceCat2 = 0;

    distanceCat1 = (mouse - cat1);
    distancecat2 = (mouse - cat2);

    if (distanceCat1 < distanceCat2 ) {
      return "cat1";
    } else if (distanceCat1 > distanceCat2) {
      return "cat2";
    } else {
      return "os gatos trombam e o rato foge";
    }
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
