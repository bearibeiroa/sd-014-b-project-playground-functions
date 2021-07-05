// Desafio 10
function techList(techs, nome) {
  let objectArray = [];
  for (let y of techs.sort()) {
    let object = {
      tech: y,
      name: nome,
    };
    objectArray.push(object);
  }
  return objectArray.length === 0 ? 'Vazio!' : objArray;
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
