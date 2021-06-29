// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(phrase) {
  let phrase2 = phrase.split(' ');
  return phrase2;
}

// Desafio 4
function concatName(arrayStrings) {
  let result = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(arrays) {
  let maxNumber = Math.max(...arrays);
  let result = 0;
  for (let index = 0; index < arrays.length; index += 1) {
    if (arrays[index] === maxNumber) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse);
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let result = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNumber[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(stringsInput) {
  let arrays = stringsInput.split('');
  for (let index = 0; index < arrays.length; index += 1) {
    switch (arrays[index]) {
    case 'a':
      arrays[index] = '1';
      break;
    case 'e':
      arrays[index] = '2';
      break;
    case 'i':
      arrays[index] = '3';
      break;
    case 'o':
      arrays[index] = '4';
      break;
    case 'u':
      arrays[index] = '5';
      break;
    default:
      break;
    }
  }
  return arrays.join('');
}
function decode(stringsInput) {
  let arrays = stringsInput.split('');
  for (let index = 0; index < arrays.length; index += 1) {
    switch (arrays[index]) {
    case '1':
      arrays[index] = 'a';
      break;
    case '2':
      arrays[index] = 'e';
      break;
    case '3':
      arrays[index] = 'i';
      break;
    case '4':
      arrays[index] = 'o';
      break;
    case '5':
      arrays[index] = 'u';
      break;
    default:
      break;
    }
  }
  return arrays.join('');
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
