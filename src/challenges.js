// Desafio 1
function compareTrue(primeiroValor, segundoValor) {
  // seu código aqui
  if (primeiroValor && segundoValor){
    return true;

  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(String) {
  // seu código aqui
  let novaString = String.split(" ")
  return novaString;
}

// Desafio 4
function concatName(array) {
  // seu código aqui

  let primeiroItem = array[0];
  let ultimoItem = array[array.length -1];
  let fullString = `${ultimoItem}, ${primeiroItem}`;
    return fullString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let empates = ties;
  let total = vitorias + empates;
  return total;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numero= 0;
  for (i in numeros){
    if (numeros[i] > numero) {
      numero = numeros[i]
    }
  }
  let contador = 0;
  for (i in numeros) {
    if (numeros[i] == numero) {
      contador+=1;
    }
  }
  return contador;
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
