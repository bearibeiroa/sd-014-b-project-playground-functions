const { highestCount } = require('./challenges');

// Desafio 10
function techList(techs, names) {
  let techList = [];
  techs.sort();
  if (techs.length > 0) {
    for (let index in techs) {
      techList.push({
        tech: techs[index],
        name: names,
      });
    }
  } else {
    return 'Vazio!';
  }
  return techList;
}
function count11(numeros){    
  let resultado= 0;
  for(let index =0; index<numeros.length; index +=1){
    let contador=0;
    for(let index2=0; index2<numeros.length;index2+=10){
      if(numeros[index]===numeros[index2]){
        contador+=1;
      }     
    //parte feita com ajuda do @Esdras Oliveira-turma 14-B pelo slack
    if(contador>2){      
      return 'não é possível gerar um número de telefone com esses valores';
      erro = true
      break;
    } 
    resultado=contador;
    contador=0;         
  }
  return resultado;
}
console.log(count11([1, 11, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 11
function generatePhoneNumber(number) {
  let numberTel = '';
  let ocorrencia = ;
  if (number.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index of number) {
      if (index < 0 || index > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        numberTel += index;
      }
    }
    const numeroFormatado = numberTel.replace(
      /(\d{2})?(\d{5})?(\d{4})/,
      '($1)$2-$3'
    );
    return numeroFormatado;
  }
}
console.log(generatePhoneNumber([1, 11, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let soma=0;
  if(lineA<lineB+lineC && lineA>Math.abs(lineB-lineC)){
    return true;
  }
  else if(lineb<lineA+lineC && linea>Math.abs(lineA-lineC)){
    return true;
  }
  else if(lineC<lineA+lineC && linea>Math.abs(lineA-lineB)){
    return true;
  }
  else{
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
