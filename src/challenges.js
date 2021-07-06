// Desafio 1
  function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === true) return true;
    return false;
}

// Desafio 2
function calcArea() {
  function calcArea(base,height) {
    return (base * height) / 2;
  }
}

// Desafio 3
  function splitSentence(frase) {
    let quebraFrase = frase.split(" ");
    return quebraFrase;
}

// Desafio 4
function concatName() {
  ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
  return array[array.length - 1] + comma + array[0];

// Desafio 5
function footballPoints(win,ties) {
 let totalPoints=(wins*3)+ties;
 return totalPoints;
}

// Desafio 6
function highestCount9(){
  let major = arr[0];
  let count = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if(major < arr[index]){
      major = arr[index];
    }
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (major === arr[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanciaMouseParaCat1 = Math.abs(mouse - cat1);
  const distanciaMouseParaCat2 = Math.abs(mouse - cat2);

  if (distanciaMouseParaCat1 < distanciaMouseParaCat2) {
    return 'cat1';
  }

  if (distanciaMouseParaCat2 < distanciaMouseParaCat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
  function fizzBuzz(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
        resultado.push('fizz');
      } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
        resultado.push('buzz');
      } else if (array[i] % 5 === 0 && array[i] % 3 === 0) {
        resultado.push('fizzBuzz');
      } else {
        resultado.push('bug!');
      }
    } return resultado;
  }
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
  splitSentence
}
