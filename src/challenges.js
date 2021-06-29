// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true){
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}


// Desafio 4
function concatName(array) {
  //let names = array[array.length -1 , 0];
  return array[array.length - 1] + ", " + array[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}


// Desafio 6
function highestCount(maiorrepetido) {
  let maiorNumber = 0;
  let numberOfHits = 0;
  for (index in maiorrepetido){
    if (maiorrepetido[index] > maiorNumber){
      maiorNumber = maiorrepetido[index];
    }
  }
  for (index2 in maiorrepetido) {
    if (maiorrepetido[index2] === maiorNumber) {
      numberOfHits += 1;
    }
  }
  return numberOfHits;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
