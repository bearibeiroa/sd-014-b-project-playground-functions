/*algumas referencias retiradas do w3 schools, geralmente funções de JS, split, abs, filter etc..*/

/*funçoes em https://developer.mozilla.org/ */

// Desafio 1
const compareTrue = (x, y) => {
  if (x === true && y === true) return true;
};

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (str) => str.split(' ');

// Desafio 4
const concatName = (arr) => `${arr[arr.length - 1]}, ${arr[0]}`;

// Desafio 5
const footballPoints = (win, tie) => win * 3 + tie;

// Desafio 6
const highestCount = (arr) => {
  let max = Math.max(...arr);
  let countmax = arr.filter(max).length;
  return countmax;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if (dist1 > dist2) return 'cat2';
  if (dist2 > dist1) return 'cat1';

  return 'os gatos trombam e o rato foge';
};

// Desafio 8
const fizzBuzz = (arr) => {
  const arr2 = [];
  for (let check of arr) {
    if (x % 3 === 0 && x % 5 === 0) arr2.push('fizzbuzz');
    if (x % 3 === 0) arr2.psuh('fizz');
    if (x % 5 === 0) arr2.push('buzz');
    else arr2.push('bug!');
  }
  return arr2;
};

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
