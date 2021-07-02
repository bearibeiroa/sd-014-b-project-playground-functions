// Desafio 10
function techList(tech, name) {
  let lista = [];

  if (tech.length <= 0) {
    return 'Vazio!';
  }

  tech = tech.sort();
  
  for (let index in tech) {
    lista.push(
      object = {
        name: name,
        tech: tech[index]
      }
    );
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
function hydrate(string) {
  let waterNeed = 0;
  for (let caracter in string) {
    if (isNaN(parseInt(string[caracter])) === false ) {
      waterNeed += parseInt(string[caracter]);
    }
  }
  if (waterNeed <= 1) {
    waterNeed = waterNeed + ' copo de água';
  } else {
    waterNeed = waterNeed + ' copos de água';
  }
  return (waterNeed);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
