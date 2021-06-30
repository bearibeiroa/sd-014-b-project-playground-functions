// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let split = sentence.split(" ");
  return split;
}

// Desafio 4
function concatName(name) {

  let firtsName = name[0];
  let lastName = name[name.length - 1];
  let space = ', ';
  let concat = lastName + space + firtsName;

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = Math.max(...arrayNumbers);
  let totalNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] === higherNumber) {
      totalNumber += 1;
    }
  }
  return totalNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);

  if (positionCat1 < positionCat2) {
    return 'cat1';
  }else if (positionCat2 < positionCat1) {
    return 'cat2';
  }else{
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
 let fizzBuzzBug = [];
 for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] % 3 === 0 && numbers[index] % 5 !==0) {
     fizzBuzzBug[index] = "fizz";
   }else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
     fizzBuzzBug[index] = "fizzBuzz";
   }else if (numbers[index] % 5 === 0 && numbers[index] % 3 !==0) {
     fizzBuzzBug[index] = "buzz";
   }else{
     fizzBuzzBug[index] = "bug!";
   } 
 }
 return fizzBuzzBug;
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
