// Desafio 10
function techList() {
  // seu código aqui
}

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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
