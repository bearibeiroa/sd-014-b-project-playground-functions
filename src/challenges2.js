// Desafio 10
function techList(techs, name) {
  techs.sort();
  let result = [];

  for (element of techs) {
    result.push({'tech': element, 'name': name});
  }

  if (result.length == 0) { //se o array estiver vazio, retorna "Vazio!"
    return "Vazio!";
  } else {
    return result;
  }
}

// Desafio 11
function generatePhoneNumber(array) {

  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }

  for (let i = 0; i < array.length; i += 1) {

    if (array[i] < 0 || array [i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }

  }

  for (let i = 0; i < array.length; i += 1) {
    let contador = 0

    for (let number of array) { //verifica se o número atual de array[i] vai se repetir 3x ou mais.
      if (array[i] == number) {
        contador += 1;
      }
      if (contador >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
        
  return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
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
