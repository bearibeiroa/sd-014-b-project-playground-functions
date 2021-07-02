// Desafio 10
function techList(arrayTech, stringName) {
  arrayTech.sort()
  if(arrayTech ==0){
    return "Vazio!"
  }
  else{
  let newArrayTech = [];
  for(let indice = 0; indice < arrayTech.length; indice+=1){
    newArrayTech.push({tech: arrayTech[indice], name: stringName})
    // console.log(arrayTechNew);
  }
return newArrayTech;
}
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Mairton"))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
