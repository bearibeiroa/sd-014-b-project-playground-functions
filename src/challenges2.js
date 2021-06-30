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
/*function count11(numeros){    
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

*/
// Desafio 11
function generatePhoneNumber(number) {
  let numberTel = '';  
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


// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let soma=0;
  if(lineA<lineB+lineC && lineA>Math.abs(lineB-lineC)){
    return true;
  }
  else if(lineB<lineA+lineC && lineB>Math.abs(lineA-lineC)){
    return true;
  }
  else if(lineC<lineA+lineC && lineC>Math.abs(lineA-lineB)){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 13
function hydrate(drink) {
  //para retirar um numero de uma string usamos o replace com a expressao /\d+/g
  //pesquisa feita no site: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  let glassOfWater = drink.replace(/[^0-9]/g,[]);   
  console.log(glassOfWater)
  let inteiro= []; 
  for(i=0;i<glassOfWater.length;i+=1) {
    let numero = parseInt(glassOfWater[i],10);
    inteiro[i]+= numero;
  }  
  console.log(inteiro)
  let soma= 0; 
  return soma + 'copos de água';
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
