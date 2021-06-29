// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arrayFrase = frase.split(' ');

  return arrayFrase;
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length -1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  //Faz adição dos pontos das vitórias
  for(let indexWins = 1; indexWins <= wins; indexWins += 1) {
    points += 3;
  }

  //Faz adição dos pontos dos empates
  for(let indexTies = 1; indexTies <= ties; indexTies += 1) {
    points += 1;
  }

  //Retorna o número de pontos de acordo com vitórias e empates
  return points;
}

// Desafio 6
function highestCount(vetor) {
  //Verifica qual é o maior número
  let maiorNumero = 0;

  for(let count = 0; count < vetor.length; count += 1) {
    let guardarNumero = vetor[count];

    if(vetor[count] > 0) {
      if(guardarNumero > maiorNumero) {
        maiorNumero = guardarNumero;
      }
    } else if(vetor[count] < 0){
      if(guardarNumero < maiorNumero) {
        maiorNumero = guardarNumero;
      }
    }

  }

  //Verifica quantas vezes o maior numero aparece

  let countNumber = 0;

  for(let index = 0; index < vetor.length; index += 1) {
    if(vetor[index] == maiorNumero) {
      countNumber += 1;
    }
  }

  //Retorna a quantidade de vezes que o maior numero aparece
  return countNumber;

}

console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //Calcula distancia entre os gatos e o rato e transforma em positivo qualquer numero
  //Para não ter perigo de dar número negativo
  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);

  if(distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if(distanceCat2 < distanceCat1){
    return 'cat2';
  } else if(distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge';
  };

}

console.log(catAndMouse(1, 3, 3));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
