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

function contadorDeNumeros(phone) {
  for (let index = 0; index < phone.length; index += 1){
    switch (phone) {
      case phone[index] === 1:
        contador
    }
  }

}
function numeroMenorQueZero(phone) {

}
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
function hydrate(quantidadesDeBebida) {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
