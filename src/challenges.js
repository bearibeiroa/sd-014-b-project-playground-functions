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

function fiz2(numeros){
   if  ((numeros% 3 == 0) && (numeros% 5 == 0)) {
  return ("fizzBuzz")
  } else if (numeros% 3 == 0) {
    return ("fizz")
  } else if (numeros% 5 == 0) {
    return ("buzz")} 
    else {
    return ("bug!")
  }
}
function fizzBuzz(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i+=1) {
    resultado.push(fiz2(numeros[i]))
  }
  return resultado
}

console.log(fizzBuzz([2,15,7,9,45]))



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
