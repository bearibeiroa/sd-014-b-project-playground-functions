// Desafio 10
function techList(techIn, nameIn) {
  let objectOut = [];
  if (techIn.length === 0) {
    return 'Vazio!';
  }
  techIn.sort(); // se a array não for vazia faz a ordenação do elementos
  for (let i = 0; i < techIn.length; i += 1) {
    objectOut.push({ tech: techIn[i], name: nameIn });
  } return objectOut;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let linha1 = Math.abs(lineA);
  let linha2 = Math.abs(lineB);
  let linha3 = Math.abs(lineC);
  if (linha1 + linha2 < linha3 || linha1 + linha3 < linha2 || linha3 + linha2 < linha1) {
    return false;
  }
  return true;
}
// Desafio 13
function hydrate(drink) {
  let allDrinks = drink.match(/\d/g); // The match() method retrieves the result of matching a string against a regular expression.
  // Use the regular expression \d+, which means any digit from 0 to 9 (\d) repeated one or more times (+). The qualifier g will make the search global 
  let water = 0; // quantidade de água inicial
  for (let index = 0; index < allDrinks.length; index += 1) { // pecorre a string das bebidas
    water += Number(allDrinks[index]); // The Number() function converts the object argument to a number that represents the object's value.
  } 
  if(water === 1) {
    return `${water} copo de água`;// Template Literals '${} 'também permite interpolar valores em um texto
  } 
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
