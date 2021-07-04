// Desafio 10
function techList(techLearn, name) {
  techLearn.sort();
  let objList =[];
  
  if (techLearn.length !== 0 ){
    for(let index in techLearn) {
      let objeto = {
        tech : techLearn[index],  // irá indicar o nome da tecnologia em cada posição [index]
        name : name
      }
        objList.push(objeto); // comando for-in irá percorrer o array techLearn e para cada tecnologia encontrada irá criar uma nova lista a partir do objeto declarado. 
    }
      return objList;
    }
  return "Vazio!";
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
