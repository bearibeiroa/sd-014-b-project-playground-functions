// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let result = (base * altura) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = string.split(' ');

  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let index = arrayString.length - 1;
  let resultString = `${arrayString[index]}, ${arrayString[0]}`;

  return resultString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let ptsWins = wins * 3;
  let ptsTies = ties * 1;

  return ptsWins + ptsTies;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui [9, 1, 2, 3, 9, 5, 7]
  let maiorNumero = Math.max(...numbers);
  let cont = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maiorNumero) {
      cont += 1;
    }
  }

  return cont;
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
