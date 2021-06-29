// Desafio 1
function compareTrue(a, b) {
  console.log('oi');
  return a && b;
}
// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  const arrayDaFraseDelimitadoPorEspacos = frase.split(' ');
  return arrayDaFraseDelimitadoPorEspacos;
}

// Desafio 4
function concatName(arrayNomes) {
  const primeiroItem = arrayNomes[0];
  const ultimoItem = arrayNomes[arrayNomes.length - 1];

  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const potuacaoVitorias = 3 * wins;
  const pontuacaoEmpates = ties;
  const pontuacaoJogo = potuacaoVitorias + pontuacaoEmpates;

  return pontuacaoJogo;
}

// Desafio 6
function obterMaiorNumero(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (maiorNumero < arrayNumeros[i]) {
      maiorNumero = arrayNumeros[i];
    }
  }

  return maiorNumero;
}

function contarRepeticoesNumero(numero, arrayNumeros) {
  let quantidadeRepeticoesNumero = 0;

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (numero === arrayNumeros[i]) {
      quantidadeRepeticoesNumero += 1;
    }
  }

  return quantidadeRepeticoesNumero;
}

function highestCount(arrayNumeros) {
  const maiorNumero = obterMaiorNumero(arrayNumeros);
  const quantidadeRepeticoesMaiorNumero = contarRepeticoesNumero(maiorNumero, arrayNumeros);

  return quantidadeRepeticoesMaiorNumero;
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
