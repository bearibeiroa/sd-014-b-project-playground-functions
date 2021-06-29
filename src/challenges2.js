// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    techs = techs.sort();
    let c = [];
    for (i = 0; i < techs.length; i += 1) {
        let a = {
            tech: techs[i],
            name: name
        }
        c.push(a);
    }
    return c;
  } else {
    return "Vazio!"
  }
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
