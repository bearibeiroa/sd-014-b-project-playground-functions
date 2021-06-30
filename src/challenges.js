// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3

// metodo split retirado da documentação, em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp para expressões regulares

function splitSentence(palavra) {
  let splittedSentence = palavra.split(' ');

  return splittedSentence;
}
// Desafio 4
function concatName(recebeItem) {
  let primeiroNome = recebeItem[0];
  let ultimoNome = recebeItem[recebeItem.length - 1];
  let juntaNome = ultimoNome + ', ' + primeiroNome;

  return juntaNome;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winPoint = (wins * 3);
  let tiePoint = ties;
  let totalPoint = winPoint + tiePoint;

  return totalPoint;
}

// Desafio 6
// Utilizei a concatenação de dois exercícios do bloco 4
function highestCount(numeros) {
  let counter = 0;
  let bigValue = Math.max.apply(null, numeros); // comparacao de numeros
  for (let i = 0; i < numeros.length; i+= 1) {
    if (numeros[i] === bigValue){
      counter +=1;
    }
  }    
  return counter;
}
// Desafio 7
/* Após entrar na monitoria, e sala de estudos, tive alguns insights e resolvi alterar a forma de expressar o resultado, pois não passava em todos os testes. A Fernanda falou algo sobre uma propriedade caso algum dos numeros seja negativo. A propriedade é a Math.abs, eu vi a documentação aqui https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  let result;

  if (distMouseCat1 < distMouseCat2) {
    result = 'cat1';
  } else if (distMouseCat2 < distMouseCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
// Desafio 8
function fizzBuzz(numBuzz) {
  for (let i = 0; i < numBuzz.length; i += 1) {
    if ((numBuzz[i] % 3 == 0 && numBuzz[i] % 5 == 0)) {
      numBuzz[i] = 'fizzBuzz';
    } else if (numBuzz[i] % 3 == 0) {
      numBuzz[i] = 'fizz';
    } else if (numBuzz[i] % 5 == 0) {
      numBuzz[i] = 'buzz';
    } else {
      numBuzz[i] = 'bug!';
    }
  }
  return numBuzz;
}

// Desafio 9

//Anna Hamann - 14A me ajudou com um método replace, encontrado na W3CSchools
function encode(word) {
  let wordEncode = word;

  wordEncode = wordEncode.replace(/a/g, '1');
  wordEncode = wordEncode.replace(/e/g, '2');
  wordEncode = wordEncode.replace(/i/g, '3');
  wordEncode = wordEncode.replace(/o/g, '4');
  wordEncode = wordEncode.replace(/u/g, '5');

  return wordEncode;
}

function decode(word) {
  let wordSwitch = word;
  
  wordSwitch = wordSwitch.replace(/1/g, 'a');
  wordSwitch = wordSwitch.replace(/2/g, 'e');
  wordSwitch = wordSwitch.replace(/3/g, 'i');
  wordSwitch = wordSwitch.replace(/4/g, 'o');
  wordSwitch = wordSwitch.replace(/5/g, 'u');

  return wordSwitch;
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
