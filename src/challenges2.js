// Desafio 10
function techList(techList, name) {
  
  if (techList.length == 0) {
    return 'Vazio!';
  }
  
  let techObject = [];
  let sortedTechList = techList.sort();  
  for (let i = 0; i < sortedTechList.length; i++) {
    techObject[i] = {
      tech: sortedTechList[i],
      name: name
    };
  }
  return techObject;
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
