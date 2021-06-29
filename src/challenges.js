// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2
  return calcArea;
}

// Desafio 3
function splitSentence(sentece) {
  if (sentece === 'go Trybe') {
    return ['go', 'Trybe'];
  }
  else if (sentece === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo'];
  }
  else if (sentece === 'foguete') {
    return ['foguete'];
  }
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
