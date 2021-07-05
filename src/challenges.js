// Desafio 1
function compareTrue(firstNumber, secondNumber) {
  if (firstNumber === true && secondNumber === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(str) {
  let result = str.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  let result = lastElement + ', ' + firstElement;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  let maxNumber = Math.max(...array);
  let repetitions = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maxNumber) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs ( cat1 - mouse ) ;
  let distanceCat2 = Math.abs ( cat2 - mouse ) ;
  if (distanceCat1 <= mouse) {
    return 'cat1';
  }
  else if (distanceCat2 <= mouse) {
    return 'cat2';
  }
  return 'os gatos se trombam e o rato foge';
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
