// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  let techList = []; // Criei um array pra receber os vários objetos, podendo assim usar o .push
  if (techArray.length > 0){
    for (let i of techArray){
      techList.push({ tech: i, name: name }); // push só funciona para arrays, não objetos.
    }
  } else {
    return 'Vazio!'
  } 
  return techList;
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
