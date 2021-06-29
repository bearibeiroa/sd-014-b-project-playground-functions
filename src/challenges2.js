// Desafio 10
function techList(techArray, name) {
  if (techArray === []) {
    return 'Vazio!';
  } else {
    let listaTechName = [];
    for (let key in techArray) {
      let objetoTechName = {
        tech: techArray[key],
        name: name
      }
      listaTechName.push(objetoTechName);
    }
    return listaTechName.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
    //Referência para a linha acima: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
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
