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
  let cat1distance = cat1 - mouse;
  let cat2distance = cat2 - mouse;
  if (cat1distance < cat2distance) {
    return 'cat1';
  } else if (cat1distance > cat2distance) {
    return 'cat2';
  } else if (cat1distance === cat2distance) {
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
