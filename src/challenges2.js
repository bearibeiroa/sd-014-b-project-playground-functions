// Desafio 10
function techList(techs, name) {
  let techList = [];
  let ordTechs = techs.sort();
  if (techs.length < 1) return 'Vazio!';
  for (let index in ordTechs) {
    techList.push({
      tech: ordTechs[index],
      name: name,
    });
  }
  return techList;
  // seu código aqui
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
