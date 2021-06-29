// Desafio 1
function compareTrue(parameterA, parameterB) {
  if(parameterA === true && parameterB === true) {
    return true;
    } else {
      return false;
    }
}
//console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  area = (base*height)/2;
  return area;
}
console.log(calcArea(51,1))

// Desafio 3
function splitSentence(frase) {
  novaFrase = frase.split(" ");
  return novaFrase;
}
console.log(splitSentence("go ty be"))

// Desafio 4
//Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

function concatName(frase) {
  // result = frase[frase.length - 1] + frase[0];
  // return result
  result = frase[frase.length - 1]
  result += ", "
  result += frase[0]
  return result
}
//console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints(wins, ties,) {
  result = (wins*3) + (ties*1)
  return result
  // seu código aqui
}
console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(listNumber) {
  let higherNumber = 0;
  let countMaior = 0;
  for(let indice in listNumber) {
    if(higherNumber < listNumber[indice]){
      higherNumber = listNumber[indice];
    }
  }
//  return higherNumber
  for(let indice2 in listNumber){
    if(higherNumber === listNumber[indice2])
    countMaior +=1;
  }
  return countMaior  
}

//console.log(highestCount([0, 0, 0]))

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
