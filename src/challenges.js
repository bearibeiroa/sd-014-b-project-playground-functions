// Desafio 1
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  if (valorUm === true && valorDois === true) return true;
  else return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let split = sentence.split(' ');
  return split;
}

// Desafio 4
function concatName(elements) {
  // seu código aqui
  let lastItem = elements[elements.length - 1];
  let phrase = lastItem + ', ' +elements[0] ;
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let qtdWins = wins * 3;
  let qtdTies = ties * 1;
  let points = qtdWins + qtdTies;
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let numberOfTimes = 0;
  let biggerNumber = numbersArray.reduce(function(previous, current){
   return Math.max(previous, current);
 });

 for(index = 0; index < numbersArray.length; index +=1){
   let currentNumber = numbersArray[index];

   if(currentNumber === biggerNumber){
     numberOfTimes += 1;
   };
 };
 return numberOfTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  distanceOfCat1 = Math.abs(mouse - cat1);
  distanceOfCat2 = Math.abs(mouse - cat2);

  if (distanceOfCat1 < distanceOfCat2) {
    return 'cat1';
  }
  else if (distanceOfCat2 < distanceOfCat1) {
    return 'cat2';
  }
  else if (distanceOfCat1 === distanceOfCat2) {
    return 'os gatos trombam e o rato foge';
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
