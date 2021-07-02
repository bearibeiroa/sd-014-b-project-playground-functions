// Desafio 10
function techList(array, pname) {
  let narray = [];
  for (let i of array.sort()) {
    let obj = {
      tech: i,
      name: pname,
    };
    narray.push(obj);
  }

  return narray.length === 0 ? 'Vazio!' : narray;
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
