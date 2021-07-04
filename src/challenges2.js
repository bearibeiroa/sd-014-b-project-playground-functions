// Desafio 10
function techList(tech, name) {
  let list = [];
  let sortList = tech.sort()
  if (Object.values(sortList).length === 0) {
    list = 'Vazio!'
  }
  // Fonte Object.values: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  for (let prop in sortList) {
    if (Object.values(sortList).length !== 0) {
      list.push({tech: sortList[prop], name: name})
    }
  }
  return list;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Humberto"))

// Desafio 11
function generatePhoneNumber(numeros) {
  var numbersSize = numeros.length;
  let answer = "";
  if (numbersSize > 11 || numbersSize < 11) {
    answer =  "Array com tamanho incorreto.";
  }
  for (let index in numeros) {
    if (numeros[index] > 9 || numeros[index] < 0) {
      answer = "não é possível gerar um número de telefone com esses valores"
    }
  }
  ale = [];
  els = "";
  let part = "";
  let numb = "";
  for (let index = 0; index < 11; index += 1) {
    var randomnum = numeros[Math.floor(Math.random() * numeros.length)]
    ale.push(randomnum)
    els = ale.join('')
    // join Fonte: https://metring.com.br/javascript-converter-array-em-string
    part2 = Math.ceil((els.length / 2))
    answer = "(" + els.substr(0, 2) + ")" + els.substr(0, part2 - 1) + "-" + els.substr(part2 + 1);
    // substr Fonte: https://pt.stackoverflow.com/questions/13738/adicionar-caractere-no-meio-de-uma-string
  }
  let contNumero = 0;
  for (let indice in numeros) {
    let verificaNumero = numeros[indice];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero >= 3) {
      answer = "não é possível gerar um número de telefone com esses valores";
      break;
    }
  }
  return answer;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 0, 2]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = 0;
  if (Math.abs(lineB - lineC) < lineA && lineA < (lineB + lineC)) {
    check = true;
  } else if (Math.abs(lineA - lineC) < lineB && lineB < (lineA + lineC)) {
    check = true;
  } else if (Math.abs(lineA - lineB) < lineC && lineC < (lineA + lineB)){
    check = true;
  } else {
    check = false;
  }
  return check;
}
console.log(triangleCheck(9, 8, 7))

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
