// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 && arg2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos += wins * 3;
  pontos += ties * 1;
  return pontos;
}

// Desafio 6
function highestCount(narray) {
  narray.sort();
  let highest = narray[narray.length - 1];
  let counter = 0;
  for (let i in narray) {
    if (narray[i] === highest) counter += 1;
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = cat1 - mouse;
  let position2 = cat2 - mouse;

  if (position1 < position2) return 'cat1';
  if (position1 > position2) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

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
