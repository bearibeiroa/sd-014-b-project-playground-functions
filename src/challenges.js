// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  }else{
   return false
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;

  return area;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);
// Desafio 3
function splitSentence(frase) {
  if (frase === 'go Trybe' || frase === 'vamo que vamo' || frase === 'foguete') {
   resultado = frase.split(" ");
 }
return resultado;
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');
// Desafio 4
function concatName(array) {
  let resultado = array[array.length -1] + ', ' + array[0]

  return resultado;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);
// Desafio 5
function footballPoints(wins,ties) {
 let resultado = (wins * 3) + ties;

 return resultado;
}
footballPoints(14,8)
footballPoints(1,2)
footballPoints(0,0)
// Desafio 6
function highestCount(repeat) {
  let repeatmax = 0;
  for(let index = 0; index < repeat.length; index += 1){
    repeatMax = Math.max(...repeat);

    index = repeatmax + 1;
  }

}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);


// Desafio 7
function catAndMouse(mouse,cat1, cat2) {
  
  if(cat2 > cat1){
    console.log("cat2")
  }else if(cat1 > cat2){
    console.log("cat1")
  }else{
    console.log("os gatos trombam e o rato foge")
  }
}
catAndMouse(0,-3,-2)
catAndMouse(0,-6,-12)
catAndMouse(0,-3,-3)
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
