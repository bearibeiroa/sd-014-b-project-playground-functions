// Desafio 10
function techList(tech, nome) {
  // seu código aqui
  let arrayTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1){
    arrayTech.push({
    tech: tech[index],
    name: nome })
  }
  if (tech.length === 0){
    arrayTech = "Vazio!"
  }
  return arrayTech; 
}
// let tech = techList(["React", "HTML"], "Lucas");
// console.log(tech);
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
