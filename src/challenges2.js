// Desafio 10
function techList(tech, name) {
  let lista = [];

  if (tech.length <= 0) {
    return 'Vazio!';
  }

  tech = tech.sort();
  
  for (let index in tech) {
    lista.push(
      object = {
        name: name,
        tech: tech[index]
      }
    );
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(array) {
  // validando se array pode ser usado
  // se mais de 11 numeros tamanho incorreto
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  
  // numero deve ser maior que 0 e menor que 9
  for (let numero in array) {
    if (array[numero] < 0 || array[numero] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else {
      // numero não deve repetir 3x ou mais
      let count = 0;
      for (compare in array) {
        if (array[numero] === array[compare]) {
          count += 1;
        }
      }
      if (count >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  // array é valido vamos formata-lo:
  // array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');
  let phone = ''
  for (index in array) {
    phone += array[index]
  }
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
  if (lineA > lineB + lineC) {
    return false
  }
  if (lineB > lineA + lineC) {
    return false
  }
  if (lineC > lineA + lineB) {
    return false
  }
  
  // Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas
  if (lineA < Math.abs(lineB - lineC)) {
    return false
  }
  if (lineB < Math.abs(lineA - lineC)) {
    return false
  }
  if (lineC < Math.abs(lineA - lineB)) {
    return false
  }
  return true
}

// Desafio 13
function hydrate(string) {
  let waterNeed = 0;
  for (let caracter in string) {
    if (isNaN(parseInt(string[caracter])) === false ) {
      waterNeed += parseInt(string[caracter]);
    }
  }
  if (waterNeed <= 1) {
    waterNeed = waterNeed + ' copo de água';
  } else {
    waterNeed = waterNeed + ' copos de água';
  }
  return (waterNeed);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
