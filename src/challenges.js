// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 && bool2 == true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayOfStrings = [];
  let currentChar = '';
  let currentWord = '';
  for (let i = 0; i < phrase.length; i += 1) {
    currentChar = phrase[i];
    if (currentChar == ' ') {
      arrayOfStrings.push(currentWord); 
      currentWord = '';
    } else {
      currentWord = currentWord + currentChar;
    }
  }
  arrayOfStrings.push(currentWord); 

  return arrayOfStrings;
}


// Desafio 4
function concatName(array) {
  let lastThenFirstName = '';
  for(let i = array.length; i < array.length; i -= 1){
    lastThenFirstName = array.length[i] + array[index];
    // TO DO
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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
