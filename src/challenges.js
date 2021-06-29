// Desafio 1
const compareTrue = (x, y) => x === true && y === true;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (str) => str.split(' ');

// Desafio 4
const concatName = (arr) => arr.join(', ');

// Desafio 5
const footballPoints = (wim, tie) => win * 3 + tie;

// Desafio 6
const highestCount = (arr) => {
  var max = Math.max(...arr);
  var countmax = arr.filter(max).length;

  return countmax;
};

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
