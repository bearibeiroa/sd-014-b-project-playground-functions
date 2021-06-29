// Desafio 1
const compareTrue = (x, y) => x === true && y === true;

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
  let i = 0;
  let max = Math.max(...arr);
  arr.forEach((n) => {
    if (max === n) {
      i += 1;
    }
  });
  return i;
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
const fizzBuzz = (fbArr) => {
  const fbArr2 = [];
  for (let check of fbArr) {
    if (check % 3 === 0 && check % 5 === 0) {
      fbArr2.push('fizzbuzz');
    }
    if (check % 3 === 0) {
      fbArr2.push('fizz');
    }
    if (check % 5 === 0) {
      fbArr2.push('buzz');
    } else {
      fbArr2.push('bug!');
    }
  }
  return fbArr2;
};

// Desafio 9
const encode = (stringE) => {
  let stringE2 = [];
};
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
