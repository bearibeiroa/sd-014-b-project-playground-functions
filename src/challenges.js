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
  let concatArray = ultimoNome + ", " + primeiroNome;
  return concatArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let contNumero = 0;
  let contRepetido = 0;
  let indexNumeroRepetido = 0;
    for (let i in array) {
        let verificaNumero = array[i];
        for (let j in array) {
            if (verificaNumero === array[j]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = i;
        }
        contNumero = 0;
    }
    return array[indexNumeroRepetido];
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let maisPerto;
  if ((cat1 - mouse) < (cat2 - mouse)) {
    maisPerto = 'cat1';
  } else if (cat1 === cat2) {
    maisPerto = 'os gatos trombam e o rato foge';
  } else {
    maisPerto = 'cat2';
  }
  return maisPerto;
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 3 === 0 && array [i] % 5 === 0) {
        array[i] = "fizzBuzz";
    } else if (array[i] % 3 !== 0 && array [i] % 5 !== 0) {
        array[i] = "bug!";
    } else if (array[i] % 3 === 0) {
        array[i] = "fizz";
    } else if (array[i] % 5 === 0) {
        array[i] = "buzz";
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let vogais = ['a', 'e', 'i', 'o' ,'u'];
  let valor = ['1', '2', '3', '4', '5'];
  let letra = string.split('');
  for (let i = 0; i < letra.length; i += 1) {
      for (let j = 0; j < vogais.length; j += 1) {
          if (letra[i] === vogais[j]) {
              letra[i] = valor[j];
          }
      }
  }
  return letra;
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
  return letra;
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
