// Desafio 10
function techList(param1,param2) {
  let array = [];
  if (param1.length === 0){
    array = "Vazio!";
  } else {
    let sortArray = param1.sort()
    for (index=0;index<param1.length;index+=1){
      let objeto = {
        tech: sortArray[index],
        name: param2
      };
      array.push(objeto);
    }
  }
  return array;
}


// Desafio 11
function generatePhoneNumber(ary) {
  let teste = true;
  for(index2=0;index2<ary.length;index2+=1){
    if(ary[index2]>9 || ary[index2]<0){
      teste = false;
    }
  }
  let cont = 0;
  let cont2 = 0;
  let verificanumero = 0;
  for(index3=1;index3<=ary.length;index3+=1){
     verificanumero = ary[index3];
    for(index4=1;index4<=ary.length;index4+=1){
      if(verificanumero === ary[index4]){
        cont+=1;
      }
      if(cont>cont2){
        cont2 = cont;
      }
    }
    cont = 0;
  }
  if(ary.length != 11){
    phNumber = "Array com tamanho incorreto.";
  } else if ( teste === false ){
    phNumber = "não é possível gerar um número de telefone com esses valores";
  } else if (cont2>2){
    phNumber = "não é possível gerar um número de telefone com esses valores";
  }else{
    phNumber = "("+ary[0]+ary[1]+") "+ary[2]+ary[3]+ary[4]+ary[5]+ary[6]+"-"+ary[7]+ary[8]+ary[9]+ary[10];
  }
  return phNumber
}
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]))


// Desafio 12
function triangleCheck(linea,lineb,linec) {
  if( linea > (lineb+linec) || lineb > (linea+linec) || linec > lineb+linea){
    retorno = false;
  } else if( linea< Math.abs(lineb-linec) || lineb < Math.abs(linea-linec) || linec < Math.abs(lineb-linea)){
    retorno = false;
  } else {
    retorno = true;
  }
  return retorno
}
console.log(triangleCheck(10,14,8));

// Desafio 13
function hydrate(string) {
var regex = /\d+/g;
var matches = string.match(regex);  // creates array from matches
convertido = 0;
contconvertido = 0;
returnconvertido = 0;
for (index6=0;index6<matches.length;index6+=1){
  convertido = parseInt(matches[index6])
  contconvertido = contconvertido + convertido;
}
if (contconvertido>1){
  returnconvertido = contconvertido + " copos de água";
} else {
  returnconvertido = contconvertido + " copo de água";
}
return returnconvertido

  
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
