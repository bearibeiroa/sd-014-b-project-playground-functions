// Desafio 10
function techList(tech, name) {
  let list = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index of tech.sort()) {
    list.push(
      {
        tech: index,
        name: name,
      });
  }
  return list;
}
// Resolvido em sala de estudo com ajuda da seguinte documentacao (http://leandrolisura.com.br/verificando-empty-em-javascript/)

// Desafio 11
function generatePhoneNumber(arrayNumbers) {

  let resultado;

  if (arrayNumbers.length != 11) {
    resultado = 'Array com tamanho incorreto.';

  } else {
    
    for (let index = 0; index < arrayNumbers.length; index += 1) {
        
       let soma = 0;
        for (let i = 0; i < arrayNumbers.length; i += 1) {
            if (arrayNumbers[index] === arrayNumbers[i]) {
                soma += 1;
            };
            if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || soma >= 3) {
              resultado = 'não é possível gerar um número de telefone com esses valores';
        };
        }
    };
    resultado = '(' + arrayNumbers[0] + arrayNumbers[1] + ') ' + arrayNumbers[2] + arrayNumbers[3] + arrayNumbers[4] + arrayNumbers[5] + arrayNumbers[6] + '-' + arrayNumbers[7] + arrayNumbers[8] + arrayNumbers[9] + arrayNumbers[10];
  };
return resultado;
}
  
  
  /* {
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
      } else {
        for (let i = 0; i < arrayNumbers.length; i += 1) {
          if (arrayNumbers[index] === arrayNumbers[i]) {
            soma += 1;
          }
        }
      }
    }
    if (soma > 2) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    }
    else {
      resultado = '(' + arrayNumbers[0] + arrayNumbers[1] + ') ' + arrayNumbers[2] + arrayNumbers[3] + arrayNumbers[4] + arrayNumbers[5] + arrayNumbers[6] + '-' + arrayNumbers[7] + arrayNumbers[8] + arrayNumbers[9] + arrayNumbers[10];
    }
  } 
   return resultado;
}*/
 

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