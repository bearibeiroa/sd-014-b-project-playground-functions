// Desafio 10

function techList(techArray, name) {
  let listaTechName = [];
  for (let index = 0; index < techArray.length; index += 1) {
    let objetoTechName = { tech: techArray[index], name: name };
    listaTechName.push(objetoTechName);
  }
  if (listaTechName.length === 0) {
    return 'Vazio!';
  }
  return listaTechName.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
    // Referência para a linha acima: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
}

let testArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let testArray2 = [];
let nomeArray = "Lucas";
console.log(techList(testArray2, nomeArray));
console.log(techList(testArray, nomeArray));

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
