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
function triangleCheck(linha1, linha2, linha3) {
  let resultado;
  if (((linha1 + linha2) < linha3) || ((linha3 + linha2) < linha1) || ((linha1 + linha3) < linha1)) {
    resultado = false;
  } else if (((Math.abs(linha1 - linha2) > linha3) || (Math.abs(linha3 - linha2) > linha1) || (Math.abs(linha1 - linha3) > linha1))) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
// Estudando sobre RegExp na W3Schools, achei a solução do problema. Com método match (high order functions), dica do Iago na monitoria.

function hydrate(bebeAgua) {
  let pattern = /[1-9]+/g;
  let patternSearch = bebeAgua.match(pattern);
  let contaDrink = 0;

  for (let i of patternSearch) {
    contaDrink += patternSearch[i];
  }

  return contaDrink + ' copos de água';
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
