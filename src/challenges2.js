// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let objeto = [];
  let nome = name;
  if (tech.length == 0) {
    return 'Vazio!'
  } else {
    let tecnologias = tech.sort();
    for (i in tecnologias) {
      let objeto = {
        tech: tecnologias[i],
        name: nome
      }
      objeto.push(objeto);
    }
    return objeto;
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
