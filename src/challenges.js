// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2 ? true : false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
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
  let highestValue = -Infinity;
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    if (highestValue < array[index]) {
      highestValue = array[index];
      count = 1;
    } else if (highestValue == array[index]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posCat1 = Math.abs(cat1 - mouse);
  let posCat2 = Math.abs(cat2 - mouse);
  
  if (posCat1 == posCat2) {
    return "os gatos trombam e o rato foge";
  } else if (posCat1 < posCat2) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 5 === 0 && element % 3 === 0) {
      newArray.push('fizzBuzz')
    } else if (element % 5 === 0) {
      newArray.push('buzz');
    } else if (element % 3 === 0) {
      newArray.push('fizz')
    } else {
      newArray.push('bug!')
    }
  }

  return newArray;
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
