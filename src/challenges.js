// Desafio 1
function compareTrue(a1,a2) {
  // seu código aqui
  if (a1 === true && a2 === true) {
  return true;
  } else {
  return false;
}}
  
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let triangulo = (base * height) /2;
  return triangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  frase = 'Go Trybe';
  let space = [];
  console.log(space.splitSentence(','));
}

// Desafio 4
function concatName(listnames) {
  // seu código aqui
  listnames['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  
  //console.log(listnames[0,3]);
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