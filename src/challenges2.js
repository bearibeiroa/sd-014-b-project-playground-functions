// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let newTechList = [];
  for (let index of tech.sort()) {
    let objetoList = {};
    objetoList["tech"] = index;
    objetoList["name"] = name;
    newTechList.push(objetoList);
  }
  if (!newTechList.length) {
    //  informação encontrada no site cibersitemas.pt em como saber se um array está vazio usando !array.legnt para retornar um valor boleano true, caso não tenha eleementos dentro do array.
    return 'Vazio!';
  } 
    return newTechList;  
}

// Desafio 11
function generatePhoneNumber(numbersPhone) {
  // seu código aqui
  if (numbersPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of numbersPhone) {
    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index of numbersPhone) {
    //  verificando se o número repete 3 vezes ou mais.
    let repete = []; // criei um array para colocar o número caso ele se repita.
    for (let indexComparativo of numbersPhone) {
      if (index === indexComparativo) {
        repete.push(index);
      }
    }
    if (repete.length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${numbersPhone[0]}${numbersPhone[1]}) ${numbersPhone[2]}${numbersPhone[3]}${numbersPhone[4]}${numbersPhone[5]}${numbersPhone[6]}-${numbersPhone[7]}${numbersPhone[8]}${numbersPhone[9]}${numbersPhone[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let numerosBebidas = bebidas.match(/\d+/g); // extrair os todos os núemros da string
  let bebidasInteiras = [];
  let totalBebidas = 0;
  for (let index of numerosBebidas) {
    // transformar cada numero que ainda é string em Numbers Inteiros.
    bebidasInteiras.push(parseInt(index, 10));
  }
  for (let index of bebidasInteiras) {
    // fazer a somatória de quantas bebidas teve no total
    totalBebidas += index;
  }
  if (totalBebidas === 1) {
    return `${totalBebidas} copo de água`; // criar uma frase para o singular
  }
  return `${totalBebidas} copos de água`; // e outra para o plural.
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
