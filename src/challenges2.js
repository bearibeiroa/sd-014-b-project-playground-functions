// Desafio 10
function techList(array, name) {
  let result = [];
for(let key in array.sort()){
    result[key] = {tech: array[key], name: name};
}
  if ((array.length === 0)){
    result = 'Vazio!';
  }
  return result;
  
}
console.log(techList(["CSS"], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // arrey em ordem alfabetica
  // preencher o array com objeto.
  //um fi para, SE VAZIO, retronar "VAZIO!"
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
