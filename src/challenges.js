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
  narray.sort((a, b) => a - b);
  let highest = narray[narray.length - 1];
  let counter = 0;
  for (let i in narray) {
    if (narray[i] === highest) counter += 1;
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = Math.abs(cat1 - mouse);
  let position2 = Math.abs(cat2 - mouse);

  if (position1 < position2) return 'cat1';
  if (position1 > position2) return 'cat2';

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(narray) {
  let result = [];
  for (let i = 0; i < narray.length; i += 1) {
    const n = narray[i];
    if (n % 5 === 0 && n % 3 === 0) result.push('fizzBuzz');
    else if (n % 5 === 0) result.push('buzz');
    else if (n % 3 === 0) result.push('fizz');
    else result.push('bug!');
  }
  return result;
}

// Desafio 9
function encode(str) {
  let obj = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let coded = '';
  for (let i = 0; i < str.length; i += 1) {
    const n = obj[str[i]];
    if (n) coded += n;
    else coded += str[i];
  }
  return coded;
}

function decode(str) {
  let obj = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let coded = '';
  for (let i = 0; i < str.length; i += 1) {
    const n = obj[str[i]];
    if (n) coded += n;
    else coded += str[i];
  }
  return coded;
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
