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
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return (array[array.length-1]+', '+array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return((wins*3)+(ties));
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let highestCounter = 0;
  highestNumber = Math.max.apply(null, array);

  for(let index = 0; index < array.length; index += 1){
    if(highestNumber === array[index]){
      highestCounter += 1;
    }
  }

  return highestCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = cat1 - mouse;
  let disCat2 = cat2 - mouse;
  disCat1 = Math.abs(disCat1);
  disCat2 = Math.abs(disCat2);

  if(disCat1 < disCat2){
    return 'cat1';
  } else if(disCat2 < disCat1){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrResposta = [];
  for(index = 0; index < array.length; index += 1){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      arrResposta.push('fizzBuzz');
    } else if (array[index] % 3 === 0){
      arrResposta.push('fizz');
    } else if (array[index] % 5 === 0){
      arrResposta.push('buzz');
    } else {
      arrResposta.push('bug!');
    }
  }
  return arrResposta;
}

// Desafio 9
function encode(word) {
  let splitWord = word.split("");
  for(let index = 0; index < splitWord.length; index += 1){
    
    switch(splitWord[index]){
      case 'a':
        splitWord[index] = '1';
      break;
      case 'e':
        splitWord[index] = '2';
      break;
      case 'i':
        splitWord[index] = '3';
      break;
      case 'o':
        splitWord[index] = '4';
      break;
      case 'u':
        splitWord[index] = '5';
      break;
    } 
  }
  let resposta = splitWord.join("");
  return resposta;
}
function decode(word) {
  let splitWord = word.split("");
  for(let index = 0; index < splitWord.length; index += 1){
    
    switch(splitWord[index]){
      case '1':
        splitWord[index] = 'a';
      break;
      case '2':
        splitWord[index] = 'e';
      break;
      case '3':
        splitWord[index] = 'i';
      break;
      case '4':
        splitWord[index] = 'o';
      break;
      case '5':
        splitWord[index] = 'u';
      break;
    } 
  }
  let resposta = splitWord.join('');
  return resposta;
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
