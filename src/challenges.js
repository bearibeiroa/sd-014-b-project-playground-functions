// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  let resultado = false;
  if (valor1 === true && valor2 === true) {
    resultado = true;
  } 
  return resultado;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height/2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fraseArray = frase.split('');
  let resultado = [];
  let fraseDividida = '';
  for (let index = 0; index < fraseArray.length; index += 1) {
    let letraAdicionada = '';
    if (fraseArray[index] !== ' ' && index < fraseArray.length-1){
      fraseDividida += fraseArray[index]
    } else if (fraseArray[index] === 0){
        resultado.push(fraseDividida);
        fraseDividida = '';
    } else {
        fraseDividida += fraseArray[index]
        resultado.push(fraseDividida)
        fraseDividida = '';
    }
  }
  return resultado;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
