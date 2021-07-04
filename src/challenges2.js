// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let quantosDrinks = 0;
  let somaDrinks = 0;
  let agua = somaDrinks + ' ' + 'Copo(s) de água';

    for (let index = 0; index < drinks.length; index += 1){
    let numeroDrinks = drinks[index];
    if ((drinks[index] >= 0) && (drinks[index] <= 9)) {
      quantosDrinks += numeroDrinks;
    } 
  else
  for (let index2 = 0; index2 < quantosDrinks.length; index2 += 1) {
    somaDrinks += quantosDrinks[index2];
  }
  return (agua);
  }
  console.log(somaDrinks);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
