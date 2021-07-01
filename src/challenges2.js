// Desafio 10
function techList(tecnologia,name) {
  
  let tecnologiaAndNames = [];
    tecnologia.sort();
    if (tecnologia.length === 0) {
      return 'Vazio!'
    }
    for (let cont = 0; cont < tecnologia.length; cont +=1){
          
        tecnologiaAndNames.push({
        tech: tecnologia[cont],
        name: name,
          })
          
        }
        
        return tecnologiaAndNames;
    }




// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '(';
  let qtd = 0;
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let cont = 0; cont < array.length; cont += 1) {
    qtd = 0;
    for (let cont2 = 0; cont2 < array.length; cont2 += 1) {
      if (array[cont] === array[cont2]) {
        qtd += 1;
      }
      if (qtd > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }

      if (array[cont] < 0 || array[cont] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      
    }
      if (cont === 2) {
        phoneNumber += ') ' + array[cont];
      } else if (cont === 7) {
        phoneNumber += '-' + array[cont];
      } else {
        phoneNumber += array[cont];
      }
  }
  return phoneNumber;
}



// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let resultado = false;
  let resultado2 = false;
  if (lineA < (lineB+lineC) && lineB < (lineA+lineC) && lineC < (lineA+lineB)){
    resultado = true;
  }

  if (lineA > Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineA-lineB)){
    resultado2 = true
  }
  
  if (resultado === true && resultado2 === true ){
    return true;
  }
    return false;
  
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
