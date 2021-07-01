// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(cel) {
  if (cel.length !== 11) {
    return "Array com tamanho incorreto."
  } else {for (let i = 0; i < cel.length; i += 1) {
    if (cel[i] < 0 || cel [i] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
      }
    }
  } 
  for (let i = 0; i < cel.length; i += 1) {
    let qntNum = 0
    for (let index = 0; index < cel.length; index += 1) {
      if (cel[i] === cel[index]) {
        qntNum +=1
      }
      if (qntNum >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  let celular = ""
  for (let i = 0; i < cel.length; i += 1) {
    switch (i) {
      case 0:
        celular = "(" + cel[i]
        break

      case 1:
        celular = celular + cel[i] + ") "
        break
      
      case 6:
        celular = celular + cel[i] + "-"
        break

      default:
        celular += cel[i]
    }
  }
  return celular
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
