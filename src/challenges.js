// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calcTotal = (base * height) / 2;
  return calcTotal;
}

// Desafio 3
function splitSentence(word) {
  let separador = word.split(' ');
  return separador;
}

// Desafio 4
function concatName(word) {
  let resultadoName = `${word[word.length - 1]}, ${word[0]}`;
  return resultadoName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontosWins = wins * 3;
  let totalPontosTies = ties * 1;
  let totalPontos = totalPontosWins + totalPontosTies;
  return totalPontos;
}

// Desafio 6
function highestCount(numbersOfCount) {
  let quantRepetido = 0;
  let maxNumber = Math.max(...numbersOfCount);
  for (let index = 0; index <= numbersOfCount.length; index += 1) {
    if (maxNumber === numbersOfCount[index]) quantRepetido += 1;
  }
  return quantRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let primeiroChegar = '';
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    primeiroChegar = 'cat1';
  } else if (distCat2 < distCat1) {
    primeiroChegar = 'cat2';
  } else {
    primeiroChegar = 'os gatos trombam e o rato foge';
  }
  return primeiroChegar;
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
