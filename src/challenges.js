// Desafio 1
const compareTrue = (x, y) => x === true && y === true;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (str) => str.split(' ');

// Desafio 4
const concatName = (arr) => arr.join();

// Desafio 5
const footballPoints = (win, tie) => win * 3 + tie;

// Desafio 6
const highestCount = (arr) => {
  let max = Math.max(...arr);
  let countmax = arr.filter(max).length;
  return countmax;
};

// Desafio 7
const catAndMouse = (mouse, cat, catt) => {
  let dis1 = Math.abs(cat - mouse);
  let dis2 = Math.abs(catt - mouse);
  if (dis1 > dis2) return 'cat2';
  if (dis1 > dis2) return 'cat1';
  return 'os gatos trombam e o rato foge';
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
