// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringValue) {
  return stringValue.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${names.pop()}, ${names.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  return wins * winPoints + ties * tiePoints;
}

// Desafio 6
// Consultei o MDN Web Docs para implementar a 'arrow function expressions' do ES2015 e poder usar a função sort para números inteiros.
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function highestCount(array) {
  array = array.sort((a, b) => a - b);
  function isHighest(value) {
    return value === array[array.length - 1];
  }
  return array.filter(isHighest).length;
}

// Desafio 6, outra possibilidade
// function highestCount(array) {
//   function isHighest(value) {
//     return value === Math.max.apply(null, array);
//   }
//   return array.filter(isHighest).length;
// }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 + cat2) / 2 === mouse) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse + cat1 < mouse + cat2) {
    return 'cat1';
  }
  if (mouse + cat1 > mouse + cat2) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      result.push('fizzBuzz');
    } else if (element % 3 === 0) {
      result.push('fizz');
    } else if (element % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  });
  return result;
}

// Desafio 9
function encode(stringValue) {
  for (let index = 0; index < stringValue.length; index += 1) {
    stringValue = stringValue.replace('a', '1');
    stringValue = stringValue.replace('e', '2');
    stringValue = stringValue.replace('i', '3');
    stringValue = stringValue.replace('o', '4');
    stringValue = stringValue.replace('u', '5');
  }
  return stringValue;
}
function decode(stringValue) {
  for (let index = 0; index < stringValue.length; index += 1) {
    stringValue = stringValue.replace('1', 'a');
    stringValue = stringValue.replace('2', 'e');
    stringValue = stringValue.replace('3', 'i');
    stringValue = stringValue.replace('4', 'o');
    stringValue = stringValue.replace('5', 'u');
  }
  return stringValue;
}

// Usando global e ignore com replace()
// link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// function encode(stringValue) {
//   stringValue = stringValue.replace(/a/gi, '1');
//   stringValue = stringValue.replace(/e/gi, '2');
//   stringValue = stringValue.replace(/i/gi, '3');
//   stringValue = stringValue.replace(/o/gi, '4');
//   stringValue = stringValue.replace(/u/gi, '5');
//   return stringValue;
// }
// function decode(stringValue) {
//   stringValue = stringValue.replace(/1/gi, 'a');
//   stringValue = stringValue.replace(/2/gi, 'e');
//   stringValue = stringValue.replace(/3/gi, 'i');
//   stringValue = stringValue.replace(/4/gi, 'o');
//   stringValue = stringValue.replace(/5/gi, 'u');
//   return stringValue;
// }

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
