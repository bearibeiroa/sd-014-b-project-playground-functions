/* eslint-disable complexity */
// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  let frase = palavras[palavras.length - 1] + ', ' + palavras[0];
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(valores) {
  // seu código aqui
  let ordem = valores.sort((a, b) => a - b);// função encontrada na documentação, para ser utilizada dentro do .sort() para ordenar os números sem ser por UNICODE, a-b fica crescente e b-a fica descrescente.
  let quantosIguais = [];
  for (let index of ordem) {
    if (index === ordem[ordem.length - 1]) {
      quantosIguais.push(index);
    }
  }
  return quantosIguais.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (mouse + mouse === cat2 + cat1) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let buzzFizz = [];
  for (let index of numeros) {
    if (index % 3 === 0 && index % 5 === 0) {
      index = 'fizzBuzz';
      buzzFizz.push(index);
    } else if (index % 5 === 0) {
      index = 'buzz';
      buzzFizz.push(index);
    } else if (index % 3 === 0) {
      index = 'fizz';
      buzzFizz.push(index);
    } else {
      index = 'bug!';
      buzzFizz.push(index);
    }
  }
  return buzzFizz;
}

// Desafio 9
function encode(vogais) {
// seu código aqui
  let codificado = [];

  for (let letra of vogais) {
    if (letra === 'a') {
      letra = 1;
      codificado.push(letra);
    } else if (letra === 'e') {
      letra = 2;
      codificado.push(letra);
    } else if (letra === 'i') {
      letra = 3;
      codificado.push(letra);
    } else if (letra === 'o') {
      letra = 4;
      codificado.push(letra);
    } else if (letra === 'u') {
      letra = 5;
      codificado.push(letra);
    } else {
      codificado.push(letra);
    }
  }
  return codificado.join(''); // consegui descobrir o prototype .join() e como utilizar os parametro dele juntar os elementos da string na documentação mozilla
}

function decode(codigo) {
// seu código aqui
  let fraseDecodificada = [];
  for (let numero of codigo) {
    if (numero === '1') {
      numero = 'a';
      fraseDecodificada.push(numero);
    } else if (numero === '2') {
      numero = 'e';
      fraseDecodificada.push(numero);
    } else if (numero === '3') {
      numero = 'i';
      fraseDecodificada.push(numero);
    } else if (numero === '4') {
      numero = 'o';
      fraseDecodificada.push(numero);
    } else if (numero === '5') {
      numero = 'u';
      fraseDecodificada.push(numero);
    } else {
      fraseDecodificada.push(numero);
    }
  }
  return fraseDecodificada.join('');
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
