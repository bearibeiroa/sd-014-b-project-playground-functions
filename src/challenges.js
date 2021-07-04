// Desafio 1
function compareTrue(value1, value2) {
  return(value1 && value2)
}
console.log(compareTrue(false,true));

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
console.log(concatName(['Gabriel', 'Angus', 'Malcon', 'Eddie', 'Bryan']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints
  return (totalPoints)
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(listNumbers) {
  let highestNumber = Math.max.apply(null, listNumbers);
  let occurrence = 0;
  for (let index = 0; index < listNumbers.length; index += 1) {
    if (listNumbers[index] === highestNumber) {
      occurrence += 1
    }
  } return (occurrence) 
}   
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position < cat2Position) {
    return('cat1')
  } else if (cat2Position < cat1Position) {
    return('cat2')
  } else {
    return ('os gatos trombam e o rato foge')
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let fizzBuzzString = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      fizzBuzzString.push('fizzBuzz')
    } else if (arrayOfNumbers[index] % 3 === 0){
      fizzBuzzString.push('fizz')
    } else if (arrayOfNumbers[index] % 5 === 0) {
      fizzBuzzString.push('buzz')
    } else {
      fizzBuzzString.push('bug!')
    }
  } return (fizzBuzzString)
}
console.log(fizzBuzz([9, 25]))

// Desafio 9
function encode(string) {
  let phraseToEncode = string;
  phraseToEncode = phraseToEncode.replace(/a/g, '1')
  phraseToEncode = phraseToEncode.replace(/e/g, '2')
  phraseToEncode = phraseToEncode.replace(/i/g, '3')
  phraseToEncode = phraseToEncode.replace(/o/g, '4')
  phraseToEncode = phraseToEncode.replace(/u/g, '5')
  return(phraseToEncode)
}
console.log(encode('hi there'))

function decode(stringCoded) {
  let stringToDecode = stringCoded;
  stringToDecode = stringToDecode.replace(/1/g, 'a')
  stringToDecode = stringToDecode.replace(/2/g, 'e')
  stringToDecode = stringToDecode.replace(/3/g, 'i')
  stringToDecode = stringToDecode.replace(/4/g, 'o')
  stringToDecode = stringToDecode.replace(/5/g, 'u')
  return (stringToDecode)
}
console.log(decode("h3 th2r2"))

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
