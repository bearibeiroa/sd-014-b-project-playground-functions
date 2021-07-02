// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let arrayFinal = [];
  let arrayIndexOf = 0;
  for (let index = 0; index < arrayStrings.length; index += 1) {
    arrayIndexOf = arrayStrings.indexOf(arrayStrings[index]);
    if (arrayIndexOf === 0 || arrayIndexOf === arrayStrings.length - 1) {
      arrayFinal.unshift(arrayStrings[index]);
    }
  }
  return arrayFinal.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let arraySorted = arrayNumbers.sort(function (a, b) {
    return a - b;
  });
  let highestNumber = arraySorted[arraySorted.length - 1];
  for (let number of arrayNumbers) {
    if (number >= highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  if (Math.abs(distCat1) > Math.abs(distCat2)) {
    return 'cat2';
  } if (Math.abs(distCat2) > Math.abs(distCat1)) {
    return 'cat1';
  } if (Math.abs(distCat1) === Math.abs(distCat2)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function checkInt(divisor, dividendo) {
  return dividendo % divisor === 0;
}
function fizzBuzz(arrayNumber) {
  let result = [];
  let boolean = true;
  for (let number of arrayNumber) {
    switch (boolean) {
      case checkInt(5, number) && checkInt(3, number):
        result.push('fizzBuzz');
        break;
      case checkInt(5, number):
        result.push('buzz');
        break;
      case checkInt(3, number):
        result.push('fizz');
        break;
      default:
        result.push('bug!')
      break;
    }
  } return result;
}

// Desafio 9
function encode(string) {
  let letters = [];
  for (let letter of string) {
    letters.push(letter);
  }
  for (let index = 0; index < letters.length; index += 1) {
    if (letters[index] === 'a') {
      letters[index] = 1;
    } else if (letters[index] === 'e') {
      letters[index] = 2;
    } else if (letters[index] === 'i') {
      letters[index] = 3;
    } else if (letters[index] === 'o') {
      letters[index] = 4;
    } else if (letters[index] === 'u') {
      letters[index] = 5;
    }
  }
  return letters.join('');
}

function decode(string) {
  let letters = [];
  for (let letter of string) {
    letters.push(letter);
  }
  for (let index = 0; index < letters.length; index += 1) {
    if (letters[index] === '1') {
      letters[index] = 'a';
    } else if (letters[index] === '2') {
      letters[index] = 'e';
    } else if (letters[index] === '3') {
      letters[index] = 'i';
    } else if (letters[index] === '4') {
      letters[index] = 'o';
    } else if (letters[index] === '5') {
      letters[index] = 'u';
    }
  }
  return letters.join('');
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
