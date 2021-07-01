// Desafio 10
function techList(techs, name) {
  // seu código aqui
  let newArray = [];
  techs.sort();
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index of techs) {
    newArray.push({
      tech: index,
      name,
    });
  }
  return newArray;
}

// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(number) {
  // Verifica se o array tem tamanho diferente de 11
  let phone = '';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // Verifica se o array  possui números maiores que 9 ou negativos
  for (let index of number) {
    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Verifica se algum número é menor que zero
  for (let index of number) {
    let times = 0;
    // Verifica se o número repete por mais de 3 vezes
    for (let index1 of number) {
      if (index === index1) {
        times += 1;
        if (times === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        } 
      } 
    }
  }
  // imprime o número
  for (let cont in number) {
    if (cont === '0') {
      phone += (`(${number[cont]}`);
    } else if (cont === '1') {
      phone += (`${number[cont]}) `);
    } else if (cont === '7') {
      phone += (`-${number[cont]}`);
    } else {
      phone += (number[cont]);
    }
  } return phone;
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
