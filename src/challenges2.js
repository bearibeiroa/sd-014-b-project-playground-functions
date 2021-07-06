// Functions para ajudar no desafio #10.
// Function mount: Monta o array como a tecnologia e o nome passado no parâmetro.
function mount(array, paramName) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = {
      tech: array[index],
      name: paramName,
    };
  }

  return array;
}

// Function order: Ordena o array pela propriedade Tech.
function order(array) {
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   * Ordenados de acordo com o valor de uma de suas propriedades.
   * Comparando uma propriedade com outra.
   */
  return array.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  let arrayReady = mount(arrayTech, name);
  arrayReady = order(arrayReady);

  return arrayReady;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // seu código aqui
  let stringNumber = '(';
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
      if (arrayNumber[index] === arrayNumber[index2]) {
        cont += 1;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 2) {
      stringNumber += ') ';
    }
    if (index === 7) {
      stringNumber += '-';
    }
    stringNumber += arrayNumber[index];
  }

  return stringNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   * Para obter o valor absoluto de um número usando a function Math.abs
   */
  if (Math.abs(lineB - lineC) < lineA && lineA < lineB + lineC) {
    if (Math.abs(lineC - lineA) < lineB && lineB < lineA + lineC) {
      if (Math.abs(lineA - lineB) < lineC && lineC < lineB + lineA) {
        return true;
      }
    }
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  /**
   * Source: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
   * Usei a function replace() para procurar os numeros na string.
   * Source: https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript
   * Usei a function parseInt() para converter a string em um tipo inteiro.
   */
  let number = string.replace(/[^0-9]/g, '');
  let result = 0;
  for (let n of number) {
    result += parseInt(n);
  }

  if (result > 1) {
    return `${result} copos de água`;
  }
  return `${result} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
