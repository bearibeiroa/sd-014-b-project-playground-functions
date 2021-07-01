// Desafio 10
function techList(tech, name) {
  let techToLearn = tech.sort();
  let resultado = [];
  if (techToLearn.length === 0) {
    return 'Vazio!';
  }
  for (let index of techToLearn) {
    let objeto = {
      tech: index,
      name,
    };
    resultado.push(objeto);
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let contadorRepetidos = 0;
  let parte1 = '';
  let parte2 = '';
  let parte3 = '';
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    contadorRepetidos = 0;
    for (let posicao = 0; posicao < numbers.length; posicao += 1) {
      if (numbers[posicao] < 0 || numbers[posicao] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (numbers[index] === numbers[posicao]) {
        contadorRepetidos += 1;
      }
    }
    if (contadorRepetidos > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index < 2) {
      parte1 += numbers[index];
    } else if (index > 1 && index < 7) {
      parte2 += numbers[index];
    } else {
      parte3 += numbers[index];
    }
  }
  return `(${parte1}) ${parte2}-${parte3}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (eMenor(a, b, c) === true && difAbsMaior(a, b, c) === true) {
    return true;
  }
  return false;
}
function eMenor(a, b, c) {
  if (a > (b + c) || b > (a + c) || c > (a + b)) {
    return false;
  }
  return true;
}
function difAbsMaior(a, b, c) {
  if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
    return false;
  }
  return true;
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
