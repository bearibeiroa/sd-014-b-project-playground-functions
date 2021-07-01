// Desafio 10
function techList(tech, name) {
  let listTech = [];
  let tecno = {
    tech: '',
    name: '' };
  tech.sort();

  {
    return 'Vazio!';
    if (tech.length === 0) {
    } for (key of tech) {
      listTech.push(tech = {
        tech: key,
        name });
    }
    return listTech;
  }
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
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;

  if (lineC > sumAB) {
    return false;
  }
  if (lineB > sumAC) {
    return false;
  }
  if (lineA > sumBC) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let number = 0;
  let umNove = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Coded by Victor Martins
  for (let key of string) {
    for (let index = 0; index <= umNove.length; index += 1) {
      if (umNove[index] == key) {
        number += umNove[index];
      }
    }
  }
  if (number == 1){
    return number + " copo de água"
  }
  return number + " copos de água"
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
