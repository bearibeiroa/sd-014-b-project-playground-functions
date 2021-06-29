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
  for (let i in palavra) {

  }
/* 3 - Crie uma função que divida a frase
Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
O que será verificado:

Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'
Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'
Retorne o valor ['foguete'] se a função receber a string 'foguete' */
// seu código aqui
//palavra = 

}

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

  for (let i of wins) {

  }

  }
  wins = wins * 3;
  ties = ties + 1;

  return ;
}

console.log(footballPoints(14,8));
// Desafio 6
function highestCount(numeros) {

  let bigValue = 0; // comparação de numeros
  let counter = 0; //  variavel que vai contar quantas vezes repetiu o numero
  let repeats = 0; // 
  for(let i in numeros){
    if (numeros[bigValue] < numeros[i]) {
      bigValue = i;
    }

    if (numeros[i] == numeros[bigValue] {
      compare = numeros[i];
      counter += 1;
      }
    return bigValue;
  }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
/*Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.


Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

O que será verificado:

  Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

  Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

  Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato */
 // return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(5,2,3))
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
function fizzBuzz() {
  // seu código aqui
}

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
