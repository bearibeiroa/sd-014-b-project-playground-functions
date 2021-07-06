//10 - Crie uma função de Lista de Tecnologias
function techList(skills, nameTech) {
  let trybeSkills = []; // Dica do Slack, do Thomas Ferreira - 14B
  let newObjects;
  skills.sort(); // ja faz a organização do array recebido, antes de continuar. Na monitoria, soube que podia ser usado assim, sem atribuir a uma variavel.
 
  if (skills.length === 0) {
    trybeSkills = 'Vazio!';
  } else {
    for (let i = 0; i < skills.length; i += 1) {
      newObjects = { tech: skills[i], name: nameTech };
      trybeSkills.push(newObjects);
    }
  }
  return trybeSkills;
}

console.log(techList(['Javascript', 'HTML', 'CSS', 'VB', 'C++'], 'Riba'));

// Desafio 11

function formatNumber(numberArray) {
  let formattedPhone = [];
  return formattedPhone = "(" + numberArray[0] + numberArray[1] + ") " + numberArray[2] + numberArray[3] + numberArray[4] + numberArray[5] + numberArray[6] + "-" + numberArray[7] + numberArray[8] + numberArray[9] + numberArray[10];
}

function generatePhoneNumber(numberArray) {
  let countDuplicate;
  let numberCompare;
  
  if(numberArray.length != 11) {
    return "Array com tamanho incorreto";
  }
  for (let i of numberArray) {
    numberCompare = numberArray[i];
      if (numberArray[i] < 0 || numberArray[i] > 9) {
        return "Não será possível gerar um número de telefone com esses valores";
      }
      if (numberCompare === numberArray[i]) {
        countDuplicate += 1;
      } else if (countDuplicate >= 3) {
        return "Não será possível gerar um número de telefone com esses valores";
      }
    }
  return formatNumber(numberArray);
}

// Desafio 12

function checkSum (lineA, LineB, lineC) {
  if (lineA > LineB + lineC || LineB > lineA + lineC || lineC > lineA + LineB) {
    return false;
}

function checkSides (lineA, LineB, lineC) {
  let diffOne = Math.abs(lineB - lineC);
  let diffTwo = Math.abs(lineA - lineB);
  let verify;
  if (lineA < diffOne ) {

  }
  for (let i of difference) {
    if (i ) {

    }
  }
  return false;
}

function triangleCheck(lineA, LineB, lineC) {
  let tringleAngle = [];
  if (lineA < LineB - lineC || LineB > lineA + lineC || lineC > lineA + LineB) {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));

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
