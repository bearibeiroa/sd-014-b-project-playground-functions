/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable guard-for-in */

// Desafio 10
function techList(tech, nome) {
  let listTech = [];
  tech.sort();
  if (tech.length > 0) {
    for (let index in tech) {
      listTech.push({
        tech: tech[index],
        name: nome,
      });
    }
  } else {
    return 'Vazio!';
  }
  return listTech;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in numeros) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let quantRepete = 0;

  for (let sIndex = 0; sIndex < numeros.length; sIndex += 1) {
    quantRepete = 0;
    for (let tIndex = 0; tIndex <= numeros.length; tIndex += 1) {
      if (numeros[sIndex] === numeros[tIndex]) {
        quantRepete += 1;
      } else if (quantRepete >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let part1 = '';
  let part2 = '';
  let part3 = '';

  for (let index = 0; index < numeros.length; index += 1) {
    if (index < 2) {
      part1 += numeros[index];
    } else if (index >= 2 && index <= 6) {
      part2 += numeros[index];
    } else if (index >= 7 && index < 12) {
      part3 += numeros[index];
    }
  }
  let newNumber = `(${part1}) ${part2}-${part3}`;
  return (newNumber);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 90, 0, 1]));
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
