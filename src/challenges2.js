// Desafio 10
let test = [];
function techList(array, name) {
  let objectList = [];
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      objectList.push({ tech: array[index], name: name,});
    }
    return objectList.sort(function(a, b) {
      let nameA = a.tech.toUpperCase();
      let nameB = b.tech.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  return 'Vazio!';
}

console.log(techList(test, 'Lucas'));

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
