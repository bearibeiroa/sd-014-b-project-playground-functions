// Desafio 10
function techList(tech, name) {
  let arrayObjetos = [];

  for (let i = 0; i < tech.length; i += 1) {
    arrayObjetos.push({
      tech: tech[i],
      name,
    });
  }

  arrayObjetos = arrayObjetos.sort((a, b) => (a.tech < b.tech ? -1 : true));

  return arrayObjetos.length === 0 ? 'Vazio!' : arrayObjetos;
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
