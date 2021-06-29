// Desafio 1
function compareTrue(statement1, statement2) {
  let resultado;
  if (statement1 === true && statement2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(setence) {
  let returnArray = setence.split(''); // Split a string into an array of substrings * note que se nao tive espaço em " " vai retonar a separação por letra
  for (let i = 0; i < returnArray.length; i += 1) { // returnArray é array que retorna a substring que vieram da string principal (propriedade ) //o valor da lenght de array agora será 3 porque sao tres substrings
    return returnArray;
  }
}

// Desafio 4
function concatName(parametro) {
  let firstItem = parametro[0];
  let lasItem = parametro[parametro.length - 1];
  let firstAndLast = [];
  for (let i = 0; i < parametro.length; i += 1) { // ${} template literals/to embed expressions within normal strings
    firstAndLast = `${lasItem} , ${firstItem}`; // Template literals are enclosed by the backtick (` `)
  } return firstAndLast;                    
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let total = wins * pointsWin + ties * pointsTie;
  return total;
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
