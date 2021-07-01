// Desafio 10
function techList(tec,name) {
  let resposta = []

  for (let index = 0; index < tec.length; index += 1){
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
function generatePhoneNumber(phoneNumber) {

  if(phoneNumber.length < 11 || phoneNumber.length > 11) {
    return "Array com tamanho incorreto."
  }
  for(let index = 0; index < phoneNumber.length; index += 1) {
    let contador = 0
    for(let i = 0; i < phoneNumber.length; i+= 1 ) {
      if (phoneNumber[index] === phoneNumber[i]) {
        contador += 1
      }
    }
    if(phoneNumber[index] > 9 || phoneNumber[index] < 0 || contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }    
  }

  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`
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
