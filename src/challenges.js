// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let listaPalavras = [];
  let reservaPalavras = '';
  string += ' ';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      reservaPalavras += string[i];
    } else {
      listaPalavras.push(reservaPalavras);
      reservaPalavras = '';
    }
  }
  return listaPalavras;
}

// Desafio 4
function concatName(nomes) {
  let primeiroItem;
  let ultimoItem;
  for (let i = 0; i < nomes.length; i += 1) {
    if (i === 0) {
      primeiroItem = nomes[i];
    } else if (i === (nomes.length - 1)) {
      ultimoItem = nomes[i] + ', ';
    }
  }
  return ultimoItem + primeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
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
