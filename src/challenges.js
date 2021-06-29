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
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let word = '';
  let arrayOfWords = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index]!= ' ') {
      word += string[index];
    } else {
      arrayOfWords.push(word);
      word = '';
    }

    if (index === string.length - 1) {
      arrayOfWords.push(word);
      word = '';
    }
  }
  return arrayOfWords;
}


// Desafio 4
function concatName(arrayOfStrings) {
  let result = arrayOfStrings[arrayOfStrings.length -1] + ', ' + arrayOfStrings[0];
  return result;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
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
