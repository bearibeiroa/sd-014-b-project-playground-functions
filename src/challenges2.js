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
