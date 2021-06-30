// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort();
  let listTech = [];
  for (index in arrayTech) {
    let object = {
      tech: arrayTech[index],
      name: name
    }
    listTech.push(object);
  }
  if (listTech.length === 0) {
    return 'Vazio!'
  } else {
    return listTech;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let subLineA = Math.abs(lineB - lineC);
  let sumLineA = lineB + lineC;
  let sumLineB = lineA + lineC;
  let sumLineC = lineA + lineB;
  let subLineB = Math.abs(lineA - lineC);
  let subLineC = Math.abs(lineB - lineA);
  if ((subLineA < lineA && lineA < sumLineA) && (subLineB < lineB && lineB < sumLineB) && (subLineC < lineC && lineC < sumLineC)) {
    result = true;
  } 
  return result;
}
console.log(triangleCheck(10,14,8));

// Desafio 13
function hydrate(string) {
  let soma = 0;
  for (letter of string) {
    for (index = 1; index < 10; index += 1) {
      if (letter == index) {
        soma += index;
      }
    }
  }
  if (soma === 1) {
    return soma + ' copo de água'
  } else {
    return soma + ' copos de água'
  }
}
console.log(hydrate("1 cerveja, 3 vinhos"));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
