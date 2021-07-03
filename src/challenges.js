// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split (' ');
}

// Desafio 4
function concatName(palavra) {
  let soma = palavra[palavra.length -1] + ', ' + palavra[0];
  return soma;
}

// Desafio 5
function footballPoints(wins , ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numero) {
  let maior = numero[0];
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] >= maior) {
      maior = numero[index];
    }
  }
  let x = 0;
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] === maior) {
      x += 1;
    }
  }
  return x;
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
