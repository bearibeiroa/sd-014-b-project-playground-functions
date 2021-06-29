// Desafio 10
function techList(array, name) {
  let arrayOfObjects = []; 
  array.sort();
  if(array.length === 0){
    return 'Vazio!'
  } else{
    for (let technology of array) {
      arrayOfObjects.push({
        tech: technology,
        name: name,
      })
    }
  }
  
  return arrayOfObjects
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
