// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(mergedSentence) {
  let sentenceSplit = mergedSentence.split(' ');
  return sentenceSplit;
}

// Desafio 4
function concatName(array) {
  let nameConcat = '';
  nameConcat += (`${array[(array.length - 1)]}, ${array[0]}`); // Adequação conforme sugestão ESLint : https://eslint.org/docs/rules/prefer-template
  return (nameConcat);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsFootball = 3 * wins + ties;
  return pointsFootball;
}

// Desafio 6
function verificaMaior(numbers) {
  let indiceMaior = 0;
  for (let indice in numbers) {
    if (numbers[indiceMaior] < numbers[indice]) {
      indiceMaior = indice;
    }
  }
  return numbers[indiceMaior];
}

function highestCount(numeros) {
  let verificaNumero = verificaMaior(numeros);
  let contNumero = 0;
  for (let index2 in numeros) {
    if (verificaNumero === numeros[index2]) {
      contNumero += 1;
    }
  }
  return contNumero;
}

/* Outra solução do Desafio 6, com maior complexidade, segundo o ESLint:
function highestCount(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  let verificaNumero = numeros[indiceMaior];
  let contNumero = 0;
  for (let index2 in numeros) {
    if (verificaNumero === numeros[index2]) {
      contNumero += 1;
    }
  }
  return contNumero;
} */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = (mouse - cat1) ** 2;
  let distMouseCat2 = (mouse - cat2) ** 2;
  if (distMouseCat1 < distMouseCat2) {
    return ('cat1');
  } if (distMouseCat2 < distMouseCat1) {
    return ('cat2');
  } if (distMouseCat1 === distMouseCat2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8

function verificadorFizzBuzzBug(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) { return ('fizzBuzz'); }
  if (numero % 5 === 0) { return ('buzz'); }
  if (numero % 3 === 0) { return ('fizz'); }
  return ('bug!');
}

function fizzBuzz(numeros) {
  let arrayResultado = [];
  for (let counter = 0; counter < numeros.length; counter += 1) {
    arrayResultado.push(verificadorFizzBuzzBug(numeros[counter])); // array de resultado recebe resultado da função verificadora
  }
  return arrayResultado;
}

/* Outra solução do Desafio 8, com maior complexidade, segundo o ESLint:
function fizzBuzz(numeros) {
  let fizzbuzzbug = [];
  for (let numero in numeros) {
    if (numeros[numero] % 3 === 0 && numeros[numero] % 5 !== 0) {
      fizzbuzzbug.push('fizz');
    } else if (numeros[numero] % 5 === 0 && numeros[numero] % 3 !== 0) {
      fizzbuzzbug.push('buzz');
    } else if (numeros[numero] % 5 === 0 && numeros[numero] % 3 === 0) {
      fizzbuzzbug.push('fizzBuzz');
    } else { fizzbuzzbug.push('bug!'); }
  }
  return fizzbuzzbug;
} */

// Desafio 9
function encode(str1ng) {
  let encodedString = str1ng;
  encodedString = encodedString.replace(/a/gi, '1'); // propriedade 'g' de global e 'i' de ignore case flag (maiusculas, minúsculas)
  encodedString = encodedString.replace(/e/gi, '2');
  encodedString = encodedString.replace(/i/gi, '3');
  encodedString = encodedString.replace(/o/gi, '4');
  encodedString = encodedString.replace(/u/gi, '5');
  return encodedString;
}

function decode(encodedString) {
  let decodedString = encodedString;
  decodedString = decodedString.replace(/1/g, 'a'); // propriedade 'g' de global
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
  return (decodedString);
}

// Documentação consultada de 'regular expression'(acesso em 4/07/2021):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

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
