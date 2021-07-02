// Desafio 10
function techList(array, name) {
  let result = [];
for(let key in array.sort()){
    result[key] = {tech: array[key], name: name};
}
  if ((array.length === 0)){
    return 'Vazio!';
  }
  return result;
  
}
console.log(techList([], "Lucas"));



// Desafio 11
function generatePhoneNumber(array) {
  let verificaNumero = 0;
  
  let result = [];
  if(array.length !== 11){
    return "Array com tamanho incorreto.";
  }else {
    for(let index = 0;index < array.length; index += 1){
        if((array[index] < 0) || (array[index] > 9)){
          return "não é possível gerar um número de telefone com esses valores";
        }else{
          verificaNumero = array[index];
          let count = 0;
          for(let index = 0; index < array.length; index += 1){
            if(verificaNumero === array[index]){
              count += 1;
            } 
            if(count >= 3){
              return "não é possível gerar um número de telefone com esses valores";
            }
        }
    }      
  }

    result.push("("+array[0]+array[1]+") "+array[2]+array[3]+array[4]+array[5]+array[6]+"-"+array[7]+array[8]+array[9]+array[10]);  
    return result.toString();
  }
}


  //1 - verificar tamanho do array. se array.lenght !== 11 retorna "Array com tamanho incorreto."
  //verificar o conteudo. se algum elemento repetir >= 3x(Count +=1) returna  "não é possível gerar um número de telefone com esses valores".
  // verificar se array[key] < 0 && > 9..e retornar "não é possível gerar um número de telefone com esses valores".
  // retornar o padrao telefone (12)  34567-8901.

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));



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
