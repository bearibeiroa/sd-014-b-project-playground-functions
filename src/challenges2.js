// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!'
  }
  let arrayFinal = new Array(list.length);
  for (index = 0; index < list.length-1; index += 1){
    for (j = index+1; j < list.length; j += 1){
      if(list[index] > list[j]){
        aux = list[index];
        list[index] = list[j]
        list[j] = aux
      }
    }
  }  
  for (index = 0; index < list.length; index +=1){
    let techName = {
      tech: list[index],
      name: name
    }
    arrayFinal[index] = techName;  
  } 
  return arrayFinal;
}
lista = ["React", "Jest", "HTML", "CSS", "JavaScript"];
nome = "Lucas";
console.log(techList(lista, nome))




// Desafio 11
function generatePhoneNumber(cellnumber) {
  if (cellnumber.length != 11) {
    return 'Array com tamanho incorreto.';  
  }  
  let stringFinal = '(' 
  for (let i = 0; i < cellnumber.length; i += 1){
    let contador = 0;
    for (let j = 0; j < cellnumber.length; j += 1){
      if (cellnumber[i] === cellnumber[j]){
        contador += 1;
      }
    } 
    if (contador >= 3 || cellnumber[i] > 9 || cellnumber[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores'            
    } 
    stringFinal += cellnumber[i]
    if (i === 1){
      stringFinal += ') ';
    }
    if (i === 6){
        stringFinal += '-';
    } 
  }
  return stringFinal;      
}

let opa = [1,1,1,9,2,4,5,6,7,8,9]
console.log(generatePhoneNumber(opa)) 
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let result = true;
 if (lineA < (lineB + lineC) && lineB < (lineC + lineA) && lineC < (lineA + lineB)){
   if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineC - lineA) && lineC > Math.abs(lineA - lineB)) {
   return result
   }
} else {
   result = false;
   return result;
}
}

// Desafio 13
function hydrate(stringBar) {
  howManyGlasses = 0
  for (index=0; index<stringBar.length; index+=1){
    console.log((String(parseInt(stringBar[index]))))
    if(String(parseInt(stringBar[index])) != "NaN"){
      howManyGlasses += parseInt(stringBar[index])
    }
  }
  copos = "copo"
  if(howManyGlasses > 1){
    copos = "copos"
  }
  return String(howManyGlasses) + " " + copos + " de água"
}




module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
