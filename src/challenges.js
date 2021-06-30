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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let cat1Message = 'cat1';
  let cat2Message = 'cat2';
  let mouseMessage = 'os gatos trombam e o rato foge';
  if (distanceCat1 === distanceCat2) {
    return mouseMessage;
  }
  if (distanceCat1 < distanceCat2) {
    return cat1Message;
  }
  if (distanceCat2 < distanceCat1) {
    return cat2Message;
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let result = [];
  for (let value of numbers) {
    if (value % 3 === 0 && value % 5 === 0) {
      result.push('fizzBuzz');
    } else if (value % 3 === 0) {
      result.push('fizz');
    } else if (value % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
