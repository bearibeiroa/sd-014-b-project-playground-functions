// Desafio 10
function techList(array, name) {
  let novaArray = [];
  for(let palavra of array){
    let objeto = {
        tech: palavra,
        name: name, 
      };
      novaArray.push(objeto);
  }
  return novaArray;
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
