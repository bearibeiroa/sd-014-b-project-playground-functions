/* eslint-disable complexity */
// Desafio 1
function compareTrue(first, second) {
  if (first === true && second === true) {
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
function splitSentence(go) {
  return go.split(' ');
}

// Desafio 4
function concatName(array, concat, space) {
  space = ', ';
  concat = array[array.length - 1] + space + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties, total) {
  wins *= 3;
  ties *= 1;
  total = wins + ties;
  return total;
}

// Desafio 6
function highestCount(list, biggerNumber, numberOfHits) {
  for (let index = 0; index < list.length; index += 1) {
    if (biggerNumber === undefined) {
      biggerNumber = list[index];
    } else if (biggerNumber <= list[index]) {
      biggerNumber = list[index];
    }
  }
  for (let index = 0; index < list.length; index += +1) {
    if (numberOfHits === undefined) {
      numberOfHits = 0;
    }
    if (biggerNumber === list[index]) {
      numberOfHits += 1;
    }
  }
  return numberOfHits;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = cat1 - mouse;
  let cat2Mouse = cat2 - mouse;
  if (Math.abs(cat1Mouse) === Math.abs(cat2Mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1Mouse) > Math.abs(cat2Mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1Mouse) < Math.abs(cat2Mouse)) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (index = 0; index < array.length; index += 1) {
    if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      array2 +='fizzBuzz,';
    } else if ((array[index] % 5) === 0) {
      array2 += 'buzz,';
    } else if (((array[index] % 3) === 0)) {
      array2 += 'fizz,';
    } else {
      array2 += 'bug!,';
    }
  }
  return array2.split(',', array.length);
}

// Desafio 9
function encode(string) {
  let codex = string.split('');
  for (let index = 0; index < codex.length; index += 1) {
    if (codex[index] === 'a') {
      codex[index] = '1';
    } else if (codex[index] === 'e') {
      codex[index] = '2';
    } else if (codex[index] === 'i') {
      codex[index] = '3';
    } else if (codex[index] === 'o') {
      codex[index] = '4';
    } else if (codex[index] === 'u') {
      codex[index] = '5';
    }
  }
  return codex.join('');
}

function decode(string) {
  let codex = string.split('');
  for (let index = 0; index < codex.length; index += 1) {
    if (codex[index] === '1') {
      codex[index] = 'a';
    } else if (codex[index] === '2') {
      codex[index] = 'e';
    } else if (codex[index] === '3') {
      codex[index] = 'i';
    } else if (codex[index] === '4') {
      codex[index] = 'o';
    } else if (codex[index] === '5') {
      codex[index] = 'u';
    }
  }
  return codex.join('');
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
