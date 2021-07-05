// Desafio 10

function techList(tech, name) {
  let techOrdened = tech.sort();
  let result = [];
  if (techOrdened.length === 0) {
    return 'Vazio!';
  }

  for (let index of techOrdened) {
    let object = {
      tech: index,
      name: name,
    };
    result.push(object);
  }
  return result;
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
