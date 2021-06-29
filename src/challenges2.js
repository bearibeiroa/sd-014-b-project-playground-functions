// Desafio 10
function techList(techs, nome) {
  let objArray = [];
  for (let x of techs.sort()) {
    let object = {
      tech: x,
      name: nome,
    };
    objArray.push(object);
  }
  return objArray.length === 0 ? 'Vazio!' : objArray;
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
