// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
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

return string.split(" ")

}

// Desafio 4
function concatName(array) {
  let lastWord = array[array.length - 1];
  let firstWord = array[0];
  let words = `${lastWord}, ${firstWord}`;
  return words;
}

// Desafio 5
function footballPoints(wins, ties) {
  return totalPoints = (wins * 3) + (ties * 1);
}

// Desafio 6
let array = [];
function highestCount(numbers) {
  let maiorNumero = numbers[0];
  let contagem = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
      maiorNumero = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoDis1 = Math.abs(cat1 - mouse);
  let gatoDis2 = Math.abs(cat2 - mouse);

  if (gatoDis1 > gatoDis2) {
    return 'cat2';
  }
  if (gatoDis1 < gatoDis2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(frase) {
  let mensagem = '';
  for (key of frase) {
    if (key === 'a') {
      key = '1';
    } else if (key === 'e') {
      key = '2';
    } else if (key === 'i') {
      key = '3';
    } else if (key === 'o') {
      key = '4';
    } else if (key === 'u') {
      key = '5';
    }
    mensagem += key;
  }
  return mensagem;
}
function decode(frase) {
  let mensagem = '';
  for (key of frase) {
    if (key === '1') {
      key = 'a';
    } else if (key === '2') {
      key = 'e';
    } else if (key === '3') {
      key = 'i';
    } else if (key === '4') {
      key = 'o';
    } else if (key === '5') {
      key = 'u';
    }
    mensagem += key;
  }
  return mensagem;
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
