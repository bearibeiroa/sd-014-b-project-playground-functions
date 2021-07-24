// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let student = [];
  let techs = [];
  let org;

  for(let index in tech){
    org = tech.sort();
    student.push(org[index]);
  }


  if(student.length === 0){
    return 'Vazio!';

  } else {
    for(let index = 0; index < student.length; index += 1){
      techs.push({
        tech: student[index],
        name: name      
        })
      
    }
  }

  return techs;

}
    




// Desafio 11
function generatePhoneNumber(numero) {
  // seu código aqui
  let contNumNeg = 0;
  let contMaiorNove = 0;
  let resultado = [];
  let resposta;
  let numeroTel = [];
  let contx = 0;
  let repeat = 0;
  let nmb;

  for(let i = 0; i < numero.length; i += 1){
    repeat = 0;
    for(let index = 0; index < numero.length; index += 1){
      if(numero[i] === numero[index]){
        repeat += 1;
      }
    }
    if(repeat > 2){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

  for (let index in numero) {
     
    nmb = "(" + numero[0] + numero[1] + ") " + 
    numero[2] + numero[3] + numero[4] + numero[5] + 
    numero[6] + "-" + numero[7] + numero[8] + numero[9] +
    numero[10];
    
    resultado.push(numero[index]);    

    if(contx == 0){
      numeroTel.push("(");
      numeroTel.push(numero[index]);
      contx += 1;
      
    } else if(contx == 3){
      numeroTel.push(") ");
      numeroTel.push(numero[index]);
      contx += 1;
  
    } else if(contx == 4){
      numeroTel.push(" ");
      numeroTel.push(numero[index]);
      contx += 1;
  
    } else if(contx == 10){
      numeroTel.push("-");
      numeroTel.push(numero[index]);
      contx += 1;
  
    } else {
      numeroTel.push(numero[index]);
      
    }
    contx += 1;
    
    
    if(resultado[index] < 0){ //contador de números menores que zero
      contNumNeg += 1;
    } else if(resultado[index] > 9){ //contador de números maiores que nove
      contMaiorNove += 1;
    } else {

    
    }
  }

    

    if(resultado.length != 11){ //verificando se o array tenha o tamanho diferente de 11
      resposta = "Array com tamanho incorreto.";
      
    }

    else if(contMaiorNove >= 1){ //verificando se há algum n° maior que 9
      resposta = "não é possível gerar um número de telefone com esses valores";
  
    } else if(contNumNeg >= 1) { //verificando se há algum n° negativo
      resposta = "não é possível gerar um número de telefone com esses valores";

    } else if (repeat >= 3) {
      resposta = "não é possível gerar um número de telefone com esses valores";

    } else {
      //resposta = numeroTel.join(''); //funcao join para auxiliar o codigo retirado do endereco: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?retiredLocale=pt-PT
      resposta = nmb;
    }
  
    return resposta;
    
    
  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let contMenor;
  let somaAB = lineA + lineB;
  let somaBC = lineB + lineC;
  let somaAC = lineC + lineA;

  if(lineA > somaBC || lineB > somaAC || lineC > somaAB){
    return false;

  } else{
    
  }
  
  if(lineA || lineB > lineC){
    contMenor = 1;

  } else if(lineB || lineC > lineA){
    contMenor = 1;

  } else if(lineA || lineC > lineB){
    contMenor = 1;

  } else {
    contMenor = 0;
  } 

  if(contMenor > 1){
    return false;
  } else {

    return true;
  }
  
}

// Desafio 13
function hydrate(drink) {
  // seu código aqui
  let cpdagua = 0;

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
