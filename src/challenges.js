// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(frase) {
  let fraseArray = frase.split(' ');
  return fraseArray;
}

// Desafio 4
function concatName(arrayC) {
  let stringC = arrayC[arrayC.length - 1] + ', ' + arrayC[0];
  return stringC;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(n) {
  var maior = n[0];
  var maiorNumero = [];
  for (i = 0; i < n.length; i++) {
    if (n[i] >= maior) {
      maior = n[i];
    }
  }
  for (let i = 0; i < n.length; i++) {
    if (n[i] == maior) {
      maiorNumero.push(n[i]);
    }
  }
  return maiorNumero.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  var gato1 = 0;
  var gato2 = 0;
  if (mouse >= cat1) {
    gato1 = mouse - cat1;
  } else {
    gato1 = cat1 - mouse;
  }
  if (mouse >= cat2) {
    gato2 = mouse - cat2;
  } else {
    gato2 = cat2 - mouse;
  }
  if (gato1 < gato2) {
    return 'cat1';
  } else if (gato2 < gato1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(n) {
  var result = [];
  for (let i of n) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push('fizzBuzz');
    } else if (i % 3 == 0) {
      result.push('fizz');
    } else if (i % 5 == 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
//https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
function encode(n) {
  var n2 = n.replace(/a/g, '1');
  var n3 = n2.replace(/e/g, '2');
  var n4 = n3.replace(/i/g, '3');
  var n5 = n4.replace(/o/g, '4');
  var n6 = n5.replace(/u/g, '5');
  return n6;
}
function decode(n7) {
  var n8 = n7.replace(/1/g, 'a');
  var n9 = n8.replace(/2/g, 'e');
  var n10 = n9.replace(/3/g, 'i');
  var n11 = n10.replace(/4/g, 'o');
  var n12 = n11.replace(/5/g, 'u');
  return n12;
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
