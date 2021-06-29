// Desafio 10
function techList(arrayTecnologias,name) {
  // seu código aqui
  let arrayOrdenado = arrayTecnologias.sort();
  let resultado = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    let object = {};
    object = {
      tech: arrayOrdenado[index],
      name: name 
    }
    resultado.push(object)
  }
  if (arrayOrdenado.length > 0){
    return resultado
  } else {
    return "Vazio!"
  }
  
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
