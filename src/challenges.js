// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

console.log(splitSentence('Vamo que Vamo'));

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

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let highestNumber = Math.max.apply(null, arrayNumbers);
  for (let number of arrayNumbers) {
    if (number >= highestNumber) {
      highestNumber = number;
    } else {
      count += 1;
    }
  }
  console.log(highestNumber);
  return arrayNumbers.length - count;
}

console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

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

console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayResult = [];
  for (let numbers of arrayNumber) {
    if (numbers % 3 === 0 && numbers % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if ((numbers % 5 === 0)) {
      arrayResult.push('buzz');
    } else if ((numbers % 3 === 0)) {
      arrayResult.push('fizz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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

console.log(encode('hi there!'));

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

console.log(decode('h3 th2r2!'));

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
