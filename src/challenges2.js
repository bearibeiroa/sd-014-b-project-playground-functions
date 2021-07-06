// Desafio 10
function techList(nomeTech, nome) {
  let result = [];
  let orderedList = nomeTech.sort();
  if (nomeTech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < orderedList.length; index += 1) {
    let object = {
      tech: '',
      name: nome,
    };
    object.tech = orderedList[index];
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
