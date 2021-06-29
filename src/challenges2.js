// Desafio 10
function techList(lista, name) {
  let sort = lista.sort();
  let nicolasLista = [];
  for (index in sort) {
    nicolasLista.push({'tech' : sort[index] , 'name' : name});
  }
  return nicolasLista.sort();
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Nicolas"));

// Desafio 11
function generatePhoneNumber(onzeNumeros) {
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
