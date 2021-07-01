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
  let result = ((base * height) / 2);
  return result;
}

// Desafio 3
function splitSentence(sentenca) {
  let result = sentenca.split(' ');
  return (result);
}

// Desafio 4
function concatName(names) {
  let concaLastName = names[names.length - 1];
  let concaFirstName = names[0];
  return (concaLastName + ', ' + concaFirstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winnerpoints = (wins * 3);
  let tiespoints = (ties * 1);
  let total = (winnerpoints + tiespoints);
  return (total);
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
