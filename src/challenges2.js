// Desafio 10
function techList(arrayTecnologies, name) {
  const tecnologies = [];
  const namePerson = name;
  let objectTecnology;

  if (arrayTecnologies.length === 0) return 'Vazio!';

  arrayTecnologies = arrayTecnologies.sort();
  for (let i = 0; i < arrayTecnologies.length; i += 1) {
    objectTecnology = {
      tech: arrayTecnologies[i],
      name: namePerson,
    };

    tecnologies.push(objectTecnology);
  }
  return tecnologies;
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
function hydrate(text) {
  let n = text.match(/\d+/g);
  const total = n.reduce(
    (currentTotal, item) => parseInt(item, 10) + currentTotal, 0,);
  return total > 1 ? `${total} copos de água` : `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
