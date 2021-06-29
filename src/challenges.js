// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let split = str.split(' ');
  return split;
}

// Desafio 4
function concatName(vetor) {
  let posicaoFinal = vetor[(vetor.length - 1)];
  let posicaoInicial = vetor[0];
  let concatenado = posicaoFinal.concat(', ' + posicaoInicial);
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;  
}

// Desafio 6
function highestCount(numeros) {
  let maior = -3;
  for (i of numeros){
    if (i >= maior){
      maior = i;
    }
  }
  let cont = 0;
  for (j of numeros){
    if (j === maior){
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dmc1 = Math.abs(mouse - cat1);
  let dmc2 = Math.abs(mouse - cat2);
  if (dmc1 > dmc2){
    return 'cat2';
  } else if (dmc1 < dmc2){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let vetor = [];
  for (i of array){
    if (i%3 === 0 && i%5 === 0){
      vetor.push('fizzBuzz');
    } else if (i%3 === 0 && i%5 !== 0){
      vetor.push('fizz');
    } else if (i%3 !== 0 && i%5 === 0){
      vetor.push('buzz');
    } else {
      vetor.push('bug!');
    }
  }
  return vetor;
}

// Desafio 9
function encode(array) {
  let encodedArray = '';
  for (let i in array){
    switch (array[i]){
      case 'a':
        encodedArray += '1';
        break;
      case 'e':
        encodedArray += '2';
       break;
      case 'i':
        encodedArray += '3';
        break;
      case 'o':
        encodedArray += '4';
       break;
      case 'u':
        encodedArray += '5';
        break; 
      default:
        encodedArray += array[i];
    } 
 }
 return encodedArray;
}

function decode(array) {
  let decodedArray = '';
  for (let i in array){
    switch (array[i]){
      case '1':
        decodedArray += 'a';
        break;
      case '2':
        decodedArray += 'e';
       break;
      case '3':
        decodedArray += 'i';
        break;
      case '4':
        decodedArray += 'o';
       break;
      case '5':
        decodedArray += 'u';
        break; 
      default:
        decodedArray += array[i];
    } 
 }
 return decodedArray;
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
