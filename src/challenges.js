// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let zone = base * height / 2
  return zone
}


// Desafio 3
function splitSentence(){
  
}

// Desafio 4
function concatName(array) {
  let calcu = array.length-1
  let phrase = (array[calcu] + ", " + array[0])
  return phrase
}


// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3
  let tiesPoints = ties 
  let totalPoints = winsPoints + tiesPoints
  return totalPoints
}

console.log(footballPoints(14,8))

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
