// Desafio 10
function techList(techName, name) {
  let techListName = [];
  let ordTechList = techName.sort();
  if (techName.length === 0) {
    return ('Vazio!');
  } 
  for (let index = 0; index < ordTechList.length; index += 1) {
    let object = {
      tech: ' ',
      name: name,
    }
    object.tech = ordTechList[index];
    techListName.push(object);
  }
  return techListName;
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
