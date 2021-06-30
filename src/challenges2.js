// Desafio 10
function techList(list, nome) {
  let returnObject = [];
  let orderedList = list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < list.length; index += 1) {
    returnObject.push(
      {
        tech: orderedList[index],
        name: nome,
      },
    );
  }
  return returnObject;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let phone1 = '';
  let phone2 = '';
  let phone3 = '';
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phone.length; index += 1) {
    if (index < 2) {
      phone1 += phone[index];
      console.log(phone[index]);
    } else if (index < 7) {
      phone2 += phone[index];
    } else {
      phone3 += phone[index];
    }
  }
  let orderedNumber = phone.sort();
  for (let index = 0; index < orderedNumber.length; index += 1) {
    if (orderedNumber[index] < 0 || orderedNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (orderedNumber[index] === orderedNumber[index + 1] && orderedNumber[index + 1] === orderedNumber[index + 2]) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return '(' + phone1 + ') ' + phone2 + '-' + phone3;
}

// Desafio 12
function triangleCheck(a, b, c) {
  let checkA = a < b + c && a > Math.abs(b - c);
  let checkB = b < a + c && b > Math.abs(a - c);
  let checkC = c < b + a && c > Math.abs(b - a);
  return checkA && checkB && checkC;
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
