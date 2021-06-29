// Desafio 1
function compareTrue(statement1, statement2) {
  let resultado;
  if (statement1 === true && statement2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(setence) {
  let returnArray = setence.split(''); // Split a string into an array of substrings * note que se nao tive espaço em " " vai retonar a separação por letra
  for (let i = 0; i < returnArray.length; i += 1) { // returnArray é array que retorna a substring que vieram da string principal (propriedade ) //o valor da lenght de array agora será 3 porque sao tres substrings
    return returnArray;
  }
}

// Desafio 4
function concatName(parametro) {
  let firstItem = parametro[0];
  let lasItem = parametro[parametro.length - 1];
  let firstAndLast = [];
  for (let i = 0; i < parametro.length; i += 1) { // ${} template literals/to embed expressions within normal strings
    firstAndLast = `${lasItem} , ${firstItem}`; // Template literals are enclosed by the backtick (` `)
  } return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let total = wins * pointsWin + ties * pointsTie;
  return total;
}

// Desafio 6
function highestCount(array) {
  let counter = 0;// definição do contador de repetição do maior número
  let highestNumber = 0; // definição da variável que vai receber o maior número da array
  let frequencia = 0; // define a frequencia de comparação inicial
for (let i = 0; i < array.length; i += 1) { // seleciona o atual elemento da array
    for (let j = i; j < array.length; j += 1) { // faz o loop atraves dos proximos elementos na array  
      if (array[i] === array[j]) { // ver se o elemento ocorre de novo na array 
        counter += 1; // incrementar o contador se sim. 
      } else if (array[highestNumber] > array[i]) { // compara a frequencia do elemento atual com a frequencia de comparaçao compare current items frequency with maximum frequency
        frequencia = counter; // if frequencia de comparaçao é menor (se repete) a frequencia de comparaçao  store m in mf for upcoming elements           
      }
    }
    return counter;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanCat1 = mouse - cat1;
  let distanCat2 = mouse - cat2;
  let winnerCat;
  if (distanCat1 > distanCat2) {
    winnerCat = 'cat1';
  } else if (distanCat2 > distanCat1) {
    winnerCat = 'cat2';
  } else {
    winnerCat = 'os gatos trombam e o rato foge';
  } return winnerCat;
}

// Desafio 8
function fizzBuzz() {
let arrayFizBuzz = [];
 for (let i = 0; i < array.length; i += 1){
     if (array[i] % 3 == 0 && array[i] % 5 == 0){
         arrayFizBuzz[i] = "fizBuzz";
     }   
     else if (array[i] % 3 == 0){
         arrayFizBuzz[i] = "fizz";
      } else if (array[i] % 5 == 0){
          arrayFizBuzz[i] = "buzz";
      }
      else {
          arrayFizBuzz[i] = "bug!"
      }
  } return arrayFizBuzz;
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
