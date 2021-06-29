// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true){
    result = true;
  }
  return result;
}
// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ");
  return result;
}

// Desafio 4
function concatName(words) {
  let firstIndex = words[0]
  let lastIndex = words[words.length - 1];
  let result = lastIndex + ", " + firstIndex;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalWinsPoints = wins * 3;
  let result = totalWinsPoints + ties;
  return result;
}

// Desafio 6
function highestCount(numbersArray) {
  let counts = {}
  let highIndex = -Infinity;npm

  for (number of numbersArray){
    if (highIndex < number){
      highIndex = number;
    }
  }

  for(let i =0; i < numbersArray.length; i++){ 
      if (counts[numbersArray[i]]){
      counts[numbersArray[i]] += 1
      } else {
      counts[numbersArray[i]] = 1
      }
     }  
  return counts[highIndex];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let result = '';
 let dist1 = Math.abs(mouse - cat1);
 let dist2 = Math.abs(mouse - cat2);
 if (dist1 < dist2){
   result = 'cat1';
 }else if (dist1 > dist2){
   result = 'cat2';
 }  else{
  result = 'os gatos trombam e o rato foge';
 }
 return result;
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
