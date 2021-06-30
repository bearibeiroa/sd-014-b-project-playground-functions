// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  let resultss;
  if(val1 === true && val2 === true){
    resultss = true;   
  } else if(val1 === false && val2 === true){
    resultss = false;
  } else if(val1 === true && val2 === false){
    resultss = false;
  } else if(val1 === false && val2 === false){
    resultss = false;
  } else {
    resultss = false;
  }
  return resultss;
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;

}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let recebimento = frase;
  let resultado = recebimento.split(" ");
  return resultado;

}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado;
  if(wins || ties > 0){
    let contWin = wins * 3;
    let contTies = ties * 1;
    let resultado = contWin + contTies;
    return resultado;
  }
}



// Desafio 6
function highestCount() {
  // seu código aqui
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
