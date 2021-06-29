// Desafio 1
function compareTrue(nun1, nun2) {
  if(nun1 === true && nun2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return(base*height)/2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ") 
}

// Desafio 4
function concatName(string) {
  return string[string.length-1] + ", " + string[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numbers) {
let higherNumber = Math.max.apply(null, numbers);
let theAmount = 0;
for(let index = 0; index < numbers.length; index++){
  if(higherNumber === numbers[index])
  theAmount += 1;
}
return theAmount;
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
