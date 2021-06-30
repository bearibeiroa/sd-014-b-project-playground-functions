// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let i = string.length - 1;
  let array = string[i];
  // Peguei a susgestão de Mairton para o erro de concatenação
  array += ', ';
  array += string[0];
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(string) {
  let biggestNumber = Math.max.apply(null, string);
  let counter = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (biggestNumber === string[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let result = '';
  if (cat1Distance > cat2Distance) {
    result = 'cat2';
  } else if (cat2Distance > cat1Distance) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(string) {
  let array = [];
  for (let index = 0; index < string.length; index += 1) {
    let div3 = string[index] % 3 === 0;
    let div5 = string[index] % 5 === 0;
    if (div3 && div5) {
      array.push('fizzBuzz');
    } else if (!div3 && div5) {
      array.push('buzz');
    } else if (!div5 && div3) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
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
