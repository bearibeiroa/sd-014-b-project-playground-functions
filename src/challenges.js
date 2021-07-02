// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // Verifica se dois valores são verdadeiros.
  if (valueOne && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  // Calcula a area de um triangulo.
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  // Divide uma string retornando um array usando a função split()
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // Concatena o ultimo item de um array com o seu primeiro item retornando numa única string.
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // Multiplica o número de vitórias e soma com o número de empates.
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let count = 0;
  // Encontra o maior número.
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }
  // Conta quantas vezes o número se repete no array.
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Calcula a distancia entre os gatos e o rato.
  // Math.abs() retorna o valor absoluto de um número.
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let string = 'os gatos trombam e o rato foge';
  // Compara a distancia entre os gatos e o rato.
  if (distanceCat1 < distanceCat2) {
    string = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    string = 'cat2';
  }
  return string;
}

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
