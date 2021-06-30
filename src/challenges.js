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
function catAndMouse(mouse, cat1, cat2,) {
  if ((cat1 + cat2) / 2 === mouse) {
    return "os gatos trombam e o rato foge";
  }
  if (mouse + cat1 < mouse + cat2) {
    return "cat1";
  }else{
    return "cat2"
  }
  // refatorando codgo, com fererencia ao repositorio de Welton Thomas Ferreira https://github.com/tryber/sd-014-b-project-playground-functions/blob/welton-ferreira-playground-functions/src/challenges.js
}


// Desafio 8
function fizzBuzz(array) {
  resposta = []
  for(let index = 0; index < array.length; index += 1){

    if(array[index]%3 === 0 && array[index]%5 === 0){
      resposta.push('fizzBuzz')
    }else if(array[index]%3 === 0){
      resposta.push('fizz')
    }else if(array[index]%5 === 0){
      resposta.push('buzz')
    }else{
      resposta.push('bug!')
    }

  }
  return resposta
}

// Desafio 9
function encode(string){
  let vogais = 'aeiou'
    for(let index = 0; index < string.length; index += 1){
      for(index2 = 0; index2 < vogais.length; index2 += 1){
        string = string.replace(vogais[index2],index2+1)
      }
    }
    return string
}
function decode(string) {
  let vogais = 'aeiou'
    for(let index = 0; index < string.length; index += 1){
      for(index2 = 0; index2 < vogais.length; index2 += 1){
        string = string.replace(index2+1,vogais[index2])
      }
    }
      return string
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
