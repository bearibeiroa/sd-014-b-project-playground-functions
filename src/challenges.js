const { techList } = require("./challenges2");

// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  }

  else {
     return false
    }
}


// Desafio 2
function calcArea(base,height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ")
}

// Desafio 4
function concatName(indexName) {
  let primeiro = indexName[0];
  let ultimo = indexName[indexName.length - 1];
  let retorno = ultimo.concat(', ', primeiro);
  return retorno
}
// Desafio 5
function footballPoints(wins,ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;

}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}



// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(texto) {
let palavra = "";
palavra = texto.replace(/a/g, "1");
palavra = palavra.replace(/e/g, "2");
palavra = palavra.replace(/i/g, "3");
palavra = palavra.replace(/o/g, "4");
palavra = palavra.replace(/u/g, "5");
return palavra;
}
function decode(texto) {
let palavra = "";
palavra = texto.replace(/1/g, "a");
palavra = palavra.replace(/2/g, "e");
palavra = palavra.replace(/3/g, "i");
palavra = palavra.replace(/4/g, "o");
palavra = palavra.replace(/5/g, "u");
return palavra;
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
  splitSentence,};