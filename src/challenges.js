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
  let cat1MouseDist = (cat1 - mouse)**2; // Poderia usar o Math.abs() para determinar o módulo, mas
  let cat2MouseDist = (cat2 - mouse)**2; // como ele não pede o valor, deixei da forma como fora originalmente concebido.
  // Agora preciso compará-las
  if (cat1MouseDist > cat2MouseDist) {
    return 'cat2'
  } else if (cat1MouseDist < cat2MouseDist) {
    return 'cat1'
  } else {
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
