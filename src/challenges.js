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
  let fizzBuzz = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      fizzBuzz.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
