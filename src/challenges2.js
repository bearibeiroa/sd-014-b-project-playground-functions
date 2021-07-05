// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let newTechList = [];
  for (let index of tech.sort()) {
    let objetoList = {};
    objetoList['tech'] = index;
    objetoList['name'] = name;
    newTechList.push(objetoList);
  }
  if (!newTechList.length) {//informação encontrada no site cibersitemas.pt em como saber se um array está vazio usando !array.legnt para retornar um valor boleano true, caso não tenha eleementos dentro do array.
    return 'Vazio!';
  } else {
    return newTechList;
  }
}

// Desafio 11
function generatePhoneNumber(numbersPhone) {
  // seu código aqui
  if (numbersPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index of numbersPhone) {
      if (index < 0 || index > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } 
   
  
  // console.log( `(${numbersPhone[0]}${numbersPhone[1]}) ${numbersPhone[2]}${numbersPhone[3]}${numbersPhone[4]}${numbersPhone[5]}${numbersPhone[6]}-${numbersPhone[7]}${numbersPhone[8]}${numbersPhone[9]}${numbersPhone[10]}`);
}
numbersPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
generatePhoneNumber(numbersPhone);



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if( lineA < (lineB + lineC) && lineA > Math.abs(lineB-lineC)){
    return true;
} else {
  return false;
}
}


// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let numerosBebidas = bebidas.match(/\d+/g)// extrair os todos os núemros da string
  let bebidasInteiras = [];
  let totalBebidas = 0;
  
  for(let index of numerosBebidas){ // transformar cada numero que ainda é string em Numbers Inteiros.
    bebidasInteiras.push(parseInt(index, 10)) 
  };
  for(let index of bebidasInteiras){ // fazer a somatória de quantas bebidas teve no total
    totalBebidas += index
  }
  if(totalBebidas === 1){
    return 1 + ' copo de água'; // criar uma frase para o singular 
  }else{
    return totalBebidas+' copos de água'; // e outra para o plural.
  }
}
hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};