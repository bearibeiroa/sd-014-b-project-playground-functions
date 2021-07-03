// Desafio 10
function techList(technologies, name) {
  let newList = [];
  technologies.sort();
  if (technologies.length != 0) {
    for (let i = 0; i < technologies.length; i += 1) {
      newList.push({tech: technologies[i], name: name});
    }
    return newList;
  } else {
    return 'Vazio!';
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
