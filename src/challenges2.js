// Desafio 10
function techList(tech, name) {
  let lista = [];

  if (tech.length <= 0) {
    return 'Vazio!';
  }

  tech = tech.sort();
  
  for (let index in tech) {
    lista.push(
      object = {
        name: name,
        tech: tech[index]
      }
    );
  }
  return lista;
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
