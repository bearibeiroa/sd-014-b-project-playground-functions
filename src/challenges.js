// Função para verificar repetições dentro de um Array;
function countReptition(lista, number) {
  let value = 0;
  for (let cont = 0; cont < lista.length; cont += 1) {
    if (number === lista[cont]) {
      value += 1;
    }
  }
  return value;
}

// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(value) {
  // seu código aqui
  return value.split(' ');
}

// Desafio 4
function concatName(value) {
  // seu código aqui
  let ultimoIndex = value[(value.length) - 1];
  let primeiroIndex = value[0];
  let separador = ', ';
  let concatenado = ultimoIndex + separador + primeiroIndex;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let empates = ties * 1;
  let result = vitorias + empates;
  return result;
}

// Desafio 6
function highestCount(valueList) {
  // seu código aqui
  let maiorValor = Math.max(...valueList);
  let repetitions = countReptition(valueList, maiorValor);

  return repetitions;
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
