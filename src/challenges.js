/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let triangle = ((base * height) / 2);
  return triangle;
}

// Desafio 3
function splitSentence(phrase) {
  let fraseF = phrase.split(' ');
  return fraseF;
}

// Desafio 4
function concatName(phrase) {
  let primeiro = `${phrase.pop()}, ${phrase.shift()}`;
  return primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let total = vitoria + empate;
  return total;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(conta) {
  conta.sort(); conta.reverse();
  let counter = 0;
  let numero = conta[0];
  for (let i = 0; i < conta.length; i += 1) {
    if (conta[i] === numero) {
      counter += 1;
      if (numero < 0) {
        numero *= -1;
      }
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pos = cat1 + mouse;
  let pos2 = cat2 + mouse;
  if (cat2 - mouse === 1 && cat1 + mouse === 1) {
    return 'os gatos trombam e o rato foge';
  }
  if (pos < pos2) {
    return 'cat1';
  }
  if (pos2 < pos) {
    return 'cat2';
  }
}

function fizzBuzz(nums) {
  let total = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 5 === 0 && nums[i] % 3 === 0) {
      total.push('fizzBuzz');
    } else if (nums[i] % 5 === 0) {
      total.push('buzz');
    } else if (nums[i] % 3 === 0) {
      total.push('fizz');
    } else {
      total.push('bug!');
    }
  }
  return total;
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
