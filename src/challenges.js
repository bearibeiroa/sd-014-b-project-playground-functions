// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let word = '';
  let arrayWord = [];
  for (let index = 0; index <= sentence.length; index += 1) {
    if (sentence[index] === ' ' || index === sentence.length) {
      arrayWord.push(word);
      word = '';
    } else {
      word += sentence[index];
    }
  }
  return arrayWord;
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let tamanhoArray = arrayNames.length - 1;
  let stringNames = arrayNames[tamanhoArray];
  stringNames += ', ' + arrayNames[0];
  return stringNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
  points = (3 * wins) + ties;
  return points;
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
