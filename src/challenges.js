// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(menssage) {
  return menssage.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  return (arrayName[arrayName.length - 1] + ', ' + arrayName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numbers) {
  let biggestNumber = Math.max.apply(null, numbers);
  let total = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggestNumber) {
      total += 1;
    }
  } return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let resultado;
  if (distCat1 < distCat2) {
    resultado = 'cat1';
  } else if (distCat1 > distCat2) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let resposta = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      resposta.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      resposta.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(letras) {
  letras = letras.replace(/a/g, '1');
  letras = letras.replace(/e/g, '2');
  letras = letras.replace(/i/g, '3');
  letras = letras.replace(/o/g, '4');
  letras = letras.replace(/u/g, '5');
  return letras;
}
function decode(numeros) {
  numeros = numeros.replace(/1/g, 'a');
  numeros = numeros.replace(/2/g, 'e');
  numeros = numeros.replace(/3/g, 'i');
  numeros = numeros.replace(/4/g, 'o');
  numeros = numeros.replace(/5/g, 'u');
  return numeros;
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
