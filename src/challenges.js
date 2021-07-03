// Desafio 1
function compareTrue(a, b) {
  let compare = true;
  if (a && b === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let palavra = string.split(' ');
  return palavra;
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  let concatArray = ultimoNome + ', ' + primeiroNome;
  return concatArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let menorNumero = [0];
  for (let i in array) {
    if (array[i] < menorNumero[0]) {
      menorNumero[0] = array[i];
    }
  }
  let maiorNumero = [menorNumero[0]];
  let count = 0;
  for (let i in array) {
    if (array[i] > maiorNumero[0]) {
      maiorNumero[0] = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === maiorNumero[0]){
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let maisPerto;
  let distanciaPrimeiro = cat1 - mouse;
  if (distanciaPrimeiro < 0) {
    distanciaPrimeiro = -distanciaPrimeiro;
  }
  let distanciaSegundo = cat2 - mouse;
  if (distanciaSegundo < 0) {
    distanciaSegundo = -distanciaSegundo;
  }
  if (distanciaPrimeiro < distanciaSegundo) {
    maisPerto = 'cat1';
  } else if (distanciaPrimeiro === distanciaSegundo) {
    maisPerto = 'os gatos trombam e o rato foge';
  } else {
    maisPerto = 'cat2';
  }
  return maisPerto;
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      array[i] = 'bug!';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let valor = ['1', '2', '3', '4', '5'];
  let letra = string.split('');
  for (let i = 0; i < letra.length; i += 1) {
    for (let j = 0; j < vogais.length; j += 1) {
      if (letra[i] === vogais[j]) {
        letra[i] = valor[j];
      }
    }
  }
  return letra.join('');
}

function decode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let valor = ['1', '2', '3', '4', '5'];
  let letra = string.split('');
  for (let i = 0; i < letra.length; i += 1) {
    for (let j = 0; j < vogais.length; j += 1) {
      if (letra[i] === valor[j]) {
        letra[i] = vogais[j];
      }
    }
  }
  return letra.join('');
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
