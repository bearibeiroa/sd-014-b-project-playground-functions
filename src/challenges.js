// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ',' + ' ' + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highNumber = Math.max.apply(null, array);
  let numberCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse < cat1 && mouse < cat2 && cat1=== cat2) {
    return 'os gatos trombam e o rato foge';
  } if (mouse < cat1 && cat1 < cat2) {
    return 'cat1';
  } {
    (mouse < cat1 && cat1 > cat2);
    return 'cat2';
  }
} 

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1){
    for (let index of array){
      if ((array[index] % 3 === 0)) {
      return 'fizz';
      } if ((array[index] % 5 === 0)) {
          return 'buzz';
      } if ((array[index] % 3 === 0) && (array[index] % 5 === 0)){
          return 'fizzBuzz';
      } else {
          return 'bug!';
      }    
    } 
 }
  
}console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
 
  
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
