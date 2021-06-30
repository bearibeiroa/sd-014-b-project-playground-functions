// Desafio 10
function techList(list, nome) {
  let returnObject = [];
  let orderedList = list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < list.length; index += 1) {
    returnObject.push(
      {
        tech: orderedList[index],
        name: nome,
      },
    );
  }
  return returnObject;
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
