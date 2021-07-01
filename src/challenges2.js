// Desafio 10
function techList(ArrayTech, name) {
  console.log(ArrayTech);
  let obj = {};
  let resultArr = [];
  obj.name = name;
  ArrayTech = ArrayTech.sort()
  if (ArrayTech.length < 1){
    return 'Vazio!'
  }
  
  for (var i = 0; i < ArrayTech.length; i++){
    tech = ArrayTech[i]
    
    obj.tech = tech; 
    // 2 horas pra acertar o push ahahah
    resultArr.push({name, tech});
    // https://stackoverflow.com/questions/4825899
  }
  
  return resultArr
}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  
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
