// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return (array[array.length-1]+', '+array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return((wins*3)+(ties));
}

// Desafio 6 [9, 1, 2, 3, 9]
function highestCount(array) {
  let highestNumber = 0;
  let highestCounter;
  for(let index = 0; index < array.length; index += 1){
    for(let indexB = 0; indexB < array.length; indexB += 1){
      if(array[index] > array[indexB]){
        highestNumber = array[index];
        highestCounter = 1;
      }
      indexB += 1;
      if(highestNumber === array[indexB]){
          highestCounter += 1;
      }
      indexB -= 1;
    }
  }
  return highestCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = cat1 - mouse;
  let disCat2 = cat2 - mouse;
  disCat1 = Math.abs(disCat1);
  disCat2 = Math.abs(disCat2);

  if(disCat1 < disCat2){
    return 'cat1';
  } else if(disCat2 < disCat1){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
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
