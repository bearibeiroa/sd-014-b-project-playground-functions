// Desafio 10
function techList(tech, name) {
  tech.sort();
  function createObjects(tech, name) {
    this.tech = tech;
    this.name = name;
  }
  newList = [];
  for (let index = 0; index < tech.length; index += 1) {
    newList[index] = new createObjects(tech[index], name);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    return newList;
  }

}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

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
