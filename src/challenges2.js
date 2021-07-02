// Desafio 10
function techList(techList, name) {
  let list = []
  let techListSort = techList.sort()
  if (techList.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < techList.length; index += 1) {
    list.push({
      tech: techListSort[index],
      name: name
    })
  }
  return list
}

// Desafio 11
function generatePhoneNumber(phone) {
  /* Retorna um erro se o tamanho do array estiver incorreto */
  if (phone.length != 11) {
    return "Array com tamanho incorreto."
  }
  /* Verifica se o número é menor que 0 ou maior que 9 */
  for (let index = 0; index < phone.length; index += 1) {
    if (phone[index] < 0 || phone[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }

  }
  /* Verifica se algum número se repete 3 vezes */
  for (let index = 0; index < phone.length; index += 1) {
    let counter = 0;
    for (let contIndex = 0; contIndex < phone.length; contIndex += 1) {
      if (phone[index] == phone[contIndex]) {
        counter += 1;
        if (counter >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
  }
  return '(' + phone[0] + phone[1] + ') ' + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + '-' + phone[7] + phone[8] + phone[9] + phone[10]
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAB = lineA + lineB;
  let lineBC = lineB + lineC;
  let lineAC = lineA + lineC;

  if (lineA > lineBC || lineB > lineAC || lineC > lineAB){
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)){
    return false;
  } else if (lineA < lineBC && lineA > Math.abs(lineB - lineC)){
    return true;
  } else if (lineB < lineAC && lineB > Math.abs(lineA - lineC)){
    return true;
  } else if (lineC < lineAB && lineC > Math.abs(lineA - lineB)){
    return true;
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
