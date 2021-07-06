// Desafio 10
function techList(techy, name) {
  // seu código aqui
  let lista = [];
    for (index = 0; index < techy.length; index += 1) {
        lista.push( 
          techs = { tech: techy.sort()[index],
                    names: name
          }
        )
      }
      if (techy.length === 0){
       return 'Vazio!'
      } else {
  }
    return lista
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
function hydrate(drinks) {
  // seu código aqui

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
};
