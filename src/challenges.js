// Desafio 1
function compareTrue(b1, b2) {
  return b1 === true && b2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let words = []
  let word = '';
  sentence += ' ';
  for(let count = 0; count < sentence.length; count++) {
    if(sentence[count] == ' ') {
    words.push(word);
    word ='';
    } else {
      word = word + sentence[count];
    }
  }
  return words;
}

// Desafio 4
function concatName(concat) {
  let str1 = concat[0]
  let str2 = concat[concat.length-1];
  let str3 = [];
  return (str2 +', '+str1);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3+ties);
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  contador = 0;
  for(let count =0; count < numeros.length;count++) {
    if (maior <numeros[count])
    {
      maior = numeros[count];
    }
  }
  for(let count =0; count< numeros.length; count++)
  {
    if( maior === numeros[count])
    {
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
