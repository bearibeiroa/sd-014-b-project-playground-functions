// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string, espaco) {
  // seu código aqui
  let array = string.split(' ', espaco);
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiroItem = array[0];
  let ultimoItem = 0;

  for (let index = 0; index < array.length; index += 1) {
    ultimoItem = array[index];
  }
  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points;
  points = wins * 3 + ties;
  return points; 
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  //Verifica maior número
  
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNumero < numbers[index] || numbers[index] < 0) {
      maiorNumero = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
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
