// Desafio 10
function techList(list, name) {
  let listOfTechs = list;
  let myArray = [];
  for (let key of listOfTechs.sort()) {
    myArray.push([{tech : key,
      myName : name
    }])  
  }
  return(myArray.length === 0 ? 'Vazio!': myArray);
}
console.log(techList(['HTML', 'CSS', 'JS', 'SQL', 'React', 'NodeJs', 'Mongo'],'Lucas'))
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
