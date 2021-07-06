// Desafio 10

function techList(techs, nome) {
  let info = [];
  if (techs.length === 0) { return ('Vazio!'); }
  if (techs.length !== 0) {
    techs = techs.sort();
    console.log(techs);
    for (let index = 0; index < techs.length; index += 1) {
      info[index] = {
        tech: techs[index],
        name: nome,
      };
    }
    return info;
  }
}

// Desafio 11

// Função abaixo foi baseada em solution do bloco - Gabarito JavaScript / Parte 4 / Parte I - Objetos e For/In - Exercício 5
function maisRepetido(numeros) {
  let count = {};
  for (let index = 0; index < numeros.length; index += 1) {
    let number = numeros[index]; // Atribuição de number de verificação com número de entrada
    if (count[number] === undefined) { // Se objeto de contagem para 'number' está vazio
      count[number] = 1; // Atribui 1 contagem para o valor number = numbers[index]
    } else { // Senão ...
      count[number] += 1; // Soma no contador 1 a mais do valor anterior
    }
  }
  // Verificar repetições
  let countRepeated = 0; // Contador de repetições inicia zerado
  for (let x in count) { // Loop para cada valor "x" no objeto "count" com as repetições
    if (countRepeated < count[x]) { // Se o contador countRepeated, inicializado em 0, é menor que a contagem do valor "x" ...
      countRepeated = count[x]; // Então é atribuída a contagem de "x" no contador countRepeated
    }
  }
  return countRepeated; // Maior valor de repetições
} // Function acima verifica repetições

function zeroNine(phone) {
  let verify = 0;
  for (let n in phone) {
    if (phone[n] < 0 || phone[n] > 9) { verify += 1; }
  }
  return verify;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  if (zeroNine(numbers) > 0) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  let mostRepeated = maisRepetido(numbers);
  if (mostRepeated > 2) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  let phoneNumber = ('(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10]);
  return phoneNumber;
}

/* Outra solução do Desafio 11, com maior complexidade, segundo o ESLint:
function generatePhoneNumber(numbers) {
// Função abaixo foi baseada em solution do bloco - Gabarito JavaScript / Parte 4 / Parte I - Objetos e For/In - Exercício 5
  function mostRepeated() {
    let count = {};
    for (let index = 0; index < numbers.length; index += 1) {
      let number = numbers[index]; // atribuição de number de verificação com número de entrada
      if (count[number] === undefined) { // se objeto de contagem para 'number' está vazio
        count[number] = 1; // atribui 1 contagem para o valor number = numbers[index]
      } else { // senão ...
        count[number] += 1; // soma no contador 1 a mais do valor anterior
      }
    }
    // verificar repetições
    let countRepeated = 0; // contador de repetições inicia zerado
    for (let x in count) { // loop para cada valor "x" no objeto "count" com as repetições
      if (countRepeated < count[x]) { // se o contador countRepeated, inicializado em 0, é menor que a contagem do valor "x" ...
        countRepeated = count[x]; // então é atribuída a contagem de "x" no contador countRepeated
      }
    }
    return countRepeated; // maior valor de repetições
  } // --function acima verifica repetições
  let verifyZeroNine = 0;
  for (let n in numbers) {
    if (numbers[n] < 0 || numbers[n] > 9) { verifyZeroNine += 1; }
  }
  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  if (verifyZeroNine > 0) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  if (mostRepeated() > 2) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  let phoneNumber = ('(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10]);
  return phoneNumber;
} */

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let checkA = ((lineA < (lineB + lineC)) * (lineA > Math.abs(lineB - lineC)));
  let checkB = ((lineB < (lineA + lineC)) * (lineB > Math.abs(lineA - lineC)));
  let checkC = ((lineC < (lineA + lineB)) * (lineC > Math.abs(lineA - lineB)));
  if ((checkA === 1) || (checkB === 1) || (checkC === 1)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  let copoAgua = 0;
  // linha de código abaixo foi adaptada de: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript - Acessado em: 01/07/2021
  let numbers = bebidas.match(/\d+/g).map(Number); // regex - regular expressions -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  for (let x = 0; x < numbers.length; x += 1) {
    copoAgua += numbers[x];
  }
  if (copoAgua === 1) {
    return ('1 copo de água');
  } if (copoAgua > 1) {
    copoAgua += ' copos de água';
    return (copoAgua);
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
