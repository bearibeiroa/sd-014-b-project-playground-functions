// Desafio 1
function compareTrue(name1, name2) {
  if (name1 === true && name2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(str) {
  let strSeparate = str.split(' ');
  return strSeparate;
}

// Desafio 4
function concatName(array) {
  let namesArray = array[array.length - 1] + ', ' + array[0];
  return namesArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumber) {
  let result = 0;
  let maxNumber = Math.max(...arrayNumber);

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === maxNumber) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let x = Math.abs(cat1 - mouse);
  let y = Math.abs(cat2 - mouse);

  if (x === y) {
    return "os gatos trombam e o rato foge";
  } else if (x < y) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let x = array.map(function(n){
    if (n % 3 === 0 && n % 5 === 0) {
      return 'fizzbuzz';
    } else if (n % 5 === 0) {
      return 'buzz';
    } else if (n % 3 === 0) {
      return 'fizz';
    } else {
      return 'bug!';
    }
  });
  return x;

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
