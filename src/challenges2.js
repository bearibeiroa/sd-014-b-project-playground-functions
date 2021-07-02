// Desafio 10
function techList(tech, name) {
  // aplicar for in
  let techList = [];
  for (let index in tech.sort()) {
    let objetos = {
      tech: tech[index],
      name: name,
    }
    techList.push(objetos);
  }
  if (techList.length === 0) {
    return "Vazio!";
  }
    return techList;
  //.push() para acrescentar os novos objetos na lista.
  //.sort() para ordenar os elementos da lista.
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
