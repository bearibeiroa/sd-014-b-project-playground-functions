// Desafio 10
function techList(tech1, nome) {
  if (tech1.length === 0) {
    return 'Vazio!';
  }
  let aux = tech1.length;
  tech1 = tech1.sort();

  let technology = {
    tech: '',
    name: '',
  };

  for (let key = 0; key < aux; key += 1) {
    technology.tech = tech1[key];
    technology.name = nome;
    return technology;
  }
}

// Desafio 11
function lengthVerificator(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
}
function biggerAndSmaller(phone) {
  for (let index = 0; index < phone.length; index += 1) {
    if (phone[index] > 9 || phone[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function phoneNumber(phone) {
  let num = '(';
  for (let index = 0; index < phone.length; index += 1) {
    if (index === 2) {
      num = `${num}) ${phone[index]}`;
      index += 1;
    }
    if (index === 7) {
      num = `${num}-${phone[index]}`;
      index += 1;
    }
    num += phone[index];
  }
  return num;
}
function conterNumbers(phone) {
  for (let index = 0; index < 9; index += 1) {
    let contador = 0;
    for (let aux = 0; aux < phone.length; aux += 1) {
      if (phone[aux] === index) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
}

function generatePhoneNumber(phone) {
  if (lengthVerificator(phone) !== undefined) {
    return lengthVerificator(phone);
  }
  if (biggerAndSmaller(phone) !== undefined) {
    return biggerAndSmaller(phone);
  }
  if (conterNumbers(phone) !== undefined) {
    return conterNumbers(phone);
  }
  if (phoneNumber(phone) !== undefined) {
    return phoneNumber(phone);
  }
 }

// Desafio 12
// comando Math.abs explicado no arquivo challenges, desafio 7.
function triangleCheck(lineA, lineB, lineC) {
  let ab = Math.abs(lineA + lineB);
  let ac = Math.abs(lineA + lineC);
  let bc = Math.abs(lineB + lineC);
  if (lineA < bc && lineB < ac && lineC < ab) {
    return true;
  }
  return false;
}

// Desafio 13
// função parseInt(string, base) serve para converter uma string em número, referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function hydrate(quantidadesDeBebida) {
  let contador = 0;
  for (let index = 0; index < quantidadesDeBebida.length; index += 1) {
    if (quantidadesDeBebida[index] >= 1 && quantidadesDeBebida[index] <= 9) {
      contador += parseInt(quantidadesDeBebida[index], 10);
    }
  }
  if (contador === 1) {
    return '1 copo de água';
  }
  let retorno = `${contador} copos de água`;
  return retorno;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
