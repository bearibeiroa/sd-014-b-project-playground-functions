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

function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4

function concatName(frase) {
  let a = frase[frase.length - 1];
  let b = frase[0];
  return (a + ', ' + b);
}

// Desafio 5

function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6

function highestCount(num) {
  let maior = -1;
  let count = 0;
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > maior) {
      maior = num[index];
    }
  }
  for (let index = 0; index < num.length; index += 1) {
    if (maior === num[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;

  if (dist1 < 0) {
    dist1 += * -1;
  }

  if (dist2 < 0) {
    dist2 += * -1;
  }

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } else if (dist1 > dist2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8

function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3) === 0 && (numbers[index] % 5) === 0) {
      result.push('fizzBuzz');
    } else if ((numbers[index] % 3) === 0) {
      result.push('fizz');
    } else if ((numbers[index] % 5) === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9

function encode(palavra) {
  let result = '';
  for (let index of palavra) {
    switch (index) {
    case 'a':
      result += '1';
      break;
    case 'e':
      result += '2';
      break;
    case 'i':
      result += '3';
      break;
    case 'o':
      result += '4';
      break;
    case 'u':
      result += '5';
      break;
    default:
      result += index;
      break;
    }
  }
  return result;
}

function decode(palavra) {
  let result = '';
  for (let index of palavra) {
    switch (index) {
    case '1':
      result += 'a';
      break;
    case '2':
      result += 'e';
      break;
    case '3':
      result += 'i';
      break;
    case '4':
      result += 'o';
      break;
    case '5':
      result += 'u';
      break;
    default:
      result += index;
      break;
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
