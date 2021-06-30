// Desafio 1
function compareTrue(a, b) {
if(a === true && b === true){
 return true
}else{
  return false
}
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}


// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let lastWord = array[array.length - 1];
  let firstWord = array[0];
  let words = lastWord + ", " + firstWord;
  return words;
}

// Desafio 5
function footballPoints(wins, ties) {
  return totalPoints = (wins*3) +  (ties*1)
}

// Desafio 6
let array = [];
function highestCount(numbers) {
  let maiorNumero = numbers[0];
  let contagem = 0;
    for (let index = 0; index < numbers.length; index += 1){
      if (numbers[index] > maiorNumero){
       maiorNumero = numbers[index]
 }
}
    for (let index = 0; index < numbers.length; index += 1){
      if (numbers[index] === maiorNumero){
        contagem += 1;
 }
}
  return contagem;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let gatoDis1 = Math.abs(cat1 - mouse)
  let gatoDis2 = Math.abs(cat2 - mouse)

  if (gatoDis1 > gatoDis2){
      return 'cat2'
  }
  else if (gatoDis1 < gatoDis2){
      return 'cat1'
  }
  else {
      return "os gatos trombam e o rato foge"
  }
  }

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for(let index = 0; index < array.length; index += 1){
    if (array[index] % 5 === 0 && array[index] % 3 === 0){
        result.push("fizzBuzz")
}else if (array[index] % 5 === 0){
    result.push("buzz")
}else if (array[index] % 3 === 0){
    result.push("fizz")
    }else {
        result.push("bug!")
    }
  }
  return result
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
