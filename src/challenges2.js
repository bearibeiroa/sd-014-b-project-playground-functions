// Desafio 10
function techList(tech, name) {
  // criar um array vazio
  // criar um objeto vazio
  // o for vai jogar dentro do objeto
     tech.sort();
     let listOfTechs = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index of tech) {
    listOfTechs.push({'tech':index, 'name':name});
    
  }
  return listOfTechs;
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
