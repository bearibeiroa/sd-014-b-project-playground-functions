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
function generatePhoneNumber(array) 
{
  let result;
  let contador = 2;
  sortedArray = array.slice().sort();

  if (array.length != 11) return "Array com tamanho incorreto.";
  
  for (let i = 0; i < 11; i++)
  {
    if (0 > array[i] || array[i]> 9) return "não é possível gerar um número de telefone com esses valores";   
  };
  
  for (let i = 0; i < 9; i++)
  {
    if (sortedArray[i] == sortedArray[i+1] && sortedArray[i+1] == sortedArray[i+2]) return "não é possível gerar um número de telefone com esses valores";
  }
  
  result = "(" + array[0] + array[1] + ") ";
  
  while (contador < 7)
  {
    result = result + array[contador];
    contador++;
  }
  result = result + "-";
  while (contador < 11)
  {
    result = result + array[contador];
    contador++;
  }
  return result;
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
