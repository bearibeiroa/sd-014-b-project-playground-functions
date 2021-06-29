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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
