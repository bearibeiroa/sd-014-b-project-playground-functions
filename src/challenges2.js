// Desafio 10
function techList(technologies, name) {
  let newList = [];
  technologies.sort();
  if (technologies.length !== 0) {
    for (let i = 0; i < technologies.length; i += 1) {
      newList.push({ tech: technologies[i], name: name });
    }
  } else {
    newList = 'Vazio!';
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(phoneNumbers) {

  let number = '(';
  let repeatNumber = 0;
  let generate = true;
  let stopForRepeat = false;

  if (phoneNumbers.length === 11) {
    // Verifica se tem algum numero que repete mais ou igual a 3 vezes
    for (let i = 0; i < phoneNumbers.length; i++) {
      for (let k = 0; k < phoneNumbers.length; k++) {
        if (phoneNumbers[i] === phoneNumbers[k]) {
          repeatNumber++;
        }
      }
      if (repeatNumber >= 3) {
        stopForRepeat = true;
        i = phoneNumbers.length;
      }
      repeatNumber = 0;
    }
    // Verifica todos os requisitos
    for (let i = 0; i < phoneNumbers.length; i++) {
      if (phoneNumbers[i] < 0 || phoneNumbers[i] > 9 || stopForRepeat) {
        number = 'não é possível gerar um número de telefone com esses valores';
        generate = false;
      }  
    }
    // Verifica se pode transformar a array em um numero de telefone
    if (generate) {
      for (let i = 0; i < phoneNumbers.length; i += 1) {
        if (i < 2) {
          number += phoneNumbers[i];
        } else if (i == 2) {
          number += (') ' + phoneNumbers[i]);
        } else if (i > 2 && i < 7) {
          number += phoneNumbers[i];
        } else if (i == 7) {
          number += ('-' + phoneNumbers[i]);
        } else {
          number += phoneNumbers[i];
        }
      }
    }
  } else {
    number = 'Array com tamanho incorreto.';
  }
  return number;
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
