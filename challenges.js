// Desafio 1
function compareTrue(num1, num2) {
  return num1 && num2;
}

// Desafio 2
function calcArea(base, height) {
let area = base*height/2;
return area;
}

// Desafio 3
// Este desafio foi baseado em informações do site: 
//www.w3schools.com/jsref/jsref_split.asp

function splitSentence(string) {
let arrayFrase = string.split (" ");
  return arrayFrase
}

// Desafio 4
function concatName(elementos) {
let arrayElementos = elementos[elementos.length -1] + ", " + elementos[0];
 return arrayElementos; 
}

// Desafio 5
function footballPoints(wins, ties) {
let vitórias = 3;
let empates = 1;
let totalPontos = (vitórias * wins) + (empates * ties)
 return totalPontos;
}

// Desafio 6
function highestCount(numbers) {
let vezesNumero = [];
let maiorNumero = numbers[0];

//encontrando o maior numéro 
for (let index = 1; index < numbers.length; index ++) {

if(numbers[index] > maiorNumero) {
  maiorNumero = numbers[index]
}
}

// vezes que o numero se repete
for (let repete = 0 ; repete < numbers.length; repete ++) {
if(numbers[repete] == maiorNumero) {
  vezesNumero.push(numbers[repete])
  }
}
return vezesNumero.length
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
