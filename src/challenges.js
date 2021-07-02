// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 && arg2)
    return true;

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
  return array[array.length -1] + ", " + array[0];
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
  for(i in narray)
  {
     if (narray[i] === highest)
      counter++;
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
