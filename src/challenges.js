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
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let concatString = array[array.length - 1] + ', ' + array[0];

  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestNumberIndex = 0;
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[highestNumberIndex]) {
      highestNumberIndex = i;
    }
  }
  for (number of array) {
    if (number === array[highestNumberIndex]) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  cat1Distance = Math.abs(cat1Distance);
  let cat2Distance = cat2 - mouse;
  cat2Distance = Math.abs(cat2Distance);

  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }

  return newArray;
}

// Desafio 9
function encode(string) {
  let splittedString = string.split('');
  let newString = '';

  for (let letter of splittedString) {
    switch (letter) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += letter;
    }
  }
  return newString;
}

function decode(string) {
  let splittedString = string.split('');
  let newString = '';

  for (let letter of splittedString) {
    switch (letter) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
        newString += 'u';
        break;
      default:
        newString += letter;
    }
  }
  return newString;
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
