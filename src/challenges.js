// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  let area = base*height/2;
  return area;
}

// Desafio 3
function splitSentence(mergedSentence) {
  // seu código aqui
}

// Desafio 4
function concatName(array=['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
  concatName = (array[(array.length-1)] + ", " + array[0]);
  return(concatName);
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
