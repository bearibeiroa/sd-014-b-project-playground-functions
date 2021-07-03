// Desafio 10
function techList(array, name) {
  if(array.length == 0){
    return "Vazio!"
  }
  array.sort();
  let novaArray = [];
  for(let palavra of array){
    let objeto = {
        tech: palavra,
        name: name, 
      };
      novaArray.push(objeto);
  }
  return novaArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  if(array.length != 11) {  // verifica tamanho da array.
    return "Array com tamanho incorreto.";
  }
  for(let numero of array) {  // verifica se existe um numero maior que 9 ou menor que 0 na array
    if (numero > 9 || numero < 0) {
      return "não é possível gerar um número de telefone com esses valores" ;
    }
  }
  for (let index = 0; index <= 11; index += 1){  // verficia se existe um numero que se repete mais de 3 vezes na array.
    let contador = 0;
    for(let numero of array){
      if (index === numero){
        contador += 1;
      }
      if (contador >= 3){
        return "não é possível gerar um número de telefone com esses valores" ;
      }
    }
  }
let ddd = '('+ array[0] + array[1] + ') ';  
array.splice(7, 0,'-');
array.splice(0,2);
array = array.join('');
let numeroDeTelefone = (ddd + array); 
return numeroDeTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (!(Math.abs(lineB + lineC) > lineA && lineA > Math.abs(lineB - lineC))){
    return false;
  }
  else if (!(Math.abs(lineA + lineC) > lineB && lineB > Math.abs(lineA - lineC))){
    return false;
  }
  else if (!(Math.abs(lineA + lineB) > lineC && lineC > Math.abs(lineA - lineB))){
    return false;
  }
  else{
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g; // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#special-word-boundary
  let result = string.match(reg); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  let contador = 0;
  for(let index in result){
    contador += parseInt(result[index],10);
  }
  if (contador > 1){
  return (contador + ' copos de água');
  }
  else{
    return (contador + ' copo de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
