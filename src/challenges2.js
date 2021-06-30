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
function generatePhoneNumber() {
  
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
