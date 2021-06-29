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
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
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
