// Desafio 1
function compareTrue(item1, item2) {
  if (item1 === true && item2 === true) {
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
function splitSentence(sentence) {
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(input) {
  let concatNameResult = input[input.length - 1] + ', ' + input[0];
  return concatNameResult;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrN) {
  let repetitions = 0;
  let highestNumber = Math.max(...arrN);
  function hR(n) {
    return n === highestNumber;
  }
  let highestNumberRepetition = arrN.filter(hR);
  return highestNumberRepetition.length;
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
