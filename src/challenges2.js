// Desafio 10
function techList(techs, nome) {
    let listaTech = [];
    techs.sort();
    if (techs.length <= 0) {
      return "Vazio!";
    } else {
      for(let indice in techs){
        listaTech.push({
          tech: techs[indice],
          name: nome,
        })
      }
      return listaTech;
    }
  }


  // seu código aqui


// Desafio 11
function generatePhoneNumber(array11) {
  let numeroNovo = "";
  let r = 0;
  for (let i = 0; i < array11.length; i += 1) {
            for (let i2 = 0; i2 < array11.length; i2 += 1) {
                if (array11[i2] === array11[i]) {
                    r += 1;
                }
            }
            if (r === 3) {
                return ("não é possível gerar um número de telefone com esses valores");
            }
   else if (array11[i] <0){
     return"não é possível gerar um número de telefone com esses valores"
   }
   else if (array11[i] > 9){
    return "não é possível gerar um número de telefone com esses valores"
  }
   else if (array11.length != 11){
     return "Array com tamanho incorreto."
   }
    if ([i] === 0){
      numeroNovo =+ "(" + array11[i]
    }
    else if ([i] === 1){
      numeroNovo =+ array11[i] + ")"
    }
     else if ([i] === 6){
    numeroNovo =+ array11[i] + "-"
  }
  else {
    numeroNovo =+ array11[i]
  }
  }
  return numeroNovo;
}
   
  



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma = false;
  let absoluto = false;

  if (lineA > lineB +lineC){
    let soma = false;
  }
  else if (lineB > lineC + lineA){
    let soma = false;
  }
  else if (lineC > lineB + lineA){
    let soma = false;
  }
  else {
    let soma = true;
  }

  return soma
}
  



  // seu código aqui


// Desafio 13
function hydrate(lineA, lineB, lineC) {
}
  // seu código aqui

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
