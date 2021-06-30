// Desafio 10
function techList(techs, names) {
  let result = [];
  techs.sort();
  for (let index in techs) {
    let list = {
      tech: techs[index],
      name: names,
    };
    result.push(list);
  }
  if (techs.length <= 0) {
    return 'Vazio!';
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
