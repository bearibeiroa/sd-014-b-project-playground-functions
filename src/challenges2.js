// Desafio 10
function techList(array, name) {
  let list = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort().forEach((element) => {
    let varName = name;
    list.push({
      tech: element,
      name: varName,
    });
  });
  return list;
}

// Desafio 11
function isSizeIncorrect(array) {
  if (array.length !== 11) {
    return true;
  }
  return false;
}

// referência: https://stackoverflow.com/a/59573631
// usada para verificar quantas vezes um valor é repetido na array
function isValuesIncorrect(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (element < 0 || element > 9 || array.filter((x) => x === element).length >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(numbers) {
  if (isSizeIncorrect(numbers) === true) {
    return 'Array com tamanho incorreto.';
  }
  if (isValuesIncorrect(numbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let phoneNumber = '';
  numbers.forEach((element) => {
    phoneNumber += element;
  });
  let ddd = phoneNumber.substring(0, 2);
  let phoneNumberFront = phoneNumber.substring(2, 7);
  let phoneNumberBack = phoneNumber.substring(7);
  phoneNumber = `(${ddd}) ${phoneNumberFront}-${phoneNumberBack}`;
  return phoneNumber;
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
