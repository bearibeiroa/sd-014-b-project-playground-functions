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
    // O trecho a seguir usei o código de Natalia Martins como modelo para encontrar a solução, segue o link do repositório: https://github.com/tryber/sd-014-b-project-playground-functions/pull/73
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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let isTriangle = false;
  let diferenceAB = Math.abs(lineA - lineB);
  let diferenceAc = Math.abs(lineA - lineC);
  let diferenceBc = Math.abs( lineB - lineC);

  // Tive como base o código de Natália Martins para encontrar a solução, segue o link do repositório: https://github.com/tryber/sd-014-b-project-playground-functions/pull/73
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) ||(lineC > lineA + lineB)) {
    isTriangle = false;
  }
  else if ((lineA < diferenceBc) || (lineB < diferenceAc) || (lineC < diferenceAB)) {
    isTriangle = false;
  }
  else {
    isTriangle = true;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  // Mais uma vez usei como base o código de Natália Martins, segue o link do repositório: https://github.com/tryber/sd-014-b-project-playground-functions/pull/73
  let qtdDrinks = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    let current = drinks[index];
    if ((drinks[index] > 0) && (drinks[index] <= 9)) {
      qtdDrinks += parseInt(current); 
    }
  }
  if (qtdDrinks === 1) return qtdDrinks + ' copo de água'; 
  else return qtdDrinks + ' copos de água';

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
