// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let split = [];
  for (let index = 0; index < phrase; index += 1) {
   split = phrase.push(phrase[index]);
  }
  return split;
}

// Desafio 4
function concatName(value) {
  let soma = value[value.length -1] + ', ' + value[0];
  return soma;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let biggest = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >= biggest) {
      biggest = numbers[i];
    }
  }
  let r = 0;
  for (let i2 = 0; i2 < numbers.length; i2 += 1) {
    if (numbers[i2] === biggest) {
      r += 1;
    }
  }
  return r;
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
