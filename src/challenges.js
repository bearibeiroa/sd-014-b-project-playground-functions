// Desafio 1
function compareTrue(value1,value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}


// Desafio 2
function calcArea(base,altura) {
  
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}


// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado;
}


// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1]+ ',' + " " + array[0];
  return concat;
}


// Desafio 5
function footballPoints(wins,ties) {
  let winPoints = 3 * wins;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}
console.log(footballPoints(0,0));
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
