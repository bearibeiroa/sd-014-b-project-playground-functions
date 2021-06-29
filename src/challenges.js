// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      array.push(word);
      word = '';
    } else if (i === string.length - 1) {
      word += string[i];
      array.push(word);
    } else {
      word += string[i];
    }
  }
  return array;
}

// Desafio 4
function concatName(nomes) {
  let resultado = '';
  resultado = nomes[nomes.length - 1] + ', ' + nomes[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = numbers[0];
  let repeticoes = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNumero === numbers[i]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(cat1 - mouse);
  let distanceMouseCat2 = Math.abs(cat2 - mouse);
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  } else if (distanceMouseCat2 < distanceMouseCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      arrayResult.push('buzz');
    } else if (array[i] % 3 === 0) {
      arrayResult.push('fizz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  let finalString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      finalString += '1';
    } else if (string[i] === 'e') {
      finalString += '2';
    } else if (string[i] === 'i') {
      finalString += '3';
    } else if (string[i] === 'o') {
      finalString += '4';
    } else if (string[i] === 'u') {
      finalString += '5';
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}

function decode(string) {
  let finalString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      finalString += 'a';
    } else if (string[i] === '2') {
      finalString += 'e';
    } else if (string[i] === '3') {
      finalString += 'i';
    } else if (string[i] === '4') {
      finalString += 'o';
    } else if (string[i] === '5') {
      finalString += 'u';
    } else {
      finalString += string[i];
    }
  }
  return finalString;
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
