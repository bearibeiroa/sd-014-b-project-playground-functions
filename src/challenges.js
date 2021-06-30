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
// I copied this beautfull code from Glauco Lomenha and changed it a little bit
function fizzBuzz(array) {
  return array.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
    if (number % 3 === 0) return 'fizz';
    if (number % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

// Desafio 9
// I copied this beautfull code from Glauco Lomenha and changed it a little bit
function encode(str) {
  let encodeObj = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return str.replace(/a|e|i|o|u/gi, (item) =>
    encodeObj[item].replace(/(?:^|\s)\S/g, function (elemento) {
      return elemento;
    }));
}

// I copied this beautfull code from Glauco Lomenha and changed it a little bit
function decode(str) {
  let encodeObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return str.replace(/1|2|3|4|5/gi, (item) =>
    encodeObj[item].replace(/(?:^|\s)\S/g, function (elemento) {
      return elemento;
    }));
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
