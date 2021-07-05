// Desafio 10
function techList(nomeTech, name) {
  
  // criar um array vazio
 // criar um objeto vazio
 // o for vai jogar dentro do objeto
 
  let nameListTech = {
    tech: 'CSS',
    name: 'Thiago',
    tech: 'Html',
    name: 'Thiago',
    tech: 'JavaScript',
    name: 'Thiago',
    tech: 'Jest',
    name: 'Thiago',
    tech: 'React',
    name: 'Thiago',
};
  
  for (let index in nameListTech) {
    return (index, nameListTech[index]);
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
