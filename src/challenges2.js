// Desafio 10
function techList(techs, names) {
  let techList=[];
  techs.sort();
  if(techs.length>0){
    for(let index in techs){
      techList.push({
        tech: techs[index],
        name: names,
      })
    }
  }
  else{
    return "Vazio!"
  }
  return techList;
}
console.log(techList(['html','css','react'],"luana"))
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
