// Desafio 1
function compareTrue(reposta1, reposta2) {
  // seu código aqui 
  if (reposta1 && reposta2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let answer = ((base * height) / 2);
  return answer;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let vetor = phrase.split(' ');
  return vetor;
}

// Desafio 4
function concatName(vetor) {
  // seu código aqui
  let firstName = vetor[0];
  let lastName = vetor[vetor.length -1];
  return lastName + ' , ' + firstName;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
