// Desafio 10
function techList(arrInput, name) {
  let array = Array.from(arrInput);
  array.sort();
  if (array.length <= 0) {
    return 'Vazio!';
  } else {
    let newObj = [];
    for (let i = 0; i < array.length; i += 1) {
      newObj.push({ tech: array[i], name: name });
    }
    return newObj;
  }
}

// Desafio 11
function generatePhoneNumber(numberInput) {
  if (numberInput.length < 11 || numberInput.length > 11) {
    return 'Array com tamanho incorreto.';
  } else if (
    numberInput.every(function chNum(value) {
      return value > 9 || value < 0;
    })
  ) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let current = '';
    let repetitions = 0;
    for (let i = 0; i < numberInput.length; i += 1) {
      for (let i2 = 0; i2 < numberInput.length; i2 += 1) {
        if (numberInput[i2] === numberInput[i]) {
          repetitions += 1;
        }
      }
      if (repetitions >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        let phoneNumber = '(' +numberInput[0] +numberInput[1] +') ' +numberInput[2] +numberInput[3]+numberInput[4]+numberInput[5] + numberInput[6] + '-' +numberInput[7] +numberInput[8] +numberInput[9] +numberInput[10];
        return phoneNumber;
      }
    }
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

// Foi consultado a documentação do JavaScript no site https://www.w3schools.com/js/ e no site
// https://developer.mozilla.org/en-US/docs/Web/JavaScript, também consultei o stackoverflow e
// descobri o comando: Array.from()

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
