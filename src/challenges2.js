// Desafio 10
function techList(techs, name) {
  let listOfTechs = [];
  let techOrder = techs.sort();
  if (techs.length === 0){
    return "Vazio!"
  }
  else {
    for(let index in techOrder){
      listOfTechs.push({
        tech: techOrder[index],
        name: name
      })
    }
    return listOfTechs;
  }
}
console.log(techList(["CSS", "HTML", "React", "JavaScript"], "Renata"));

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
