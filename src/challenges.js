// Desafio 1
function compareTrue(param1, param2) {
  let result = false;
  if (param1 === true && param2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1].concat(', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (3 * wins) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumber = arrayOfNumbers[0];
  for (let number = 0; number < arrayOfNumbers.length; number += 1) {
    if (arrayOfNumbers[number] > highestNumber) {
      highestNumber = arrayOfNumbers[number];
    }
  }
  let countHighest = 0;
  for (let number = 0; number < arrayOfNumbers.length; number += 1) {
    if (arrayOfNumbers[number] === highestNumber) {
      countHighest += 1;
    }
  }
  return countHighest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let arrayOfStrings = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      arrayOfStrings.push('fizzBuzz');
    } else if (arrayOfNumbers[index] % 3 === 0) {
      arrayOfStrings.push('fizz');
    } else if (arrayOfNumbers[index] % 5 === 0) {
      arrayOfStrings.push('buzz');
    } else {
      arrayOfStrings.push('bug!');
    }
  }
  return arrayOfStrings;
}

// Desafio 9
function encode(string) {
  let tempArray = string.split('');
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < string.length; index += 1) {
    for (let key in code) {
      if (tempArray[index] === key) {
        tempArray[index] = code[key];
      }
    }
  }
  let newString = tempArray.join('');
  return newString;
}

function decode(string) {
  let tempArray = string.split('');
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < string.length; index += 1) {
    for (let key in code) {
      if (tempArray[index] === key) {
        tempArray[index] = code[key];
      }
    }
  }
  let newString = tempArray.join('');
  return newString;
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
