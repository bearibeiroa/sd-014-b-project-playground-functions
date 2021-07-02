// Desafio 10
function techList(arrayTech, stringName) {
  arrayTech.sort()
  if(arrayTech ==0){
    return "Vazio!"
  }
  else{
    let newArrayTech = [];
    for(let indice = 0; indice < arrayTech.length; indice+=1){
      newArrayTech.push({tech: arrayTech[indice], name: stringName}) //consultado repositorio https://github.com/tryber/sd-014-b-project-playground-functions/blob/andre-morsch-playground-functions/src/challenges2.js para entender a sintaxe do push.
    }
  return newArrayTech;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Mairton"))

// Desafio 11
// referencia .join https://metring.com.br/javascript-converter-array-em-string
// referencia .splice https://www.mundojs.com.br/2018/08/31/adicionando-elementos-em-uma-lista-array-javascript/
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11){
    return "Array com tamanho incorreto.";
  }
  for(let index1 of phoneNumber){
    if (phoneNumber[index1] <0 || phoneNumber[index1]>9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  for(let index2 = 0; index2 < phoneNumber.length; index2+=1){
    let cont = 0;     
      for(let index3 = 0; index3 < phoneNumber.length; index3 +=1){
        if(phoneNumber[index2] === phoneNumber[index3]){;
        cont +=1;
        }
      }
    if(cont >= 3){
      console.log(cont);
      return "não é possível gerar um número de telefone com esses valores";
    }
   }
  phoneNumber.splice(0,0, "(")
  phoneNumber.splice(3,0, ")")
  phoneNumber.splice(4,0, " ")
  phoneNumber.splice(10,0, "-")
  return phoneNumber.join("");
}
console.log(generatePhoneNumber([1, 2, 3, 4, 4, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineC)){
    return true;
  }
  // if(lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
  //   return true;
  // }
  // if(lineC < lineA + lineB && lineC > Math.abs(lineA - lineC)){
  //   return true;
  // }
  else{
    return false;
  }

}
console.log(triangleCheck(10, 14, 8))

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
