// Desafio 10
function techList(techList, name) {
  
  if (techList.length == 0) {
    return 'Vazio!';
  }
  
  let techObject = [];
  let sortedTechList = techList.sort();  
  for (let i = 0; i < sortedTechList.length; i++) {
    techObject[i] = {
      tech: sortedTechList[i],
      name: name
    };
  }
  return techObject;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  
  if (numeros.length != 11){
    return 'Array com tamanho incorreto.';
  }

  for (let i of numeros){
    let cont = 0; 
    for (j of numeros){
      if (j==i){
        cont++;
      } else if(cont >= 3){
        break;
      }
    }
    if (i < 0 || i > 9 || cont >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let phone = `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
  
  return phone;

}

// Desafio 12
function triangleCheck(a, b, c) {
  let lados = [a, b, c];
  let somas = [(a+b), (a+c), (b+c)];
  //let subtracoes = [((-1)*(a-b)), ((-1)*(a-c)), ((-1)*(b-c))];
  let subtracoes = [(a-b), (a-c), (b-c)];
  let bool = true;


  for (let i = 0; i < somas.length; i++){
    for (let j = 0; j < lados.length; j++){
      if (lados[j] > somas[i]){
        bool = false;
        return bool;
      }
    }
  }

  for (let k = 0; k < subtracoes.length; k++){
    for (let j = 0; j < lados.length; j++){
      if (lados[j] < Math.abs(subtracoes[k])){
        bool = false;
        return bool;
        
      }
    }
  }
  return bool;
}

// Desafio 13
function hydrate(str) {
// fonte: https://bit.ly/2Uifl4I
// [+-]?: Optional + or - sign before number
// \d+: Match one or more numbers
//  (?:\.\d+)?: Optional decimal point. ?: denotes non-capturing group.
//g flag: To get all matches

  let cont = 0;
  let strNumbers = str.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
  for (i=0; i < strNumbers.length; i++){
    cont+=strNumbers[i];
  }
  if (cont <= 1){
    return `${cont} copo de água`;
  } else {
    return `${cont} copos de água`;
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
