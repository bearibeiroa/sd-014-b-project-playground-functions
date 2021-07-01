// Desafio 10
function techList(techs, name) {
  let listedTechs = [];
  let ordTechs = techs.sort();
  if (techs.length < 1) return 'Vazio!';
  for (let index in ordTechs) {
    listedTechs.push({
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
  let a = number[0]; let b = number[1]; let c = number[2]; let d = number[3]; let e = number[4]; let f = number[5]; let g = number[6]; let h = number[7]; let i = number[8]; let j = number[9]; let k = number[10];
  let phoneNumber = '(' + a + b + ')' + ' ' + c + d + e + f + g + '-' + h + i + j + k;
  return phoneNumber;
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB))) {
    if ((lineA > (Math.abs(lineB - lineC))) && (lineB > (Math.abs(lineA - lineB))) && (lineC > (Math.abs(lineA - lineB))));
    return true;
  }
  return false;
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
