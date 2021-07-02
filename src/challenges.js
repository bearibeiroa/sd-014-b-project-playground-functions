// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let result = (base * altura) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = string.split(' ');

  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let index = arrayString.length - 1;
  let resultString = `${arrayString[index]}, ${arrayString[0]}`;

  return resultString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let ptsWins = wins * 3;
  let ptsTies = ties * 1;

  return ptsWins + ptsTies;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui [9, 1, 2, 3, 9, 5, 7]
  let maiorNumero = Math.max(...numbers);
  let cont = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maiorNumero) {
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 > mouse) {
    cat1 -= mouse;
  } else {
    cat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    cat2 -= mouse;
  } else {
    cat2 = mouse - cat2;
  }
  if (cat1 > cat2) {
    return 'cat2';
  } else if (cat1 < cat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  // seu código aqui
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
      arrayNumber[index] = 'fizzBuzz';
    } else if (arrayNumber[index] % 3 !== 0 && arrayNumber[index] % 5 !== 0) {
      arrayNumber[index] = 'bug!';
    } else if (arrayNumber[index] % 3 === 0) {
      arrayNumber[index] = 'fizz';
    } else {
      arrayNumber[index] = 'buzz';
    }
  }

  return arrayNumber;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  for (let vogal of string) {
    switch (vogal) {
      case 'a':
        string = string.replace('a', '1');
        break;
      case 'e':
        string = string.replace('e', '2');
        break;
      case 'i':
        string = string.replace('i', '3');
        break;
      case 'o':
        string = string.replace('o', '4');
        break;
      case 'u':
        string = string.replace('u', '5');
        break;
      default:
        break;
    }
  }

  return string;
}

function decode(string) {
  // seu código aqui
  for (let number of string) {
    switch (number) {
     case '1': 
        string = string.replace('1', 'a');
        break;
      case '2':
        string = string.replace('2', 'e');
        break;
      case '3':
        string = string.replace('3', 'i');
        break;
      case '4':
        string = string.replace('4', 'o');
        break;
      case '5':
        string = string.replace('5', 'u');
        break;
    }
  }

  return string;
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
