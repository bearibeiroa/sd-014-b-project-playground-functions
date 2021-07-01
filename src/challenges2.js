// Desafio 10
function techList(array, name) {
  let newArray = array.sort();
  let objectArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  } for (let index = 0; index < newArray.length; index += 1) {
    let object = {
      tech: newArray[index],
      name: name,
    };
    objectArray.push(object);
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
  } return false;
}

// Desafio 13
function hydrate(string) {
  let regExp = /\d/g; /* Feito com auxílio do tutorial encontrado em https://www.youtube.com/watch?v=pfkkdzeyx6U */
  let array = string.match(regExp); /* O tutorial citado também ajuda nessa etapa, mas encontrei uma explicação mais detalhada em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match */
  let number = 0;
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    number = Number(array[index]); /* Retirado de https://www.w3schools.com/js/js_number_methods.asp */
    sum += number;
  }
  if (sum === 1) {
    return sum + ' copo de água';
  } return sum + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
