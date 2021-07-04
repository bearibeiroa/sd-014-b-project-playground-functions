// Desafio 10
function techList(array, name) {
  // Para esse desafio usei uma função JS sort(), que organiza em ordem alfabética os itens de uma array. Source : https://www.w3schools.com/jsref/jsref_sort.asp
  if (array.length === 0) {
    return 'Vazio!';
  } 
  array.sort();
  let objects = [];
  for (let index = 0; index < array.length; index++) {
    objects.push({
      tech: array[index],
      name: name,
    })
  }
  return objects;
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';
  let ddd = '';
  let firstNumbers = '';
  let lastNumbers = '';
  let numeroRepetido = 0;
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < array.length; index++) {
    let numeroDeRepeticoes;
    if (array[index] === array[index+1] || numeroRepetido === array[index]) {
      numeroDeRepeticoes += 1;
      numeroRepetido += array[index];
    } else {
      numeroDeRepeticoes = 0;
      numeroRepetido = 0;
    }
    if (array[index] < 0 || array[index] > 9 || numeroDeRepeticoes >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let index = 0; index < 2; index++) {
    ddd += array[index];
  }
  phoneNumber += '(' + ddd + ')';
  for (let index = 2; index < 7; index++) {
    firstNumbers += array[index];
  }
  phoneNumber += ' ' + firstNumbers + '-';
  for (let index = 7; index < 11; index++) {
    lastNumbers += array[index];
  }
  phoneNumber += lastNumbers;
  return phoneNumber;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAPossibility;
  let lineBPossibility;
  let lineCPossibility;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    lineAPossibility = true;
  } 
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    lineBPossibility = true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    lineCPossibility = true;
  }
  if (lineAPossibility === true && lineBPossibility === true && lineCPossibility === true) {
    return true
  } else {
    return false
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
