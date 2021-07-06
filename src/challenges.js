// Desafio 1
function compareTrue(num1, num2) {
  if(num1 && num2 === true) {
  return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  
}

// Desafio 3
function splitSentence(olatrybe) {
  return olatrybe.split(' ');

}

// Desafio 4
function concatName(lista) {
  let resultado = lista[lista.length -1] + ', ' + lista[0];
  return resultado;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties;
  return (vitorias + empates);
  
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
   }
  }
  for (let index= 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  

  if (dist2 > dist1) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }    
   }

   // Documentação sobre o math.abs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

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
