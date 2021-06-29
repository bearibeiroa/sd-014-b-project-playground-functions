// Desafio 10
function techList(techsArray, name) {
  let sortedArray = techsArray.sort();
  let objectArray = [];

  if (sortedArray.length === 0) {
    return "Vazio!"
  }
  
  for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    let object = {
      tech: element,
      name: name
    }
    objectArray.push(object)
  }

  return objectArray;
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
