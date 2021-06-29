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
  return (base * height / 2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fraseArray = frase.split('');
  let resultado = [];
  let fraseDividida = '';
  for (let index = 0; index < fraseArray.length; index += 1) {
    let letraAdicionada = '';
    if (fraseArray[index] !== ' ' && index < fraseArray.length - 1) {
      fraseDividida += fraseArray[index]
    } else if (fraseArray[index] === ' ') {
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
function concatName(frase) {
  // seu código aqui

  let ultimoNome = frase[frase.length - 1];
  let primeiroNome = frase[0];
  let nomesConcatenados = ultimoNome + ", " + primeiroNome;
  return nomesConcatenados;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3 + ties * 1 + 0;
  return pontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  // seu código aqui
  function sortNumber(a, b) {
    return a - b;

  }

  let arrayDeNumerosOrdenada = arrayDeNumeros.sort(sortNumber);
  let maiorNumero = arrayDeNumerosOrdenada[arrayDeNumerosOrdenada.length - 1];
  let numeroDeVezes = 0;
  for (let index = (arrayDeNumeros.length - 1); index >= 0; index -= 1) {
    if (maiorNumero === arrayDeNumerosOrdenada[index]) {
      numeroDeVezes += 1;
    }
  }
  return numeroDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distance1 = Math.abs(Math.abs(mouse) - Math.abs(cat1));
  let distance2 = Math.abs(Math.abs(mouse) - Math.abs(cat2));

  if (distance2 < distance1) {
    return "cat2";
  } else if (distance1 < distance2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
  // Desafio 8
  function fizzBuzz(arrayFizzBuzz) {
    // seu código aqui
    let resultado =[];
    for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
      if (arrayFizzBuzz[index] % 3 === 0 && arrayFizzBuzz[index] % 5 === 0){
        resultado.push("fizzBuzz");     
      } else if (arrayFizzBuzz[index] % 5 === 0) {
        resultado.push("buzz");
      } else if (arrayFizzBuzz[index] % 3 === 0) {
        resultado.push("fizz"); 
      } else {
        resultado.push("bug!"); 
      }
    }
    return resultado;
  }

  // Desafio 9
  function encode(frase) {
    // seu código aqui
    let arrayFrase = frase.split('');
    let resultado = [];
    for (let index = 0; index < arrayFrase.length; index += 1){
      if (arrayFrase[index] === 'a') {
        resultado.push('1');
      } else if (arrayFrase[index] === 'e') {
        resultado.push('2');
      } else if (arrayFrase[index] === 'i') {
        resultado.push('3');
      } else if (arrayFrase[index] === 'o') {
        resultado.push('4');
      } else if (arrayFrase[index] === 'u') {
        resultado.push('5');
      } else {
        resultado.push(arrayFrase[index]);
      }
    }
    return resultado.join('');
  }
  function decode(frase) {
    // seu código aqui
    let arrayFrase = frase.split('');
    let resultado = [];
    for (let index = 0; index < arrayFrase.length; index += 1){
      if (arrayFrase[index] === '1') {
        resultado.push('a');
      } else if (arrayFrase[index] === '2') {
        resultado.push('e');
      } else if (arrayFrase[index] === '3') {
        resultado.push('i');
      } else if (arrayFrase[index] === '4') {
        resultado.push('o');
      } else if (arrayFrase[index] === '5') {
        resultado.push('u');
      } else {
        resultado.push(arrayFrase[index]);
      }
    }
    return resultado.join('');
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
