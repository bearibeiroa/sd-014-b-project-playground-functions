// Desafio 10
function techList(tech, name) {
  // aplicar for in
  let techList = [];
  for (let index in tech.sort()) {
    let objetos = {
      tech: tech[index],
      name: name,
    }
    techList.push(objetos);
  }
  if (techList.length === 0) {
    return 'Vazio!';
  }
  return techList;
  //.push() para acrescentar os novos objetos na lista.
  //.sort() para ordenar os elementos da lista.
}

// Desafio 11
function generatePhoneNumber(arrayOfnumbers) {
  if (arrayOfnumbers.length > 11 || arrayOfnumbers.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  let counter = 0;
  for (let index = 0; index < arrayOfnumbers.length; index++) {

    for (number of arrayOfnumbers) {
      if (arrayOfnumbers[index] < 0 || arrayOfnumbers[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (arrayOfnumbers[index] === number) {
        counter++
      }
    }
    if (counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    counter = 0
  }
  return `(${arrayOfnumbers[0]}${arrayOfnumbers[1]}) ${arrayOfnumbers[2]}${arrayOfnumbers[3]}${arrayOfnumbers[4]}${arrayOfnumbers[5]}${arrayOfnumbers[6]}-${arrayOfnumbers[7]}${arrayOfnumbers[8]}${arrayOfnumbers[9]}${arrayOfnumbers[10]}`

}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let subtrationLineA = Math.abs(lineB - lineC);
  let subtrationLineB = Math.abs(lineA - lineC);
  let subtrationLineC = Math.abs(lineA - lineB);
  let sumLineA = lineB + lineC;
  let sumLineB = lineA + lineC;
  let sumLineC = lineA + lineB;
  let triangleResult = false;

  if (lineA > subtrationLineA && lineA < sumLineA && lineB > subtrationLineB && lineB < sumLineB && lineC > subtrationLineC && lineC < sumLineC) {
    triangleResult = true;
  }
  return triangleResult;

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
