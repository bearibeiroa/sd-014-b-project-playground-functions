// Desafio 1
function compareTrue(valorUm, ValorDois){
  if(valorUm === true && ValorDois === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let resposta = (base*heigth)/2;
  return resposta
}

// Desafio 3
function splitSentence(string) {
  let resposta = string.split(' ')
  return resposta
}

// Desafio 4
function concatName(arrayDeStrings) {
  let resposta = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0]
  return resposta
}

// Desafio 5
function footballPoints(wins, ties) {
  let resposta = (wins*3)+ties
  return resposta
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
