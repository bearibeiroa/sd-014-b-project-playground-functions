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
  let answer = "";
  if (numeros.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let indice in numeros) {
    if (numeros[indice] > 9 || numeros[indice] < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else {
      let contador = 0;
      for (let index in numeros) {
        if (numeros[indice] === numeros[index]) {
          contador += 1;
        }
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
  }
  els = numeros.join('')
  // join Fonte: https://metring.com.br/javascript-converter-array-em-string
  part2 = Math.ceil((els.length / 2))
  answer = "(" + els.substr(0, 2) + ")" + " " + els.substr(2, 5) + "-" + els.substr(part2 + 1);
  // substr Fonte: https://pt.stackoverflow.com/questions/13738/adicionar-caractere-no-meio-de-uma-string
  return answer;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
function hydrate(string) {
  let numbers = /[0-9]/g;
  let result = string.match(numbers);
  let number = 0;
  for (let index in result) {
    number = number + parseInt(result[index]);
    // Fonte parseInt: https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript
  }
  water = number.toString();
  // Fonte toString(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  if (number === 1) {
    glassesOfWater = water + " copo de água"
  } else {
    glassesOfWater = water + " copos de água"
  }
  return glassesOfWater;
}
console.log(hydrate("1 cachaça"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
