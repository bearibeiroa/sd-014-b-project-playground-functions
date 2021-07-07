// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 <= 10 && num2 >= 20 ) {
    return true;
  } else { 
    return false;
  }
  compareTrue(10, 20);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  areaTotal = base*height/2;
  return areaTotal;
  calcArea(10,20);
}

// Desafio 3
function splitSentence() {
  // seu código aqui
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
