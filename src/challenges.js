// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let listaPalavras = [];
  let reservaPalavras = '';
  string += ' ';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      reservaPalavras += string[i];
    } else {
      listaPalavras.push(reservaPalavras);
      reservaPalavras = '';
    }
  }
  return listaPalavras;
}

// Desafio 4
function concatName(nomes) {
  let primeiroItem;
  let ultimoItem;
  for (let i = 0; i < nomes.length; i += 1) {
    if (i === 0) {
      primeiroItem = nomes[i];
    } else if (i === (nomes.length - 1)) {
      ultimoItem = nomes[i];
    }
  }
  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = numbers[0];
  let quantidadeVezes = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNumero < numbers[i]) {
      maiorNumero = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNumero === numbers[i]) {
      quantidadeVezes += 1;
    }
  }
  return quantidadeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1;
  let distanciaCat2;
  let result;
  if (cat1 < mouse) {
    distanciaCat1 = mouse - cat1;
  } else {
    distanciaCat1 = cat1 - mouse;
  }
  if (cat2 < mouse) {
    distanciaCat2 = mouse - cat2;
  } else {
    distanciaCat2 = cat2 - mouse;
  }
  if (distanciaCat1 < distanciaCat2) {
    result = 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let returnFizzBuzz = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      returnFizzBuzz.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      returnFizzBuzz.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      returnFizzBuzz.push('buzz');
    } else {
      returnFizzBuzz.push('bug!');
    }
  }
  return returnFizzBuzz;
}

// Desafio 9
function encode(text) {
  let textCode = '';
  for (let i = 0; i < text.length; i += 1) {
    switch (text[i]) {
    case 'a':
      textCode += 1;
      break;
    case 'e':
      textCode += 2;
      break;
    case 'i':
      textCode += 3;
      break;
    case 'o':
      textCode += 4;
      break;
    case 'u':
      textCode += 5;
      break;
    default:
      textCode += text[i];
    }
  }
  return textCode;
}

function decode(text) {
  let textUncode = '';
  for (let i = 0; i < text.length; i += 1) {
    switch (text[i]) {
    case '1':
      textUncode += 'a';
      break;
    case '2':
      textUncode += 'e';
      break;
    case '3':
      textUncode += 'i';
      break;
    case '4':
      textUncode += 'o';
      break;
    case '5':
      textUncode += 'u';
      break;
    default:
      textUncode += text[i];
    }
  }
  return textUncode;
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
