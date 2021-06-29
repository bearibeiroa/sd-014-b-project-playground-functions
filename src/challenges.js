// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
   }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let palavra = '';
  let sentenceSplited = [];
  for (let caracter in sentence) {
    if (sentence[caracter] !== ' ') {
      palavra += sentence[caracter];
      if (caracter == sentence.length - 1) {
        sentenceSplited.push(palavra);
      }
    } else {
      sentenceSplited.push(palavra);
      palavra = '';
    }
  }
  return sentenceSplited;
}

// Desafio 4
function concatName(array) {
  let string = '';
  string = (array[array.length - 1] + ', ' + array[0]);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
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
