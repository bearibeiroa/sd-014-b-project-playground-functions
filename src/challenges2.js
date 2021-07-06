// Desafio 10
function techList(tech, name) {
  // criar um array vazio
  // criar um objeto vazio
  // o for vai jogar dentro do objeto
  tech.sort();
  let listOfTechs = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index of tech) {
    listOfTechs.push({'tech':index, 'name':name});
  }
  return listOfTechs;
}
// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
 
  if (number.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of number) {
    if (number[index] < 0 || number[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let num of number) {
    let counter = 0;
    for (indexcounter of number) {
      if (num === indexcounter) {
        counter += 1;
      } if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    }
  } return '('+ number[0] + number[1] + ') ' + number[2]  + number[3]  + number[4]  + number[5]  + number[6]  +'-' + number[7]  + number[8]  + number[9]  + number[10];
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
