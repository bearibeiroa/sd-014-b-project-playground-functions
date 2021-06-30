// Desafio 10
function techList(techs, nome) {
  let objArray = [];
  for (let x of techs.sort()) {
    let object = {
      tech: x,
      name: nome,
    };
    objArray.push(object);
  }
  return objArray.length === 0 ? 'Vazio!' : objArray;
}

// Desafio 11
function hasElevenDigits(numbers) {
  return numbers.length === 11;
}

function repetitionCounter(numbers) {
  let obj = {};
  let quantity = [];
  numbers.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
    quantity.push(obj[element]);
  });
  return quantity.some((value) => value >= 3);
}

function isMoreThanNineOrLessThanZero(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(numbers) {
  if (!hasElevenDigits(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (isMoreThanNineOrLessThanZero(numbers) || repetitionCounter(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let ddd = `(${numbers[0]}${numbers[1]}) `;
  let firsPart = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-`;
  let lastPart = `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return `${ddd}${firsPart}${lastPart}`;
}

// Desafio 12
function hasLessThanSum(a, b, c) {
  let abs = Math.abs(b - c);
  return (a < b + c) && (a > abs);
}

function triangleCheck(lineA, lineB, lineC) {
  return hasLessThanSum(lineA, lineB, lineC)
  && hasLessThanSum(lineB, lineA, lineC)
  && hasLessThanSum(lineC, lineA, lineB);
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
