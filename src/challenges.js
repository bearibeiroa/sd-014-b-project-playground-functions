// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phraseReceived) {
  let phrasesArray = [];
  let tempPhrase = '';
  for (let letter of phraseReceived) {
    if (letter === ' ') {
      phrasesArray.push(tempPhrase);
      tempPhrase = '';
    } else {
      tempPhrase += letter;
    }
  }
  phrasesArray.push(tempPhrase);
  return phrasesArray;
}

// Desafio 4
function concatName(namesArray) {
  let namesArrayLength = namesArray.length;
  let primeiroItem = namesArray[0];
  let ordemInvertida = '';
  let ultimoItem = namesArray[namesArrayLength - 1];
  ordemInvertida += ultimoItem;
  ordemInvertida += ', ';
  ordemInvertida += primeiroItem;
  return ordemInvertida;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  return winPoints + tiePoints;
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
