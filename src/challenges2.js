// Desafio 10
function techList(tech, name) {
  if (tech.length == 0)
  {
    return "Vazio!";
  }
  tech.sort()
  resultado = [];
  for(let count =0; count< tech.length; count++) {
    resultado.push({tech: tech[count], name: name});
  }
  return resultado;
}
// Desafio 11
function generatePhoneNumber(numeros) {
  let contador =0;
  if(numeros.length != 11)
  {
    return "Array com tamanho incorreto.";
  }
  for(let count1=0; count1 < numeros.length; count1++){
    if(numeros[count1]< 0 || numeros[count1] > 9)
    {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for( let count2=0; count2 <numeros.length; count2++)
    {
      if (numeros[count1] === numeros[count2])
      {contador++;};
      if ( contador >2)
      {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    contador =0;
  }
  return '('+ numeros[0]+numeros[1] +') '+numeros[2]+numeros[3]+numeros[4]+numeros[5]+numeros[6]+'-'+numeros[7]+numeros[8]+numeros[9]+numeros[10];

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
