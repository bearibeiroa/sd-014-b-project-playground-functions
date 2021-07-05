// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let result = (base * altura) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
   * Utilizei a function split() passando o parâmetro ' ' para separa a string e a própria split() separa em array.
   */
  let arrayString = string.split(' ');

  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let index = arrayString.length - 1;
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
   * Coloquei as variáveis dentro do acento grave, para poder manipular o array como string.
   */
  let resultString = `${arrayString[index]}, ${arrayString[0]}`;

  return resultString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let ptsWins = wins * 3;
  let ptsTies = ties * 1;

  return ptsWins + ptsTies;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   * A função Math.max() retorna o maior de um ou mais números.
   */
  let maiorNumero = Math.max(...numbers);
  let cont = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maiorNumero) {
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let posCat1 = Math.abs(cat1 - mouse);
  let posCat2 = Math.abs(cat2 - mouse);
  let result;

  if (posCat1 > posCat2) {
    result = 'cat2';
  } else if (posCat1 < posCat2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

// Function para verificar se o item do array é fizzBuzz, bug!, fizz ou buzz
function checkItem(item) {
  /**
   * Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
   * Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
   * Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
   * Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
   */
  if (item % 3 === 0 && item % 5 === 0) {
    return 'fizzBuzz';
  }
  if (item % 3 === 0) {
    return 'fizz';
  }
  if (item % 5 === 0) {
    return 'buzz';
  }

  return 'bug!';
}

// Desafio 8
function fizzBuzz(arrayNumber = [7, 9]) {
  // seu código aqui
  for (let index = 0; index < arrayNumber.length; index += 1) {
    arrayNumber[index] = checkItem(arrayNumber[index]);
  }
  return arrayNumber;
}

// function criada para fazer a troca de vogal para numero e numero para vocal utilizando a function replace
function changeReplaceEncode(param1, expReg, objSubs) {
  /**
   * Sourc: https://blog.betrybe.com/javascript/javascript-replace/
   * Utilizei a function replace com expressões regulares para trocar todos os caracteres de uma vez sem necessitar usar um for para pecorrer a string e ifs para aplicar as condições.
   */
  let alteracaoLista = param1.replace(expReg, function (item) {
    let it = objSubs[item];
    let itemLista = it.replace(function (elemento) { return elemento.toUpperCase(); });
    return itemLista;
  });

  return alteracaoLista;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let expReg = /a|e|i|o|u/gi;
  let listaSubstituicao = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return changeReplaceEncode(string, expReg, listaSubstituicao);
}

function decode(string) {
  // seu código aqui
  let expReg = /1|2|3|4|5/gi;
  let listaSubstituicao = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return changeReplaceEncode(string, expReg, listaSubstituicao);
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
