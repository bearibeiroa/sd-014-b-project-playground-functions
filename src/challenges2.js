// Desafio 10
function techList(tech, name) {
  let list = [];
  let sortList = tech.sort()
  if (Object.values(sortList).length === 0) {
    list = 'Vazio!'
  }
  for (let prop in sortList) {
    if (Object.values(sortList).length !== 0) {
      list.push({tech: sortList[prop], name: name})
    }
  }
  return list;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Humberto"))

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
