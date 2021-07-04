// Desafio 1
function compareTrue(value1, value2) {
  return(value1 && value2)
}
console.log(compareTrue(false,true))

// Desafio 2
function calcArea(triangleBase, triangleHeigth) {
  let base = triangleBase;
  let heigth = triangleHeigth;
  let triangleArea = base * heigth / 2
  return triangleArea;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let sentence = string;
  let arrayOfStrings = sentence.split(' ');
  return(arrayOfStrings)
}
console.log(splitSentence('Olá pessoas eu sou Lucas'))

// Desafio 4
function concatName(arrayOfStrings) {
  let mixOfStrings = arrayOfStrings;
  return(arrayOfStrings[arrayOfStrings.length-1] + ', ' + arrayOfStrings[0])
}
console.log(concatName(['Gabriel', 'Angus', 'Malcon', 'Eddie', 'Bryan']))

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints
  return (totalPoints)
}
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(listNumbers) {
  let numbers = listNumbers;
  let highNumber = 0;
  let countOfHighNumber = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > numbers[0]) {
       highNumber = numbers[index]
    }
    if (numbers[index] > highNumber) {
      highNumber = numbers[index]
    }
  } 
  for (let count = 0; count < numbers.length; count++) { 
    if (numbers[count] === highNumber) {
     countOfHighNumber += 1
    }
  } 
  return (countOfHighNumber)
} 
console.log(highestCount([0,0,0]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position < cat2Position) {
    return('cat1')
  } else if (cat2Position < cat1Position) {
    return('cat2')
  } else {
    return('os gatos trombam e o rato foge')
  }
}
console.log(catAndMouse(1, 0, 2))  
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
}
