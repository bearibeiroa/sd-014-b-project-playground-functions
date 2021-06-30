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
function generatePhoneNumber() {
  // seu código aqui
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
