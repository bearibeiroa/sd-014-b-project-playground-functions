// Desafio 10
function techList(array, name) 
{
  let result = "Vazio!";
  array = array.sort();
  
  if (array.length != 0)
  {
    result = [];
    for (i in array)
    {
      let object = 
      {
        tech: "",
        name: name
      };
  
      object.tech = array[i];
      result.push(object);
    }
  };
  return result;
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
