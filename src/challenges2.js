// Desafio 10
//Faz a ordenação crescente das strings 
function ordenarPorTecnologia(a, b) {
  if(a.tech < b.tech) {
    return -1;
  }
  if(a.tech > b.tech) {
    return 1;
  }

  return 0;
}

function techList(techLearn, name) {
  let newTechList;
  //Percorre o array e cria um objeto para cada tecnologia do array
  for(let index = 0; index < techLearn.length; index += 1) {
    techLearn[index] = {
      tech: techLearn[index],
      name: name
    };
  }

  //Verifica se o array está vazio e, se sim, retorna "Vazio!", se não, continua
  if(techLearn.length === 0) {
    return ('Vazio!');
  } else {
    //Adiciona todos os objetos em uma nova lista e ordena com a função
    //ordenarPorTecnologia()
    newTechList = techLearn.sort(ordenarPorTecnologia);
  }

  return newTechList;
}

console.log(techList([], "Lucas"));

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
