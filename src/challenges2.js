// Desafio 10
function techList(array, name) {
  let newArray = array.sort();
  let objectArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < newArray.length; index += 1) {
      let object = {
        tech: newArray[index],
        name: name,
      };
      objectArray.push(object);
    }
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let counter = 0;
  if (array.length > 11 || array.length < 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 9 || array[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      counter = 0;
      for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
        if (array[index] === array[secondIndex]) {
          counter += 1;
          if (counter >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
    let number = '(' + array[0] + array [1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
    return number;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumLineAB = lineA + lineB;
  let sumLineAC = lineA + lineC;
  let sumLineBC = lineB + lineC;
  let difLineAB = Math.abs(lineA - lineB);
  let difLineAC = Math.abs(lineA - lineC);
  let difLineBC = Math.abs(lineB - lineC);
  if (lineC < sumLineAB && lineB < sumLineAC && lineA < sumLineBC && lineC > difLineAB && lineB > difLineAC && lineA > difLineBC) {
    return true;
  } else {
    return false;
  }
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
