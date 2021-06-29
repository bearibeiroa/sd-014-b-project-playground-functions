// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base,height) {
  area = (base*height)/2;
  return area;
}
console.log(calcArea(5,10));

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let nameConcatened = [array[array.length-1],array[0]];
  return nameConcatened;
}
console.log(concatName(['captain','my','captain']));

// Desafio 5
function footballPoints(wins,ties) {
  let winspoints = wins*3;
  let tiespoints = ties;
  let totalpoints = winspoints+tiespoints;
  return totalpoints;
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  
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
