// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techToTeach = tech.sort();
  let techItens = [];

  if (techToTeach.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techToTeach.length; index += 1) {
    let object = {
      tech: techToTeach[index],
      name: name 
    }

    techItens.push(object);
  }
  return techItens;
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
  let number = [...phone];
  let num = ["(", number[0], number[1],")", " ", number[2], number[3], number[4], number[5], number[6], "-", number[7], number[8], number[9], number[10]];
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < number.length; i += 1) {
      if (number[i] < 0 || number[i] > 9 ) {
        return 'não é possível gerar um número de telefone com esses valores' ;
      }
    }
    for (let i = 0; i < number.length; i += 1) {
      let repNum = 0;
      for (let index = 0; index < number.length; index += 1) {
        if (number[i] === number[index]) {
          repNum += 1;
        }
      }
      if (repNum > 2) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  return num.join('',',');
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
