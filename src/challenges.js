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
function splitSentence(palavra) {
  let splittedSentence = palavra.split('\s');
  palavra.trim();
  
  return splittedSentence;
/* 3 - Crie uma função que divida a frase
Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
O que será verificado:

Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'
Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'
Retorne o valor ['foguete'] se a função receber a string 'foguete' */
// seu código aqui
}
console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(recebeItem) {
  let primeiroNome = recebeItem[0]; 
  let ultimoNome = recebeItem[recebeItem.length-1];
  let juntaNome = ultimoNome + ', ' + primeiroNome;

  return juntaNome;
}
// Desafio 5
/*Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

O que será verificado:

  Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates
  Retorne 5 pontos quando o time tenha 1 vitória e 2 empates
  Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates */

function footballPoints(wins, ties) {
/*
  for (let i of wins) {

  }
 wins = wins * 3;
  ties = ties + 1;

  return ;
}

console.log(footballPoints(14,8)); */
// Desafio 6
function highestCount(numeros) {

  let bigValue = 0; // comparação de numeros
  let counter = 0; //  variavel que vai contar quantas vezes repetiu o numero
  let repeats = 0; // 
  for(let i in numeros) {
    if (numeros[bigValue] < numeros[i]) {
      bigValue = i;
    }
  for(let i2 of numeros) {
    if (numeros[i2] == numeros[bigValue]) {
      compare = numeros[i2];
      counter += 1;
    }
  }
    return bigValue;
  }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = mouse - cat1 *-1;
  let distMouseCat2 = mouse - cat2 *-1;

  if (distMouseCat1 === distMouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distMouseCat1 > distMouseCat2) {
    return 'cat2';
  } else {
    return 'cat1'
  }
}
console.log(catAndMouse(1,2,5))

// Desafio 8
/* Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

    Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
    Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
    Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
    Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

O que será verificado:

    Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz
    Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz
    Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz
 */
function fizzBuzz(numBuzz) {
  
  for (let i of numBuzz) {
    if (numBuzz[i] % 3 == 0) {
      numBuzz[i] = 'fizz';
    } else if (numBuzz[i] % 5 == 0) {
      numBuzz[i] = 'fizz';
    } else if (numBuzz[i] % 5 == 0 && numBuzz[i] % 3 ==0) {
      numBuzz[i] = 'fizzBuzz';
    } else {
      numBuzz[i] = 'bug!';
    }
  }
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
/*Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

O que será verificado:

    Retorne uma string codificada quando a função encode for utilizada

    Retorne uma string decodificada quando a função decode for utilizada
 */
function encode(word) {

  // seu código aqui
}
function decode(word) {
  
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