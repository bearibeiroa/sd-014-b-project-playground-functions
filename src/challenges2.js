// Desafio 10
function techList(techs, name) {
  let listedTechs = [];
  let ordTechs = techs.sort();
  if (techs.length < 1) return 'Vazio!';
  for (let index in ordTechs) {
    techList.push({
      tech: ordTechs[index],
      name: name,
    });
  }
  return listedTechs;
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 9) return 'não é possível gerar um número de telefone com esses valores';
    let numberX = 1;
    for (let indexN = 0; indexN < number.length; indexN += 1) {
      if (number[index] === number[indexN]) {
        numberX += 1;
      }
      if (numberX > 3) return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  var phoneNumber = ['(nn) nnnnn-nnnn']
  for (let index = 0; index < phoneNumber.length; index += 1) {
    phoneNumber = phoneNumber.replace('n', number[index]);
  } return phoneNumber;
  // seu código aqui
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
