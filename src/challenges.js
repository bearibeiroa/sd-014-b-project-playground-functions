// Desafio 1

function compareTrue(value1,value2) {
 
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
 let triangleArea = (base * height) / 2;
 return triangleArea
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(nameDivided) {
  let firstAndLast = (nameDivided[nameDivided.length - 1] + ', ' + nameDivided[0]);
  return firstAndLast;
}

// Desafio 5
function footballPoints(win,tie) {
  let points = ((win * 3) + (tie * 1));
  return points
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
