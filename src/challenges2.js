// Desafio 10
function techList() {
  // seu código aqui
  let novaArray = array.sort();
  let objectArray = [];
  
  if (array.length === 0){
    return "Vazio!";
  }
  else {
    for (let index = 0; index < novaArray.length; index += 1){
      let objeto = {
        tech: novaArray[index],
        name: name
      };
      objectArray.push(objeto);
    }
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
