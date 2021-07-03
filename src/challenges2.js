// Desafio 10
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Usei como referência, documentação do MDN Web Docs.
function techList(tech, name) {
  // seu código aqui
  let studyList = [];
  if (tech.length === 0) {
    return "Vazio!";
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
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let ddd = [numbers[0], numbers[1]];
  let contactPart1 = [numbers[2], numbers[3], numbers[4], numbers[5], numbers[6]];
  let contactPart2 = [numbers[7], numbers[8], numbers[9], numbers[10]];
  return "(" + ddd.join('') + ") " + contactPart1.join('') + '-' + contactPart2.join('');
}


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
