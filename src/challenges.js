// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let divisor = [''];
  let counter = 0;
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      divisor[counter] += sentence[index];
    } else {
      counter += 1;
      divisor[counter] = '';
    }
  }
  return divisor;
}

// Desafio 4
function concatName(names) {
  let concat = names[names.length - 1];
  concat += ', ';
  concat += names[0];
  return concat;
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
