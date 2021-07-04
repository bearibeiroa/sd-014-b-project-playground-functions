// Desafio 10
function techList(array, name) {
  // Para esse desafio usei uma função JS sort(), que organiza em ordem alfabética os itens de uma array. Source : https://www.w3schools.com/jsref/jsref_sort.asp
  if (array.length === 0) {
    return 'Vazio!';
  } 
  array.sort();
  let objects = [];
  for (let index = 0; index < array.length; index++) {
    objects.push({
      tech: array[index],
      name: name,
    })
  }
  return objects;
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
