// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 && bool2 == true){
    return true;
  }else{
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(phrase) {
  let arrayOfStrings = [];
  let currentChar = '';
  let currentWord = '';
  for (let i = 0; i < phrase.length; i += 1) {
    currentChar = phrase[i];
    if (currentChar == ' ') {
      arrayOfStrings.push(currentWord); 
      currentWord = '';
    } else {
      currentWord = currentWord + currentChar;
    }
  }
  arrayOfStrings.push(currentWord); 

  return arrayOfStrings;
}


// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}


// Desafio 6
function highestCount(numbers) { // [9, 1, 2, 3, 9, 5, 7]
  let highestNum = 0;
  let highestNumFrequency = 0;
  let currentNumFrequency = 0;
  let currentNum = 0;

  for(let i = 0; i < numbers.length; i += 1){
    currentNum = numbers[i]; //9
    for(let j = 0; j < numbers.length; j += 1){
      if (currentNum == numbers[j]){
        currentNumFrequency += 1;
      }
    } // 2
    if ( i == 0 || currentNum > highestNum){
      highestNum = currentNum;
      highestNumFrequency = currentNumFrequency;
    }
    currentNumFrequency = 0;
  }
  return highestNumFrequency;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = 0;
  let distance2 = 0;

  if(cat1 > mouse){
    distance1 = cat1 - mouse;
  }else{
    distance1 = mouse - cat1;
  }

  if(cat2 > mouse){
    distance2 = cat2 - mouse;
  }else{
    distance2 = mouse - cat2;
  }

  if(distance1 < distance2){
    return 'cat1';
  }else if(distance1 > distance2){
    return 'cat2';
  }else{
    return "os gatos trombam e o rato foge";
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
