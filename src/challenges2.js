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
function generatePhoneNumber(telephoneNumber) {
  // seu código aqui
  let retorno = '';
  //Confere se o número do telefone é válido
  if (telephoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of telephoneNumber){
    let contador = 0;
    for (let indice = 0; indice < telephoneNumber.length; indice += 1) {
      if (telephoneNumber[index] === telephoneNumber[indice]) {
        contador += 1;
      }
    }
    if (index < 0 || index > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  //Coloca o número de telefone no formato pedido
  for (let index = 0; index < telephoneNumber.length; index += 1) {
    if (index === 0) {
      retorno += `(${telephoneNumber[index]}`;
    } else if (index === 1) {
      retorno += `${telephoneNumber[index]}) `;
    } else if (index === 6) {
      retorno += `${telephoneNumber[index]}-`;
    } else retorno += telephoneNumber[index];
  }
  return retorno;
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
