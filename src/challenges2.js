// Desafio 10
function sortByTech(listOfTechs) {
  return listOfTechs.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

/** 
 * Para criar uma função para ordenar um array de objetos de acordo com o
 * valor de uma de suas propriedades, pesquisei sobre o método array.sort()
 * Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

function techList(tech, name) {
  let listOfTechs = [];
  for (let index = 0; index < tech.length; index += 1) {
    let newTech = {
      tech: tech[index],
      name,
    };
    listOfTechs.push(newTech);
  }
  if (listOfTechs.length === 0) {
    return 'Vazio!';
  }
  return sortByTech(listOfTechs);
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let count = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (
    lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) ||
    lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) ||
    lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)
    ) {
    isTriangle = true;
  }
  return isTriangle;
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
