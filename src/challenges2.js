// Desafio 10
// Para criar nova lista em ordem crescente foi pesquisado o método sort() no site abaixo:
// Source: https://www.w3schools.com/jsref/jsref_sort.asp
function techList(techName, name) {
  let techListName = [];
  let ordTechList = techName.sort();
  if (techName.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < ordTechList.length; index += 1) {
    let object = {
      tech: ' ',
      name: name,
    };
    object.tech = ordTechList[index];
    techListName.push(object);
  }
  return techListName;
}

// Desafio 11
// Para resolver o item 4 do desafio foi preciso pesquisar um método para verificar caso algum número do array se repetisse 3x ou mais (forEach()) no site abaixo:
// Source: https://www.w3schools.com/jsref/jsref_foreach.asp
function generatePhoneNumber(number) {
  // Criado array para armazenar as contagens de cada elemento (forEach)
  let counter = []; 
  // Foi criada uma função para percorrer o array number e verificar se algum número se repetia 3x ou + - armazenando na variável counter
  function myFunction(num) {
    counter[num] = (counter[num] || 0) + 1;
  }
  number.forEach(myFunction);
  if (number.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 9) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  }
  for (let index = 0; index < counter.length; index += 1) {
    if (counter[index] >= 3) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  } return (`(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`);
}

// Desafio 12
// A função Math.abs foi pesquisada no seguinte site:
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  let triangleSideCheck_1 = lineA < (lineB + lineC);
  let triangleSideCheck_2 = lineA > Math.abs(lineB - lineC);
  if (triangleSideCheck_1 === true && triangleSideCheck_2 === true) {
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
