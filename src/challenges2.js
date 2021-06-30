// Desafio 10
function techList(tech1, nome) {
  if (tech1.length === 0) {
    return 'Vazio!';
  }
  tech1 = tech1.sort();

  let technology = {
    tech: '',
    name: '',
  };

  for (let key = 0; key < tech1.length; key += 1) {
    technology.tech = tech1[key];
    technology.name = nome;
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
