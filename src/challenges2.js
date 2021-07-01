// Desafio 10
function techList(tech, name) {
  let listTech = [];
  let tecno = {
    tech: '',
    name: '' };
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  } for (key of tech) {
    listTech.push(tech = {
      tech: key,
      name });
  }
  return listTech;
}

// Desafio 11

function generatePhoneNumber(phoneNumber) {
  let number = '';

  if (phoneNumber.length !== 11) {
    return number = 'Array com tamanho incorreto.';
  }

  phoneNumber.unshift('(');
  phoneNumber.splice(3, 0, ') ');
  phoneNumber.splice(9, 0, '-');

  for (let key = 0; key < phoneNumber.length; key += 1) {
    number += phoneNumber[key];
    if (phoneNumber[key] < 0 || phoneNumber[key] > 10) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    for (let index = 0; index < phoneNumber.length; index += 1) {
      let repeatNumbers = 0;
      for (let indexDentro = 0; indexDentro < phoneNumber.length; indexDentro += 1) {
        if (phoneNumber[index] === phoneNumber[indexDentro]) {
          repeatNumbers += 1;
        }
        if (repeatNumbers > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
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
