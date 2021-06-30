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
console.log(techList(["Javascript", "HTML", "CSS", "React", "C++"], "Thiago"));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if(phoneNumber.length > 10) {

  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
