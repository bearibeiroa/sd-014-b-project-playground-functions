// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ',);
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  return arrayString[arrayString.length-1] + ", " + arrayString[0];
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  return (win*3) + (ties*1);
}

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui
  let highNum = 0;
  let count = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    
    highNum = Math.max.apply(null, arrayNum);
    
    for (let index = 0; index < arrayNum.length; index += 1) {
      if (arrayNum[index] === highNum) {
        count += 1;
      }
    }
    return count;    
  }
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
