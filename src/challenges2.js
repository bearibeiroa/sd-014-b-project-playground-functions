// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techArray = [];
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!'
  }
  for (let t in tech) {
    techArray.push({
      tech: tech[t],
      name: name,
    })
  }
  return techArray

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
