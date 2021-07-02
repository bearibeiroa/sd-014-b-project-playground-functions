// Desafio 10
function techList(tech , name) {
  let result = [];
  tech.sort();

  for (let technology of tech) {
    let object = {
      tech: technology,
      name,
    };
    result.push(object);
  }

  if (tech.length === 0) {
    return 'Vazio!';
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
