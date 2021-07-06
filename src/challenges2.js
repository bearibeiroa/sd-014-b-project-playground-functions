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
function hydrate(string) {
  let matches = string.match(/(\d+)/g);
  let matchesNum = [];
  for (let index = 0; index < matches.length; index += 1) {
    matchesNum[index] = +matches[index];
  }
  let sum = 0;
  for (let index = 0; index < matches.length; index += 1) {
    sum += matchesNum[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
 }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
