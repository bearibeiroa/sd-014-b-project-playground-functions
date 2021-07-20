// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techToTeach = tech.sort();
  let techItens = [];

  if (techToTeach.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techToTeach.length; index += 1) {
    let object = {
      tech: techToTeach[index],
      name: name 
    }

    techItens.push(object);
  }
  return techItens;
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
