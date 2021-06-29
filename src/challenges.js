// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence (a) {
  let array1 = [];
  let words = '';
  for (let index of a) {
      if (index != ' ') {
          words += index;
      } else {
          array1.push(words);
          words = '';
      }
  }
  array1.push(words);
  return array1;
}

// Desafio 4
function concatName(names) {
  return (names[names.length - 1] + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let highestNumberCount = 0;
  for (let iMaior = 0; iMaior < numbers.length; iMaior += 1) {
      if (numbers[iMaior] > highestNumber) {
          highestNumber = numbers[iMaior];
      }    
  }
  for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] === highestNumber) {
          highestNumberCount += 1;
      }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    resultado = "cat2";
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse -cat1)) {
    resultado = "cat1";
  } else {
    resultado = "os gatos trombam e o rato foge";
  }
  return resultado;
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
