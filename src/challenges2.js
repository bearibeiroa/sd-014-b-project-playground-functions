// Desafio 10
function techList(tech, name) {
  if (tech.length == 0)
  {
    return "Vazio!";
  }
  tech.sort()
  resultado = [];
  for(let count =0; count< tech.length; count++) {
    resultado.push({tech: tech[count], name: name});
  }
  return resultado;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
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
