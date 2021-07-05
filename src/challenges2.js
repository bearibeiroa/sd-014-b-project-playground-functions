// Desafio 10
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Usei como referência, documentação do MDN Web Docs.
function techList(tech, name) {
  // seu código aqui
  let studyList = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index of tech.sort()) {
    studyList.push({
      tech: index,
      name: name,
    });
  }
  return studyList;
}

// Desafio 11
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Pesquisei sobre o Array.prototype.join() na documentação, ele me ajuda a remover as virgulas entre os números ao exibir o array.
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        contador += 1;
      }
      if (contador > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    contador = 0;
  }
  let ddd = [numbers[0], numbers[1]];
  let contactPart1 = [numbers[2], numbers[3], numbers[4], numbers[5], numbers[6]];
  let contactPart2 = [numbers[7], numbers[8], numbers[9], numbers[10]];
  return '(' + ddd.join('') + ') ' + contactPart1.join('') + '-' + contactPart2.join('');
}

// Desafio 12
// Passou no requisito mas fiquei com duvidas.
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaAB = lineA + lineB;
  let somaBC = lineB + lineC;
  let somaCA = lineC + lineA;

  if (lineA > somaBC || lineB > somaCA || lineC > somaAB) {
    return false;
  } return true;
}

// Desafio 13
// String.prototype.replace() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace - Usei o replace para extrair somente os numeros da string.
// split() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split - Com o Split inseri os numeros capturados numa string inteira. Como separator usei uma string vazia, isso faz com que a string inteira seja convertida em um array de caracteres.
// Array.prototype.map() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map - Na documentação, em "Exemplo: Caso de uso mais complexo", usei o último exemplo da lista (nomeado como Bonus), onde é sujerido usar .map(Number) para remover as aspas dos elementos no array.
// Recebi auxilio de Écio Ferraz - Turma 14 - Tribo A. Ele me deu uma luz indicando possíveis ferramentas que eu poderia usar para chegar ao resultado. Todas as funções pesquisadas estão referênciadas acima.

function hydrate(text) {
  // seu código aqui
  let stringNumbers = text.replace(/[^0-9]/g, '');
  let numbers = stringNumbers.split('').map(Number);
  let soma = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
  }
  if (soma === 1) {
    return soma + ' copo de água';
  }
    return soma + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
