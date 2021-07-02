// Desafio 1
function compareTrue(nun1, nun2) {
  if(nun1 === true && nun2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return(base*height)/2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ") 
}

// Desafio 4
function concatName(string) {
  return string[string.length-1] + ", " + string[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numbers) {
let higherNumber = Math.max.apply(null, numbers);
let theAmount = 0;
for(let index = 0; index < numbers.length; index++){
  if(higherNumber === numbers[index])
  theAmount += 1;
}
return theAmount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winCat1 = Math.abs(cat1 - mouse);
  let winCat2 = Math.abs(cat2 - mouse);
    if(winCat1 < winCat2){
      return "cat1"
    } if(winCat2 < winCat1){
      return "cat2"
    } if(winCat1 === winCat2){
      return "os gatos trombam e o rato foge"
    }
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (const key in numbers) {
    if (numbers[key] % 15 === 0) {
      array.push('fizzBuzz');
    } else if (numbers[key] % 5 === 0) {
      array.push('buzz');
    } else if (numbers[key] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/gi, '1');
  string = string.replace(/e/gi, '2');
  string = string.replace(/i/gi, '3');
  string = string.replace(/o/gi, '4');
  string = string.replace(/u/gi, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/gi, 'a');
  string = string.replace(/2/gi, 'e');
  string = string.replace(/3/gi, 'i');
  string = string.replace(/4/gi, 'o');
  string = string.replace(/5/gi, 'u');
  return string;
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
