// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  let objectNew = {};
  let ordem = arrayTech.sort();
  for(let indice of ordem){
    if(arrayTech === 0){
      console.log('Vazio');
    } else {
      objectNew['tech'] = indice;
      objectNew['name'] = name;
      
  }
  console.log(objectNew)
  }    
  
}  


techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas');



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