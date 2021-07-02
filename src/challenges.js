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
  return (arrayName[arrayName.length -1] + ', ' + arrayName[0]);
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
  let distCat1 = Math.abs(cat1 - mouse)
  let distCat2 = Math.abs(cat2 - mouse)
  if (distCat1 < distCat2) {
    return 'cat 1';
  } if (distCat1 > distCat2) {
    return 'cat2';
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
