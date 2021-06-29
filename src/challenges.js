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
function highestCount(arrayDeNumeros) {
  let contador = arrayDeNumeros[0]
  let resposta = 0

  for(let index = 0; index < arrayDeNumeros.length; index += 1){
    if(arrayDeNumeros[index] > contador){
      contador = arrayDeNumeros[index]
    }
  }
  for(let index = 0; index < arrayDeNumeros.length; index += 1)
    if(arrayDeNumeros[index] === contador){
    resposta += 1
  }
  return resposta
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
