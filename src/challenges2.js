// Desafio 10
function techList(tech, name) {
  let list = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index of tech.sort()) {
    list.push (
    {
      tech: index,
      name: name,
    });
    }
    return list;
}
// Resolvido em sala de estudo mais essa documentação (http://leandrolisura.com.br/verificando-empty-em-javascript/)

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
