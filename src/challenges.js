// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool == true && secondBool == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
let area = (base*height)/2;
return area;
console.log(area);
}

// Desafio 3    // método split. referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(arrayOfNames) {
  return (arrayOfNames[arrayOfNames.length - 1] + ", " + arrayOfNames[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + (ties));
}

// Desafio 6
function highestCount(numbers) {
let higherNum = numbers[0];
let quant = 0;
for (let counter = 0; counter < numbers.length; counter +=1){
  if (numbers[counter] > higherNum){
    higherNum = numbers[counter];
  }
}
for (let counter = 0; counter < numbers.length; counter +=1){
  if (higherNum === numbers[counter])
  quant +=1;}

return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;

  if (distancia1 < 0) {
    distancia1 = distancia1 *-1;

  }  if (distancia2 < 0) {
    distancia2 = distancia2 *-1;

  }  if (distancia1 === distancia2){

      return 'os gatos trombam e o rato foge';

  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
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
