// Desafio 10
function techList(techList, name) {
  let arrayOfObjects = [];
  techList.sort();
  if (techList.length ===0) {
    return 'Vazio!';
  }

  for (index = 0; index < techList.length; index += 1) {
    let objectsList = {
      tech: '',
      name: name,
    };
    objectsList.tech = techList[index];
    arrayOfObjects.push(objectsList);
  }
  return arrayOfObjects;
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
