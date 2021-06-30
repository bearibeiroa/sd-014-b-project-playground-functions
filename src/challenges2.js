const { highestCount } = require('./challenges');

// Desafio 10
function techList(techs, names) {
  let techList = [];
  techs.sort();
  if (techs.length > 0) {
    for (let index in techs) {
      techList.push({
        tech: techs[index],
        name: names,
      });
    }
  } else {
    return 'Vazio!';
  }
  return techList;
}

// Desafio 11
function generatePhoneNumber(number) {
  let numberTel = '';
  let ocorrencia = (number);
  if (number.length != 11 || ocorrencia >= 3) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index of number) {
      if (index < 0 || index > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        numberTel += index;
      }
    }
    const numeroFormatado = numberTel.replace(
      /(\d{2})?(\d{5})?(\d{4})/,
      '($1)$2-$3'
    );
    return numeroFormatado;
  }
}
console.log(generatePhoneNumber([1, 11, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
