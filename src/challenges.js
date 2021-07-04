// Desafio 1
function compareTrue(item1, item2) {
  if (item1 === true && item2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(input) {
  let concatNameResult = input[input.length - 1] + ', ' + input[0];
  return concatNameResult;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrN) {
  let highestNumber = Math.max(...arrN);
  function hR(n) {
    return n === highestNumber;
  }
  let highestNumberRepetition = arrN.filter(hR);
  return highestNumberRepetition.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = Math.abs(cat1 - mouse);
  let cat2distance = Math.abs(cat2 - mouse);
  if (cat1distance < cat2distance) {
    return 'cat1';
  } else if (cat1distance > cat2distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      fizzBuzz.push('fizz');
    } else if (array[i] % 5 === 0) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(input) {
  let dArr = [...input];
  let encoded = '';
  for (let i = 0; i < dArr.length; i += 1) {
    if (dArr[i] === 'a') {
      encoded += '1';
    } else if (dArr[i] === 'e') {
      encoded += '2';
    } else if (dArr[i] === 'i') {
      encoded += '3';
    } else if (dArr[i] === 'o') {
      encoded += '4';
    } else if (dArr[i] === 'u') {
      encoded += '5';
    } else {
      encoded += dArr[i];
    }
  }
  return encoded;
}
function decode(input) {
  let eArr = [...input];
  let decoded = '';
  for (let i = 0; i < eArr.length; i += 1) {
    if (eArr[i] === '1') {
      decoded += 'a';
    } else if (eArr[i] === '2') {
      decoded += 'e';
    } else if (eArr[i] === '3') {
      decoded += 'i';
    } else if (eArr[i] === '4') {
      decoded += 'o';
    } else if (eArr[i] === '5') {
      decoded += 'u';
    } else {
      decoded += eArr[i];
    }
  }
  return decoded;
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
