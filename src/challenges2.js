// Desafio 10
function techList(list, nome) {
  // seu código aqui
  let result = [];
  let ordenaList = list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let value of ordenaList) {
    result.push({
      tech: value,
      name: nome,
    });
  }
  return result;
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
