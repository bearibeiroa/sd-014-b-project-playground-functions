// Desafio 10
function techList(technologies,name) {
  
  let result = [];
  technologies.sort();

  if (technologies ==! 0) {

    for (let index = 0; index < technologies.length; index +=1) {

      let object = {
       tech: ' ',
       name: name
      }
      object.tech = technologies[index];
      result.push(object);
    }
  return result;
  } else {
  return 'Vazio!';
  }
return techList;
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
