// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = base*height/2;
  return result;
}

// Desafio 3
function splitSentence(param) {
  let arrSplit = param.split(' ');
  return arrSplit
}
/* Nota do aluno: Para fazer o desafio 3 pesquisei e achei um vídeo no youtube do canal @CodeVault que 
me ajudou a achar a função 'split'
source: 'https://www.youtube.com/watch?v=hTZmGihfU_w'
*/

// Desafio 4
function concatName(param1) {
  let lastName = param1[param1.length - 1];
  let firstName = param1[0];
  return lastName + ', ' + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacaoWins = wins * 3;
  let pontuacaoTies = ties * 1;
  let pontuacaoTotal = pontuacaoWins + pontuacaoTies;
  return pontuacaoTotal
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (highestNumber < numbers[index]) {
      highestNumber = numbers[index]
    }
  }
  for (let indice = 0; indice < numbers.length; indice += 1) {
    if (highestNumber === numbers[indice]) {
      contador += 1;
    }
  }
return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat2 < cat1) {
    return "cat2"
  }
  else if (cat1 === cat2 || (cat1 + cat2)/2 === mouse || (cat2 + cat1)/2 === mouse) {
    return "os gatos trombam e o rato foge"
  }
  else
    {
    return "cat1"
  }
}

// Desafio 8
function fizzBuzz(arrNum) {
  let arrReturn = [];
  for (let index = 0; index < arrNum.length; index += 1) {
  if (arrNum[index] % 3 === 0 && arrNum[index] % 5 === 0) {
    arrReturn.push('fizzBuzz')
  }
  else if (arrNum[index] % 3 === 0) {
    arrReturn.push('fizz')
  }
  else if (arrNum[index] % 5 === 0) {
    arrReturn.push('buzz')
  }
  else {
    arrReturn.push('bug!')
  }
}
  return arrReturn
}

// Desafio 9
function encode(umaString) {
  let arrCode = [];
  for (let index = 0; index < umaString.length; index += 1){
  switch(umaString[index]){
    case 'a':
      arrCode.push('1')
      break;

    case 'e':
      arrCode.push('2');
      break;
    
    case 'i':
      arrCode.push('3');
      break;
    
    case 'o':
      arrCode.push('4');
      break;
    
    case 'u':
      arrCode.push('5');
      break;

    default: 
      arrCode.push (umaString[index])
  }
  }
  return arrCode.join('')
}

function decode(outraString) {
  let arrCode2 = [];
  for (let index = 0; index < outraString.length; index += 1){
  switch(outraString[index]){
    case '1':
      arrCode2.push('a')
      break;

    case '2':
      arrCode2.push('e');
      break;
    
    case '3':
      arrCode2.push('i');
      break;
    
    case '4':
      arrCode2.push('o');
      break;
    
    case '5':
      arrCode2.push('u');
      break;

    default: 
      arrCode2.push (outraString[index])
  }
  }
  return arrCode2.join('')
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
