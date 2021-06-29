// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort();
  let listTech = [];
  for (index in arrayTech) {
    let object = {
      tech: arrayTech[index],
      name: name
    }
    listTech.push(object);
  }
  if (listTech.length === 0) {
    return 'Vazio!'
  } else {
    return listTech;
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
