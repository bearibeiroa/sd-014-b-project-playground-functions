// Desafio 10
function techList(namesTech, name) {
if (namesTech.length === 0) {
  return "Vazio!";
}

namesTech.sort();
let arrayTech = [];
 
 for (let index = 0; index < namesTech.length; index += 1) {
  arrayTech.push({
    tech: namesTech[index],
    name: name
  });
 }
 return arrayTech;
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
