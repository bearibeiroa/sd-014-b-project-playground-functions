const { techList } = require("./challenges2");

// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  }

  else {
     return false
    }
}


// Desafio 2
function calcArea(base,height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ")
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;

}

// Desafio 6
function highestCount(count) {

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
