// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase;
}

// Desafio 4
function concatName(array) {
  let firstName = array[array.length - 1];
  let secondName = array[0];
  let newArray = firstName + ', ' + secondName;
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highNumber = array[0];
  let counter = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highNumber) {
      highNumber = array[index];
    }
  }
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (highNumber === array[secondIndex]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Os três animais estão em uma reta, então o parâmetro que define a posição relativa dos 3 no "plano" é composto apenas por um número, inserido pelo usuário.
  // Preciso calcular a distância de cada um dos gatos com relação ao rato.
  let cat1MouseDist = (cat1 - mouse) ** 2; // Poderia usar o Math.abs() para determinar o módulo e acabar com o problema de um dos gatos em uma posição menor que a do rato. Encontrei a função no developer.mozilla depois de finalizar o exercício, mas como ele não pede o valor, deixei da forma como fora originalmente concebido.
  let cat2MouseDist = (cat2 - mouse) ** 2;
  // Agora preciso compará-las
  if (cat1MouseDist > cat2MouseDist) {
    return 'cat2';
  } else if (cat1MouseDist < cat2MouseDist) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  // É necessário pegar cada valor do array e fazer 4 verificações: se (1) é divísil por 3, (2) por 5, (3) por 3 e 5 ou (4) por nennhum dos dois.
  // Para pegar cada valor do array:
  for (let index = 0; index < array.length; index += 1) {
    let division3 = array[index] % 3;
    let division5 = array[index] % 5;
    if (division3 === 0 && division5 === 0) {
      newArray.push('fizzBuzz');
    } else if (division3 === 0) {
      newArray.push('fizz');
    } else if (division5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  // string.replace() retirado do w3schools e o encadeamento foi encontrado no Stack Overflow (https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call) (usuário tckmn)
  let newString = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return newString;
}

function decode(string) {
  // string.replace() retirado do w3schools e o encadeamento foi encontrado no Stack Overflow (https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call) (usuário tckmn)
  let newString = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return newString;
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
