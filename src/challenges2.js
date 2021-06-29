// Desafio 10
function techList(tecnologies, name) {
  let newList = tecnologies.sort();
  let tec = "";
  let result = [];
  if (tecnologies.length <= 0){
    result =  'Vazio!'
    return result;
  }
  for (i of newList){
    let obj = {}
    obj['tech'] = i;
    obj['name'] = name;
    result.push(obj);
  }
  return result;
}
techList([],'Lucas');

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
