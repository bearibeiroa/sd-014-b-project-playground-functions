// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
   return true;
  } else {
   return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(frase) {
 let array = [];
 let word = '';
  for (index = 0; index < frase.length; index +=1){
    if (frase[index] === ' '){
      array.push(word);
      word = '';
    } else {
      word += frase[index];
    }   
  }
 array.push(word);
 word = '';
 return array;
}

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ', ' + array[0];
  }

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6 // 1 for para ver qual maior número e outro para o contador de repetição
function highestCount(array) {
 let posicao = 0;
 let contador = 0;
 let num = 0;
 // Esse for busca o maior número do array e armazena na let num.
  for (let index = 1; index < array.length; index += 1){
    if (array[posicao] <= array[index]){
      posicao = index;
      num = array[posicao];
    }
  } 
  // Esse for percorre o array contando quantas vezes o num repete.
  for (let index2 = 0; index2 < array.length; index2 += 1){
    if (array[index2] === num){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  let cat2Position = mouse - cat2;

  if (cat1Position < 0){
    cat1Position = -cat1Position;
  } else if (cat2Position < 0){
    cat2Position = -cat2Position;
  }

  if (cat1Position < cat2Position){
    return 'cat1'
  } else if (cat1Position > cat2Position){
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (i = 0; i < array.length; i += 1){
    if (array[i] % 3 === 0 && array[i] % 5 === 0){
      array[i] = 'fizzBuzz';
    } else if (array[i] % 5 === 0){
      array[i] = 'buzz';
    } else if (array[i] % 3 === 0){
      array[i] = 'fizz';
    } else {
      array[i] = 'bug!'
    }
  }
  return array;
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
