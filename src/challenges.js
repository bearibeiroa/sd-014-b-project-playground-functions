// Desafio 1
function compareTrue(value1, value2) {
  return(value1 && value2)
}
console.log(compareTrue(false,true))

// Desafio 2
function calcArea(triangleBase, triangleHeigth) {
  let base = triangleBase;
  let heigth = triangleHeigth;
  let triangleArea = base * heigth / 2
  return triangleArea;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() {
  
}

// Desafio 4
function concatName(arrayOfStrings) {
  let mixOfStrings = arrayOfStrings;
  return(arrayOfStrings[arrayOfStrings.length-1] + ', ' + arrayOfStrings[0])
}
console.log(concatName(['Gabriel', 'Angus', 'Malcon', 'Eddie', 'Bryan']))

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
