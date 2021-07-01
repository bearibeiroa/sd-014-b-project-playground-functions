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
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phone.length; index += 1) {
    if (phone[index] > 9 || phone[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
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
