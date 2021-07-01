// Desafio 1
//

function compareTrue(value1, value2) {
  // receber 2 par, bolean
  // temos que usar o operador && para comparar os valores 
  // tem que retornar true ou false
  return value1 === true && value2 === true
}

// Desafio 2
function calcArea(base, height) {
  // vai receber um valor chamado base e outra de altura chamada height
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(fraseTeste) {
  return fraseTeste.split(' ', 3);
  // seu código aqui
}
// Desafio 4
function concatName(lista) {
  let primeiroNome = lista[0];
  let ultimoNome = lista[lista.length - 1];
  return (ultimoNome + ', ' + primeiroNome);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsTime = (wins * 3) + ties;
  return (pointsTime);
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = -Infinity;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      (maiorNumero = numeros[i]);
    }
  }
  let contador = 0
  for (let i = 0; i < numeros.length; i += 1) {
    //pega o numero da array
    let numeroAtual = numeros[i];
    // comparar todos os numeros da array com o maior número, pra ver quantos maior números tem
    // se o numero for maior
    if (numeroAtual === maiorNumero) {
      //Adicionar 1 no contador cada vez que o numero maior aparece
      contador += 1
    }
  }
  return (contador)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // calcular distancia entre rato e gato 1
  let distanciaGato1Rato = Math.abs(cat1 - mouse);
  let distanciaGato2Rato = Math.abs(cat2 - mouse);

  if (distanciaGato1Rato < distanciaGato2Rato) {
    return 'cat1';
  } 
  if (distanciaGato2Rato < distanciaGato1Rato) {
    return 'cat2';
  } 
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2));
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
