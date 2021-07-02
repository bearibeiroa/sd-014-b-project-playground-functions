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
  let maiorNumero = vetor[0];

  for (let count = 0; count < vetor.length; count += 1) {
    let guardarNumero = vetor[count];
    
    if(guardarNumero > maiorNumero) {
      maiorNumero = guardarNumero;
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

// Desafio 8
function fizzBuzz(vetor) {

  //Percorre o array
  for(let index = 0; index < vetor.length; index += 1) {

    //Verifica se o numero é divisivel por 3, 5, se é pelos dois ou nenhum
    if(vetor[index] % 3 === 0 && vetor[index] % 5 === 0) {
      vetor[index] = 'fizzBuzz';
    } else if(vetor[index] % 5 === 0){
      vetor[index] = 'buzz';
    } else if(vetor[index] % 3 === 0) {
      vetor[index] = 'fizz';
    } else {
      vetor[index] = 'bug!';
    }

  }

  return vetor;
}

// Desafio 9
function encode(value1) {
  let newValue = '';

  //Percorre a string que foi dividida e agora é um array
  for(let index = 0; index < value1.length; index += 1) {

    switch(value1[index].toLowerCase()){
      case 'a': 
        newValue += '1';
        break;
      case 'e':
        newValue += '2';
        break;
      case 'i':
        newValue += '3';
        break;
      case 'o':
        newValue += '4';
        break;
      case 'u':
        newValue += '5';
        break;

      default:
        newValue += value1[index];
        break;
    };

  }

  //Faz a junção de todos os itens do array 
  //let value1Join = splitValue.join(''); 

  return newValue;
}

console.log(encode('Abc'));



function decode(value) {
  /*let splitValue = value.split(''); */

  for(let indice = 0; indice < splitValue.length; indice += 1) {
    for(let key of split) {

    }

    /* if(splitValue[indice] === '1' && splitValue[indice] === splitValue[indice].toLowerCase()) {
      splitValue[indice] = 'a';
    } else if(splitValue[indice] === '2' && splitValue[indice] === splitValue[indice].toLowerCase()) {
      splitValue[indice] = 'e';
    } else if(splitValue[indice] === '3' && splitValue[indice] === splitValue[indice].toLowerCase()) {
      splitValue[indice] = 'i';
    } else if(splitValue[indice] === '4' && splitValue[indice] === splitValue[indice].toLowerCase()) {
      splitValue[indice] = 'o';
    } else if(splitValue[indice] === '5' && splitValue[indice] === splitValue[indice].toLowerCase()) {
      splitValue[indice] = 'u';
    }; */

  }

  let joinValue = splitValue.join('');
  return joinValue;
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
