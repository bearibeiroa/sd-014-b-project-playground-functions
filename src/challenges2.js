// Desafio 10

function techList(techs, nome) {
  let info = [];
  if (techs.length === 0) { return ('Vazio!');}
  else {
    techs = techs.sort();
    console.log(techs)
    for (let index = 0 ; index < techs.length ; index += 1 ) {
      info[index] = {
        tech: techs[index],
        name: nome,
      }
    }
    return info;
}
}

// Desafio 11

function generatePhoneNumber(numbers) {
  //------------------------------------------------------------------------------------
  //Função abaixo foi baseada em solution do bloco - Gabarito JavaScript / Parte 4 / Parte I - Objetos e For/In - Exercício 5
  function mostRepeated(numbers) {
    let count = {};
    for (let index = 0; index < numbers.length; index += 1) {
      let number = numbers[index]; // atribuição de number de verificação com número de entr
      if (count[number] === undefined) { // se objeto de contagem para 'number' está vazio
        count[number] = 1; // atribui 1 contagem para o valor number = numbers[index]
      } else { // senão ...
        count[number] = count[number] + 1; // soma no contador 1 a mais do valor anterior
      }
    }
  // verificar repetições
    let countRepeated = 0; // contador de repetições inicia zerado
    let countedNumber = 0; // variável auxiliar, para coletar número repetido, inicia zerada

    for (let x in count) { // loop para cada valor "x" no objeto "count" com as repetições
      if (countRepeated < count[x]) { // se o contador countRepeated, inicializado em 0, é menor que a contagem do valor "x" ...
        countRepeated = count[x]; // então é atribuída a contagem de "x" no contador countRepeated
        countedNumber = x; // valor repetido countedNumber é atribuído com o valor "x"
      }
    }
    return countRepeated; //maior valor de repetições
  // return count;
  }
  // --function acima verifica repetições
  // ------------------------------------------------------------------------------------
  
  let verifyZeroNine = 0;
for (n in numbers){
  if (numbers[n] < 0 || numbers[n] > 9) {verifyZeroNine = verifyZeroNine +1}
}

  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');}
  else {
    if (verifyZeroNine > 0) {
      return ('não é possível gerar um número de telefone com esses valores')}
    else {
      if (mostRepeated(numbers) > 2) {return ('não é possível gerar um número de telefone com esses valores')}
    else {
          let phoneNumber = ('(' + numbers[0] + numbers[1] +') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10])
          return phoneNumber;
        }
    }
  }
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let difAB = Math.abs(lineA - lineB); let difBC = Math.abs(lineB - lineC); let difAC = Math.abs(lineA - lineC);
  let sumAB = (lineA + lineB); let sumBC = (lineB + lineC); let sumAC = (lineA + lineC);
  let checkA = ((lineA < sumBC) && (lineA > difBC)); let checkB = ((lineB < sumAC) && (lineB > difAC)); let checkC = ((lineC < sumAB) && (lineC > difAB));
  let resultado = false;
  if ((lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)) {
    return false;
  }
  else if ((lineA < difBC) || (lineB < difAC) || (lineC < difAB)) {
      return false;
  }
  else if ((checkA === true) || (checkB === true) || (checkC === true)) {
    return true;
  }
}

// Desafio 13
function hydrate(bebidas) {
  let copoAgua = 0;
  // linha de código abaixo foi adaptada de: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript - Acessado em: 01/07/2021
  let numbers = bebidas.match(/\d+/g).map(Number); // regex - regular expressions -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  for (let x = 0; x < numbers.length; x += 1) {
    copoAgua = copoAgua + numbers[x];
  }
  if (copoAgua === 1) {
    return ('1 copo de água');
  } else if (copoAgua > 1) {
    return (copoAgua + ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
