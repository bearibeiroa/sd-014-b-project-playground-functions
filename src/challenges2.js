// Desafio 10
function techList(techIn, nameIn) {
  let objectOut = [];
  if (techIn.length === 0) {
    return 'Vazio';      
  } 
  techIn.sort();

  for (let i = 0; i < techIn.length; i += 1){
    objectOut.push({tech:techIn[i], name: nameIn})
  } return objectOut;
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
