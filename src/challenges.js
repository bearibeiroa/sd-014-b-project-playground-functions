// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let palavra = frase.split(" ")
  return palavra
}

// Desafio 4
function concatName(itens) {
  return (itens[itens.length - 1] + ',' + " " + itens[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points
}

// Desafio 6
function highestCount(numeros) {
  let maiorNum = numeros[0];
  let quantidade = 0
  for (let cont = 0; cont < numeros.length; cont++) {
    if (numeros[cont] > maiorNum) {
      maiorNum = numeros[cont]
    }
  }
  for (let cont = 0; cont < numeros.length; cont++) {
    if (maiorNum === numeros[cont]) {
      quantidade++
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 3 == 0) {
      resultado.push("fizz")
    } else if (numeros[i] % 5 == 0) {
      resultado.push("buzz")
    } else if ((numeros[i] % 3 == 0) && (numeros[i] % 5 == 0)) {
      resultado.push("fizzBuzz")
    } else {
      resultado.push("bug!")
    }
  }
  return resultado
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
