/*10 - Crie uma função de Lista de Tecnologias
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.
Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.
A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima. 
Caso o array venha vazio sua função deve retornar 'Vazio!'

O que será verificado:
Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias
Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias*/

function techList(techs,nome){
  let info = [];
  if (techs.length === 0) {return ("Vazio!");}
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
    //console.log(info);
}
}

//techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
//nome = "Lucas";

//techList(techs,nome)

// Desafio 11

function generatePhoneNumber(numbers) {
  if (numbers.length === 11) { ///////////////// 
    for (let indice in numbers) {
      if (numbers[indice]> 0) {
        ///contador de repetidos
        let contRepetido = 0;
        let contNumero = 0;
        let indexNumeroRepetido = 0;
        for (let index in numbers) {
          let verificaNumero = numeros[index];
          for (let index2 in numbers) {
            if (verificaNumero === numbers[index2]) {
              contNumero += 1;
            }
          }
          if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
          }
          contNumero = 0;
        }
        ///contador de repetidos
        if (contNumero <3) {
          // return 0; //////////////////////////////////////////////////
        }
        else {return("não é possível gerar um número de telefone com esses valores");}
      }
      else {return("não é possível gerar um número de telefone com esses valores");}
    }
  }
  else {return ("Array com tamanho incorreto.");}
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let difAB = Math.abs(lineA-lineB);
  let difBC = Math.abs(lineB-lineC);
  let difAC = Math.abs(lineA-lineC);

  let sumAB = (lineA+lineB);
  let sumBC = (lineB+lineC);
  let sumAC = (lineA+lineC);

  let checkA = ((lineA < sumBC) && (lineA > difBC));
  let checkB = ((lineB < sumAC) && (lineB > difAC));
  let checkC = ((lineC < sumAB) && (lineC > difAB));
  let resultado = false;

  if ((lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)) {
    return false;
  }

  else if ((lineA < difBC) || (lineB < difAC) || (lineC < difAB)) {
      return false;
  }
  //Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  //e maior que o valor absoluto da diferença entre essas medidas.

  else if ((checkA === true) || (checkB === true) || (checkC === true)) {
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
