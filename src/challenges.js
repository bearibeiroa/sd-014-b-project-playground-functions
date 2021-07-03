// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let palavra = '';
  let sentenceSplited = [];
  for (let caracter in sentence) {
    if (sentence[caracter] !== ' ') {
      palavra += sentence[caracter];
      if (parseInt(caracter, 10) === sentence.length - 1) {
        sentenceSplited.push(palavra);
      }
    } else {
      sentenceSplited.push(palavra);
      palavra = '';
    }
  }
  return sentenceSplited;
}

// Desafio 4
function concatName(array) {
  let string = '';
  // template literals
  // corrige eslint Unexpected string concatenation
  string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }

  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pos1 = Math.abs(cat1 - mouse);
  let pos2 = Math.abs(cat2 - mouse);
  let msg = '';
  if (pos1 === pos2) {
    msg = 'os gatos trombam e o rato foge';
  } else if (pos1 < pos2) {
    msg = 'cat1';
  } else { msg = 'cat2'; }
  return msg;
}

// Desafio 8
function fizzBuzz(array) {
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else { array[index] = 'bug!'; }
  }
  return array;
}

// Desafio 9
function encode(texto) {
  let novoTexto = '';
  for (let index = 0; index < texto.length; index += 1) {
    switch (texto[index]) {
    case 'a':
      novoTexto += '1';
      break;
    case 'e':
      novoTexto += '2';
      break;
    case 'i':
      novoTexto += '3';
      break;
    case 'o':
      novoTexto += '4';
      break;
    case 'u':
      novoTexto += '5';
      break;
    default:
      novoTexto += texto[index];
    }
  }
  return novoTexto;
}

function decode(texto) {
  let novoTexto = texto;
  for (let i = 0; i < texto.length; i += 1) {
    novoTexto = novoTexto.replace('1', 'a');
    novoTexto = novoTexto.replace('2', 'e');
    novoTexto = novoTexto.replace('3', 'i');
    novoTexto = novoTexto.replace('4', 'o');
    novoTexto = novoTexto.replace('5', 'u');
  }
  return novoTexto;
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
