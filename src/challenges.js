// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let split = str.split(" ");
  return split;
}

// Desafio 4
function concatName(vetor) {
  let posicaoFinal = vetor[(vetor.length - 1)];
  let posicaoInicial = vetor[0];
  let concatenated = posicaoFinal.concat(", " + posicaoInicial);
  return concatenated; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;  
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
