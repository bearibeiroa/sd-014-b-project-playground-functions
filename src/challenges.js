// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  let resultado = false;
  if (valor1 === true && valor2 === true) {
    resultado = true;
  }
  return resultado;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height / 2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fraseArray = frase.split('');
  let resultado = [];
  let fraseDividida = '';
  for (let index = 0; index < fraseArray.length; index += 1) {
    let letraAdicionada = '';
    if (fraseArray[index] !== ' ' && index < fraseArray.length - 1) {
      fraseDividida += fraseArray[index]
    } else if (fraseArray[index] === ' ') {
      resultado.push(fraseDividida);
      fraseDividida = '';
    } else {
      fraseDividida += fraseArray[index]
      resultado.push(fraseDividida)
      fraseDividida = '';
    }
  }
  return resultado;
}

// Desafio 4
function concatName(frase) {
  // seu código aqui

  let ultimoNome = frase[frase.length - 1];
  let primeiroNome = frase[0];
  let nomesConcatenados = ultimoNome + ", " + primeiroNome
  return nomesConcatenados
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3 + ties * 1 + 0;
  return pontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  // seu código aqui
  function sortNumber(a, b) {
    return a - b;

  }

  let arrayDeNumerosOrdenada = arrayDeNumeros.sort(sortNumber)
  let maiorNumero = arrayDeNumerosOrdenada[arrayDeNumerosOrdenada.length - 1]
  let numeroDeVezes = 0;
  for (let index = (arrayDeNumeros.length - 1); index >= 0; index -= 1) {
    if (maiorNumero === arrayDeNumerosOrdenada[index]) {
      numeroDeVezes += 1;
    }
  }
  return numeroDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distance1 = Math.abs(Math.abs(mouse) - Math.abs(cat1));
  let distance2 = Math.abs(Math.abs(mouse) - Math.abs(cat2));

  if (distance2 < distance1) {
    return "cat2"
  } else if (distance1 < distance2) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
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
