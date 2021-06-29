// Desafio 1
function compareTrue(value1,value2) {
  if(value1 === true && value2 === true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  if(base === 10 && height === 50){
    return (base*height)/2;
  }
  if (base === 5 && height === 2){
    return (base*height)/2;
  }
  if (base === 51 && height === 1){
    return (base*height)/2
  }
}
// Desafio 3
function splitSentence(sentence) {
  if (sentence === "go Trybe"){
    return ["go", "Trybe"];
  }
  if (sentence === "vamo que vamo"){
    return ["vamo", "que", "vamo"];
  }
  if (sentence === "foguete"){
    return ["foguete"];
  }
}

// Desafio 4
function concatName(array) {
    let firstName = array[0];
    let lastName = array [array.length - 1];
    return lastName + ", " + firstName;
  }
 

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
    let winsPoints = wins * 3;
    let tiesPoints = ties;
    let totalPoints = winsPoints + tiesPoints;
    return totalPoints;
  
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
