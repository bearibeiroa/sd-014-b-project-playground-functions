// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let separada = frase.split(' ');
  return separada;
}

// Desafio 4
function concatName(allNames) {
  let lastName = allNames[allNames.length - 1];
  let firstName = allNames[0];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(valorarray) {
  let maiorNumeroArray = valorarray[0];
  let qtidadeNumeroMaior = 0;
  for (let index = 0; index < valorarray.length; index ++ ){
    if (valorarray[index] > maiorNumeroArray){
      maiorNumeroArray = valorarray[index];
    }   
  }
  for (let i = 0; i < valorarray.length; i += 1){
    if (maiorNumeroArray === valorarray[i]){
      qtidadeNumeroMaior += 1;
    }
  }
return qtidadeNumeroMaior;
}

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
