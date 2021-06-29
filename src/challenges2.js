// Desafio 10
function techList(arrayTech, stringName) {
  // seu código aqui
  arrayTech.sort();
  let arrayInfo = [];
  if (arrayTech.length === 0) {
    arrayInfo = 'Vazio!';
  } else {
    let info = {
    };
    for (let index of arrayTech) {
      info = {
        tech: index,
        name: stringName,
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
