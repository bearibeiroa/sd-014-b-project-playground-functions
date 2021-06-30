// Desafio 10
function techList(tech, nome) {
  let listTech = [];
  tech.sort();
  if (tech.length > 0) {
    // eslint-disable-next-line guard-for-in
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
