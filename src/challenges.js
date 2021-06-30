// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// comando .split(separador, limite) - como não tem limite usei apenas o " " como elemento de eparação, ou seja, toda vez que achar um espço o split separará
// aprendido através do w3schools: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
// código autocorrigido pelo linter: linha origina " return names[names.length-1]+', '+names[0]"
// após correção entendi que ${variável} dentro de um texto(" ...") é entendido como uma variável, portanto '${variavel}, ${variável}' imprime: variável, variável
function concatName(names) {
  return (`${names[names.length - 1]}, ${names[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
// aprendido o comando sort() através da documentação disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort e do vídeo: https://www.youtube.com/watch?v=SkDZY7N0Ox8
// como se trata a função .sort ordena baseado na tabela unicode, é necessário de outra função para se realizar o ajuste, dessa forma foi usada a função a seguir
function ajusteUnicode(a, b) {
  return (a - b);
}
function highestCount(sequence) {
  sequence = sequence.sort(ajusteUnicode);
  let max = sequence[sequence.length - 1];
  let counter = 0;
  for (let index = 0; index < sequence.length; index += 1) {
    if (sequence[index] === max) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
// Math.abs(x) é uma função que retorna o valor absoluto (módulo) do X, nesse caso. O conhecimento eu jpa tinha do C++ e phyton que tem funções parecidas, então só precisei verificar a sintaxe, através de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  dist1 = Math.abs(dist1);
  let dist2 = cat2 - mouse;
  dist2 = Math.abs(dist2);
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
}

// Desafio 8
function n5n3(values) {
  for (let key in values) {
    if (values[key] % 5 !== 0 && values[key] % 3 !== 0) {
      values[key] = 'bug!';
    }
  }
}

function s3n5(values) {
  for (let key in values) {
    if (values[key] % 3 === 0 && values[key] % 5 !== 0) {
      values[key] = 'fizz';
    }
  }
}

function s5n3(values) {
  for (let key in values) {
    if (values[key] % 5 === 0 && values[key] % 3 !== 0) {
      values[key] = 'buzz';
    }
  }
}

function s5s3(values) {
  for (let key in values) {
    if (values[key] % 3 === 0 && values[key] % 5 === 0) {
      values[key] = 'fizzBuzz';
    }
  }
}
function fizzBuzz(values) {
  n5n3(values);
  s3n5(values);
  s5n3(values);
  s5s3(values);
  return values;
}

// Desafio 9
// função .replace aprendida em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// junto com esse outro endereço que foi usado para entender a sintaxe parâmetro RegExp: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// dessa forma tem-se a sintaxe / .../ para indicar que é uma expressão regular, o 'g' para indicar que se repere globalmente e não é apenas uma vez e o outro parâmetro é o valor a qual se quer substituir.
function encode(word) {
  word = word.replace(/a/g, '1');
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}

function decode(word) {
  word = word.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
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
