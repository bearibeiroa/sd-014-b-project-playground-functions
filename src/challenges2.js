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
    if (element < 0 || element > 9 || array.filter((x) => x === element).length >= 3
    ) {
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
function triangleCheck(lineA, lineB, lineC) {
  let deltaAB = Math.abs(lineA - lineB);
  let deltaAC = Math.abs(lineA - lineC);
  let deltaBC = Math.abs(lineB - lineC);
  let sideA = lineA < lineB + lineC && lineA > deltaBC;
  let sideB = lineB < lineA + lineC && lineB > deltaAC;
  let sideC = lineC < lineA + lineB && lineC > deltaAB;
  let sideABC = sideA + sideB + sideC;
  if (sideABC === 3) {
    return true;
  }
  return false;
  // return !!sideABC;
}

// Desafio 13
// referência: https://stackoverflow.com/a/56336929, uso de regex em = /\d+/g;
// O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão;
// \d Encontra correspondência com um número. Equivalente a [0-9];
// O método match() retorna uma correspondência entre uma string com uma expressão regular;
// referência para match(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match.

function hydrate(string) {
  let quantitySelector = /\d+/g;
  let quantity = string.match(quantitySelector);
  let glassesOfWater = 0;
  quantity.forEach((element) => {
    glassesOfWater += parseInt(element, 10);
  });
  if (glassesOfWater === 1) {
    return `${glassesOfWater} copo de água`;
  }
  return `${glassesOfWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
