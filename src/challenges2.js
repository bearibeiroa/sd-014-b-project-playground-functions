// Desafio 10
function techList (tech, name){
  let listTech = [];
  let tecno = {
      tech: "",
      name: "",}
  tech.sort()

  if (tech.length === 0){
    return "Vazio!"
}for (key of tech){

      listTech.push (tech = {
          tech: key,
          name: name,}
      )}
      return listTech
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
