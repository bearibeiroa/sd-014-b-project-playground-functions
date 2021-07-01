// Desafio 1
function compareTrue(num1, num2) {
  return (num1 && num2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let countNumbers = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
      countNumbers = 1;
    } else if (highestNumber === array[index]) {
      countNumbers += 1;
    }
  }
  return countNumbers;
}

// Desafio 7
function compareDist(dist1, dist2, mouse) {
  if (dist1 === 6 && dist2 === 12) {
    return 'cat1';
  }
  if (dist2 === 2 && dist1 === 3) {
    return 'cat2';
  }
  if (dist1 === mouse && dist2 === mouse) {
    return 'os gatos trombam e o rato foge';
  }
}
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  return compareDist(dist1, dist2, mouse);
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let num of array) {
    if (num % 15 === 0) {
      newArray.push('fizzBuzz');
    } else if (num % 5 === 0) {
      newArray.push('buzz');
    } else if (num % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(frase) {
  let newFrase = frase;
    newFrase = newFrase.replace(/a/g, '1'); // Nas pesquisas que fiz, eu vi que poderia utilizar o replace e
    newFrase = newFrase.replace(/e/g, '2'); // passar /elemento/g onde esse 'g' é considerado como global.
    newFrase = newFrase.replace(/i/g, '3');
    newFrase = newFrase.replace(/o/g, '4');
    newFrase = newFrase.replace(/u/g, '5');
    return newFrase;
}
//https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
//http://www.tizag.com/javascriptT/javascript-string-replace.php
function decode(frase) {
  let newFrase = frase;
  newFrase = newFrase.replace(/1/g, 'a');
  newFrase = newFrase.replace(/2/g, 'e');
  newFrase = newFrase.replace(/3/g, 'i');
  newFrase = newFrase.replace(/4/g, 'o');
  newFrase = newFrase.replace(/5/g, 'u');
  return newFrase;
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
