// Desafio 10
function techList(tech, name) {
  let techsToLearn = [];
  tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let value of tech) {
    techsToLearn.push({
      tech: value,
      name: name,
    });
  }
  return techsToLearn;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNum = '';

  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let value of numbers) {
      let currentNum = 0;

      if (value < 0 || value > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let value2 of numbers) {
        if (value2 == value) {
          currentNum += 1;
        }
        if (currentNum >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }

  numbers.unshift('('); //
  numbers.splice(3, 0, ') '); // coded by Victor Veloso, 14 B
  numbers.splice(9, 0, '-'); // with: https://developer.mozilla.org/pt-BR/docs/Web/ JavaScript/Reference/Global_Objects/Array/splice

  for (let value of numbers) {
    phoneNum += value;
  }
  return phoneNum;
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
