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
function splitSentence(frase) {
  let separada = frase.split(' ');
  return separada;
}

// Desafio 4
function concatName(allNames) {
  let lastName = allNames[allNames.length - 1];
  let firstName = allNames[0];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(valorarray) {
  let maiorNumeroArray = valorarray[0];
  let qtidadeNumeroMaior = 0;
  for (let index = 0; index < valorarray.length; index += 1) {
    if (valorarray[index] > maiorNumeroArray) {
      maiorNumeroArray = valorarray[index];
    }
  }
  for (let i = 0; i < valorarray.length; i += 1) {
    if (maiorNumeroArray === valorarray[i]) {
      qtidadeNumeroMaior += 1;
    }
  }
  return qtidadeNumeroMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ratoXgato1 = (mouse - cat1);
  let ratoXgato2 = (mouse - cat2);
  if (ratoXgato1 < 0) {
    ratoXgato1 = (ratoXgato1 * (-1));
  } else if (ratoXgato2 < 0) {
    ratoXgato2 = ratoXgato2 * (-1);
  }
  if (ratoXgato1 < ratoXgato2) {
    return 'cat1';
  } else if (ratoXgato1 === ratoXgato2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayFzBz) {
  let arrayFzBzNomes = [];
  for (let index = 0; index < arrayFzBz.length; index += 1) {
    if (arrayFzBz[index] % 5 === 0 && arrayFzBz[index] % 3 === 0) {
      arrayFzBzNomes.push('fizzBuzz');
    } else if (arrayFzBz[index] % 5 === 0) {
      arrayFzBzNomes.push('buzz');
    } else if (arrayFzBz[index] % 3 === 0) {
      arrayFzBzNomes.push('fizz');
    } else arrayFzBzNomes.push('bug!');
  }
  return arrayFzBzNomes;
}

// Desafio 9
function encode(mensagem) {
  let letraNumero = 2;
  for (let index = 0; index < mensagem.length; index += 1) {
    if (mensagem[index] === 'a') {
      mensagem[index] = 1;
    } else if (mensagem[index] === 'e') {
      mensagem[index] = letraNumero;
    }
  }
  return mensagem;
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
