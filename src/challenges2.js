// Desafio 10
function techList(tec,name) {
  let resposta = []

  for(index = 0; index < tec.length; index += 1){
    resposta.push(
      technology = {
        name: name,
        tech: tec.sort()[index]
      }
    )
  }

  if(tec.length === 0){
    return 'Vazio!'
  }
    return resposta
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
