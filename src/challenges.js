// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true){
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = string.split(" ");
  return arrayString;
}

// Desafio 4
function concatName(arrayNomes) {
  // seu código aqui
  let result = arrayNomes[arrayNomes.length - 1]+ "," + " " + arrayNomes[0];
  return result  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + ties;
  return sum;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < numeros.length; index += 1){
    if (numeros[index] > maiorNumero){
    maiorNumero = numeros[index];
    contador += 1;
    }
    if (maiorNumero === maiorNumero){
      contador += 1;
      }
    
    return contador;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat) {
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
