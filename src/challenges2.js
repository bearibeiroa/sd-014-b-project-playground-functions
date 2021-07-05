// Função que ordena objetos em ordem alfabética crescente
function sortObject(object) {
/*
*O código a seguir foi extraido de um tutorial disponível no blog https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/
*A intenção foi ordenar o objeto em ordem alfabética utilizando a função sort() e operador condicional ternário
*/
  object.sort(function (keyOne, keytwo) {
    return (keyOne.tech > keytwo.tech) ? 1 : ((keytwo.tech > keyOne.tech) ? -1 : 0);
  });
}

// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let listOfTechs = [];
  for (let index = 0; index < technologies.length; index += 1) {
    listOfTechs.push(
      {
        tech: technologies[index],
        name,
      },
    );
  };
  if (listOfTechs.length === 0) return 'Vazio!';
  // O código a seguir foi extraido de um tutorial disponível no blog https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/.A intenção foi ordenar o objeto em ordem alfabética utilizando a função sort() e operador condicional ternário.
  sortObject(listOfTechs);
  return listOfTechs;
}

// Desafio 11
function generatePhoneNumber(arraysOfNumbers) {
  // seu código aqui
   // Verifica se o tamanho do array é diferente de 11
  if (arraysOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  let invalidValues = 'não é possível gerar um número de telefone com esses valores';
  // Verifica se existem números maiores que 9
  for (index = 0; index < arraysOfNumbers.length; index += 1) {
    if (arraysOfNumbers[index] > 9 || arraysOfNumbers[index] < 0) {
      return invalidValues;
    }
  }
  // Verifica se algum número se repete três vezes
  for (let index = 0; index < arraysOfNumbers.length; index += 1) {
    // O trecho a seguir usei o código de Natalia Martins como modelo para encontrar a solução
    let repetead = 0;
    for (let indexComparator = 0; indexComparator < arraysOfNumbers.length; indexComparator += 1) {
      if (arraysOfNumbers[indexComparator] === arraysOfNumbers[index]) {
        repetead += 1;
      }
    }
    if (repetead > 2) {
      return invalidValues;
    }
  }
  // Pegando as duas primeiras posições
  let prefixArray = arraysOfNumbers.slice(0,2);
  prefixArray.unshift('(');
  prefixArray.push(')');
  let prefix = prefixArray.join('');
  // Pegando cinco posições a partir do index 2
  let firstGroupArray = arraysOfNumbers.slice(2,7);
  let firstGroup = firstGroupArray.join('');
  // Pegando os últimos números
  let lastGroupArray = arraysOfNumbers.slice(7);
  let lastGroup = lastGroupArray.join('');
  let phoneNumber = prefix + ' ' + firstGroup + '-' + lastGroup;
  return phoneNumber;
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
