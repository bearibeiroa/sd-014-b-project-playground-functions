// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 === true && num2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  areaTotal = (base*height)/2;
  return areaTotal;
}

// Desafio 3
function splitSentence(separando) {
  // seu código aqui
  // referencia https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
separou = separando.split(' ')
return separou;

}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  pointsWins = wins*3;
  pointsTies = ties*1;
  totalPoints = pointsWins + pointsTies;

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
