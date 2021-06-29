// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}

// Desafio 4
function concatName(word) {
  let firstItem = '';
  let lastItem = '';

  for (let index in word) {
    firstItem = word[0];
    lastItem = word[word.length - 1];
    return lastItem + ', ' + firstItem;
  }
}
// Desafio 5
function footballPoints(wins,ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints;
}


// Desafio 6
function highestCount(numbers) {
  let bigger = Math.max(...numbers);
  let countTimes = 0;
  
  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] === bigger){
      countTimes += 1;
    }
  }
  return countTimes;
}

// Desafio 7
function catAndMouse(positionMouse,positionCat1,positionCat2) {
  let distanceCat1 = positionCat1 - positionMouse;
  let distanceCat2 = positionCat2 - positionMouse;
  
  if(Math.abs(distanceCat1) < Math.abs(distanceCat2)){
    return 'cat1';
  }else if(Math.abs(distanceCat2) < Math.abs(distanceCat1)){
    return 'cat2';
  }else{
    return 'os gatos trombam e o rato foge';
  }
  
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      newArray.push('fizzBuzz');
    }else if(numbers[index] % 3 === 0){
      newArray.push('fizz');
    }else if(numbers[index] % 5 === 0 ){
      newArray.push('buzz');
    }else{
      newArray.push('bug!');
    }
  }
  return newArray;
}
fizzBuzz([2, 15, 7, 9, 45]);

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
