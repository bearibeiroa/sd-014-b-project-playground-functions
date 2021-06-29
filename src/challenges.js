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
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia1 < 0) {
    distancia1 = distancia1 * -1;
  }
  if (distancia2 < 0) {
    distancia2 = distancia2 * -1;
  }
  if (distancia1 === distancia2) {
    return "os gatos trombam e o rato foge";
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}


// Desafio 8
function fizzBuzz(numbers) {
  let myArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (((numbers[index] % 3) === 0) && ((numbers[index] % 5) === 0)) {
      myArray.push("fizzBuzz");
    } else if ((numbers[index] % 3) === 0) {
      myArray.push("fizz");
    } else if ((numbers[index] % 5) === 0) {
      myArray.push("buzz");
    } else {
      myArray.push("bug!");
    }
  }
  return myArray;
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
