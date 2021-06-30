// Desafio 1
function compareTrue(value01, value02) {
  // seu código aqui
  if(value01 && value02) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(splitString) {
  // seu código aqui
  return splitString.split(' ')
}

// Desafio 4
function concatName(nomesVariados) {
  // seu código aqui
  let firstValue = "";
  let lastValue = "";

  for(let index = 0; index < nomesVariados.length; index += 1) {
    firstValue = nomesVariados[0]
    lastValue = nomesVariados[index]
  };

  let inverseConcat = `${lastValue}, ${firstValue}`
  
  return inverseConcat

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = 3
  let tiesPoints = 1

  let calculateWinsPoints = winsPoints * wins
  let calculateTiesPoints = tiesPoints * ties

  if (calculateWinsPoints > 0 || calculateTiesPoints > 0) {
    return calculateWinsPoints + calculateTiesPoints
  } else {
    return 0
  }

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
