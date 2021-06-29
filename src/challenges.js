// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array = ['']) {
  let first = array[0] || '';
  let last = array[array.length - 1] || '';
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let maxNumber = Math.max(...array);
  array.forEach((n) => {
    if (maxNumber === n) {
      counter += 1;
    }
  });
  return counter;
}

// Desafio 7
function catAndMouse(pMouse, pCat1, pCat2) {
  let feedback = '';
  let isPositionCat1Smaller = pCat1 === 0;
  let isPositionCat2Smaller = pCat2 === 0;
  let cat1 = isPositionCat1Smaller ? (pMouse - pCat1) : (pCat1 - pMouse);
  let cat2 = isPositionCat2Smaller ? (pMouse - pCat2) : (pCat2 - pMouse);
  if (cat1 < cat2) {
    feedback = 'cat1';
  } else if (cat1 > cat2) {
    feedback = 'cat2';
  } else {
    feedback = 'os gatos trombam e o rato foge';
  }
  return feedback;
}

// Desafio 8
function fizzBuzz(array) {
  let stringArray = [];
  for (let number of array) {
    let isFizz = (number % 3) === 0;
    let isBuzz = (number % 5) === 0;
    if (isBuzz && isFizz) {
      stringArray.push('fizzBuzz');
    } else if (isFizz) {
      stringArray.push('fizz');
    } else if (isBuzz) {
      stringArray.push('buzz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
}

// Desafio 9
function encode(text) {
  let newText = '';
  for (let l of text) {
    if (l === 'a') {
      newText += '1';
    } else if (l === 'e') {
      newText += '2';
    } else if (l === 'i') {
      newText += '3';
    } else if (l === 'o') {
      newText += '4';
    } else if (l === 'u') {
      newText += '5';
    } else {
      newText += l;
    }
  }
  return newText;
}
function decode(text) {
  let newText = '';
  for (let l of text) {
    if (l === '1') {
      newText += 'a';
    } else if (l === '2') {
      newText += 'e';
    } else if (l === '3') {
      newText += 'i';
    } else if (l === '4') {
      newText += 'o';
    } else if (l === '5') {
      newText += 'u';
    } else {
      newText += l;
    }
  }
  return newText;
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
