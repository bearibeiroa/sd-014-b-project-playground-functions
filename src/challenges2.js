// Desafio 10
function techList(tech, name) {
  let techToLearn = tech.sort();
  let resultado = [];
  if (techToLearn.length === 0) {
    return 'Vazio!';
  }
  for (let index of techToLearn) {
    let objeto = {
      tech: index,
      name: name,
    };
    resultado.push(objeto);
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber() {
  let resultado = '';
  
  return
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

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
