// Desafio 10
function techList(tech, name) {
  let techsToLearn = [];
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let value of tech) {
   techsToLearn.push({
     tech: value,
     name: name,
   });
  }
  return techsToLearn;
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
