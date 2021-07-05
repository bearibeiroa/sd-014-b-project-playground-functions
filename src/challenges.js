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
    // pega o numero da array
    let numeroAtual = numeros[i];
    // comparar todos os numeros da array com o maior número, pra ver quantos maior números tem
    // se o numero for maior
    if (numeroAtual === maiorNumero) {
      // Adicionar 1 no contador cada vez que o numero maior aparece
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

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let recebePum = [];
  for (let numeroAtual of arrayDeNumeros) {
    if (numeroAtual % 3 === 0 && numeroAtual % 5 === 0) {
      recebePum.push('fizzBuzz');
    }
    else if (numeroAtual % 3 === 0) {
      recebePum.push('fizz');
    }
    else if (numeroAtual % 5 === 0) {
      recebePum.push('buzz');
    }
    else {
      recebePum.push('bug!');
    }
  }
  return recebePum;
}

// Desafio 9
function encode(stringRecebida) {
  // criar variavel pra modificar a frase 
  let stringModificada = '';
  // criar array com letras
  let listaVogais = ['a', 'e', 'i', 'o', 'u'];
  // percorrer letras da string
  for (let letraAtual of stringRecebida) {
    // comparar letra atual com vogais
    if (listaVogais.indexOf(letraAtual) === -1) {
      // se não for vogal coloque do mesmo jeito
      stringModificada += letraAtual;
    }
    else {
      // se for igual a 'vogais' guarda número na string modificada
      let numero = listaVogais.indexOf(letraAtual) + 1;
      stringModificada += numero;
    }
  }
  return stringModificada;
}

function decode(stringEcode) {
  let stringNormal = '';
  let listaNumeros = ['1', '2', '3', '4', '5'];
  for (let letraAtual of stringEcode) {
    if (listaNumeros.indexOf(letraAtual) === -1) {
      stringNormal += letraAtual;
    }
    else {
      let listaVogais = ['a', 'e', 'i', 'o', 'u'];
      stringNormal += listaVogais[letraAtual - 1];
    }
  }
  return stringNormal;
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
