// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // Função split() estudada através da documentação Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let repeticoes = 0;
  for (let index = 0; index < arrayNumeros.length; index++) {
    if (arrayNumeros[index] > maiorNumero) {
      maiorNumero = arrayNumeros[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumeros.length; index2++) {
    if (maiorNumero === arrayNumeros[index2]) {
      repeticoes++;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //Função retirada da Documentação Mozilla Source:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (Math.abs(Math.abs(cat1 - mouse)) < Math.abs(cat2 - mouse)) {
    return 'cat1'
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return 'cat2'
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return 'os gatos trombam e o rato foge'
  }
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
