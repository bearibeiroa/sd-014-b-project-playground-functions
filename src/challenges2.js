// Desafio 10
function techList(tech, nome) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech = tech.sort();
  for (let index = ; index < tech.length; index -= 1) {
    let technology = {
      tech: tech[index],
      name: nome,
    };
    return technology;
  }
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
