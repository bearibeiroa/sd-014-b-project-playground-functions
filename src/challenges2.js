// Desafio 10
function techList(tech, name) {
  let result = [];
  tech.sort();
  for (let index in tech) {
    let list = {
      tech: tech[index],
      name: name,
    }
    result.push(list);
  }
  if (tech.length <= 0) {
    return 'Vazio!';
  } else {
    return result;
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
