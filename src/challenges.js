// Desafio 1
function compareTrue(a,b) {
  if(a===b){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringVariavel) {
  let resultado = stringVariavel.split(" ");
  return resultado;
}

// Desafio 4
function concatName(palavra) {
  let result = [];
  let primeiro = palavra[0];
  let ultimo = palavra[palavra.length - 1];
  result = [ultimo, primeiro];
  return result;
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
