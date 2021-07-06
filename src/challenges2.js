// Desafio 10
function techList(techs, nome) {
  // seu código aqui
  let lista = [];
  if (techs.length === 0) { return ('Vazio!'); }
  if (techs.length !== 0) {
    techs = tech.sort();
    console.log(techs);
    for (let index = 0; index < techs.length; index += 1) {
      lista[index] = {
        tech: techs[index],
        name: nome,
      };
    }
  } return lista;
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
