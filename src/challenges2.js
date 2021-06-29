// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  let arrayInfo = [];
  if (techArray.length === 0) {
    arrayInfo = 'Vazio!';
  } else {
    let info = {
    };
    for (let index of techArray) {
      info = {
        tech: index,
        name: name,
      };
      arrayInfo.push(info);
    }
  }
  return arrayInfo;
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
