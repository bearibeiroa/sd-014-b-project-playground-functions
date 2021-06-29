// Desafio 1
//

function compareTrue(value1, value2) {
  // receber 2 par, bolean
  // temos que usar o operador && para comparar os valores 
  // tem que retornar true ou false
  return value1 === true && value2 === true
}

// Desafio 2
function calcArea(base, height) {
  // vai receber um valor chamado base e outra de altura chamada height
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(fraseTeste) {
  return fraseTeste.split(' ', 3);
  // seu código aqui
}
// Desafio 4
function concatName(lista) {
  let primeiroNome = lista[0];
  let ultimoNome = lista[lista.length - 1];
  return (ultimoNome + ', ' + primeiroNome);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsTime = (wins * 3) + ties;
  return (pointsTime);
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
