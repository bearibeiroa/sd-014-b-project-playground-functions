// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(str) {
  let arrayOfStrings = str.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  let comma = ', ';
  let dot = '.';
  return array[array.length - 1] + comma + array[0] + dot;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maior = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  const check = arr.map((x) => {
    if (x % 3 === 0 && x % 5 === 0) return 'fizzBuzz';
    if (x % 3 === 0) return 'fizz';
    if (x % 5 === 0) return 'buzz';
    return 'bug!';
  });
  return check;
}
console.log;

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
