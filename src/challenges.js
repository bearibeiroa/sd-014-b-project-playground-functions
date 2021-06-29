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
  let areaValue = (base * height) / 2;
  return areaValue;
}

// Desafio 3
function splitSentence(string) {
  let result = [string];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      result = string.split(' ');
    }
  }
  return result;
}

// Desafio 4
function concatName(array) {
  for (let key in array) {
    return array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let index = 0; index < wins; index += 1) {
    points += 3;
  }
  for (let index = 0; index < ties; index += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  for (let index in numbers) {
    if (numbers[index] >= higherNumber) {
      higherNumber = numbers[index];
    }
  }
  let numberVerify = higherNumber
  let timesHigherRepeat = 0;
  for (let index in numbers) {
    if (numberVerify === numbers[index]) {
      timesHigherRepeat += 1;
    }
  }
  return timesHigherRepeat;
}
console.log(highestCount([-2, -2, -1]));

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
