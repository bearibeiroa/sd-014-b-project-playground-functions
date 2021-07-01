// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return "Vazio!"
  }
  let techName = []
  tech.sort()
  for (let i = 0; i < tech.length; i +=1) {
    let valor = tech[i]
    techName.push({
      tech: valor,
      name: name,
    })
  }
  return techName
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
        celular += + cel[i] + ") "
        break
      
      case 6:
        celular += + cel[i] + "-"
        break

      default:
        celular += cel[i]
    }
  }
  return celular
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB
  let sumAC = lineA + lineC
  let sumBC = lineB + lineC
  let difAB = Math.abs(lineA - lineB)
  let difAC = Math.abs(lineA - lineC)
  let difBC = Math.abs(lineB - lineC)

  if ( lineC > sumAB || lineC < difAB) {
    return false
  }
  if ( lineB > sumAC || lineB < difAC) {
    return false
  }
  if (lineA > sumBC || lineA < difBC) {
    return false
  }
return true

}


// Desafio 13
function hydrate(bebida) {
  let numBebida = bebida.replace(/\D/gim, '')
  let soma = 0
  for (let i = 0; i < numBebida.length; i +=1) {
    let num = parseInt(numBebida[i])
    if (num !== 0){
      soma += num
    }
  }
  if (soma === 1){
  return soma + " copo de água"
  } else {
    return soma + " copos de água"
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
