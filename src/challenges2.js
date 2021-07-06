// Desafio 10
function techList(list, name) {
let lista;
list.sort();
if (list.length === 0) {
  lista = 'Vazio!';
} else {
lista = [];
for (let index = 0; index < list.length; index += 1) {
  lista.push({
    tech: list[index],
    name: name,
  });
}
}
return lista;
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
 
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
