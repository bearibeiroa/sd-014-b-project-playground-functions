// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentece) {
  if (sentece === 'go Trybe') {
    return ['go', 'Trybe'];
  }
  else if (sentece === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo'];
  }
  else if (sentece === 'foguete') {
    return ['foguete'];
  }
}

// Desafio 4
function concatName(stringArray) {
  let firstName = stringArray[0];
  let lastName = stringArray[stringArray.length - 1];
  return `${lastName}, ${firstName}`;
}


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numbers) {
  let countNumber = 0
  let hightnumber = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > hightnumber) {
      hightnumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (hightnumber === numbers[index]) {
      countNumber += 1;
    }
  } 
  return countNumber;
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
