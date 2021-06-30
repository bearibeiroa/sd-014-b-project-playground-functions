// Desafio 10

function techList(techArray, name) {
  let listaTechName = [];
  for (let index = 0; index < techArray.length; index += 1) {
    let objetoTechName = { tech: techArray[index], name: name };
    listaTechName.push(objetoTechName);
  }
  if (listaTechName.length === 0) {
    return 'Vazio!';
  }
  return listaTechName.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
  // Referência para a linha acima: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
}

// Desafio 11
function generatePhoneNumber(elevenNumbers) {
  let elevenNumbersLength = elevenNumbers.length;
  if (elevenNumbersLength !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < elevenNumbersLength; index += 1) {
    let repetitionCounter = 0;
    for (let jdex = 0; jdex < elevenNumbersLength; jdex += 1) {
      if (elevenNumbers[index] === elevenNumbers[jdex]) {
        repetitionCounter += 1;
      }
    }
    if (repetitionCounter >= 3 || elevenNumbers[index] < 0 || elevenNumbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return '(' + elevenNumbers[0] + elevenNumbers[1] + ') ' + elevenNumbers[2] + elevenNumbers[3] + elevenNumbers[4] 
  + elevenNumbers[5] + elevenNumbers[6] + '-' + elevenNumbers[7] + elevenNumbers[8] + elevenNumbers[9] 
  + elevenNumbers[10];
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
