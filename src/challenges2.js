// Desafio 10
function techList(arrayTech, name) {
  let sortedList = arrayTech.sort();
  let newList = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let i in sortedList) {
    newList.push({ tech: sortedList[i], name });
  }
  return newList;
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
