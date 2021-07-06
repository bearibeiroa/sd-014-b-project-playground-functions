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
// Pesquisei sobre a função split nesse site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
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
function highestCount(array) {
  let biggestNumber = array[0];
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber < array[index]) {
      biggestNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
// como precisava do valor absoluto recorri a funcao Math.abs pesquisada nesse site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
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
function encode(string) {
  let result = '';
  for (let index of string) {
    if (index === 'a') {
      result +='1';
    } else if (index === 'e') {
      result += '2';
    } else if (index === 'i') {
      result += '3';
    } else if (index === 'o') {
      result += '4';
    } else if (index === 'u') {
      result += '5';
    } else {
      result += index;
    }
  }
  return result;
}
function decode(string) {
  let result = '';
  for (let index of string) {
    if (index === '1') {
      result += 'a';
    } else if (index === '2') {
      result += 'e';
    } else if (index === '3') {
      result += 'i';
    } else if (index === '4') {
      result += 'o';
    } else if (index === '5') {
      result += 'u';
    } else {
      result += index;
    }
  }
  return result;
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
