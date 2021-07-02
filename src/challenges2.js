// Desafio 10
/**
 * Consultei a documentação do w3schools para compreender como funciona o metodo
 * de ordenação 'sort()' na qual eu o utilizei na linha 14 para ordenar 'arrayTecnologies'
 * Link: https://www.w3schools.com/js/js_array_sort.asp
 */
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
