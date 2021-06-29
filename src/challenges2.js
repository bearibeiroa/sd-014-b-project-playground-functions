// Desafio 10
function techList(techs, names) {
  techs.sort()
  let objeto = [];
  if (techs.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < techs.length; index += 1) {
    let objetoItem = {
      tech: techs[index],
      name: names
    }
    objeto.push(objetoItem)
  }
  return objeto
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
