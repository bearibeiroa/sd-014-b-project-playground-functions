// Desafio 10
function techList(array, name) {
  let newArray = [];
  array.sort();

  if (array.length == 0){
    return 'Vazio!';
  } else {
    for (const key in array) {
      let obj = {
        name: name,
        tech: array[key]
      };
      newArray.push(obj);      
    }
    return newArray;
  }
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
