// Desafio 10
function techList(techName, name) {
  techName.sort();
  let techVector = [];
   
  if (techName.length > 0) {
     for (let index of techName) {
       techVector.push({ tech: index, name: name });
     }
    } else {
    return 'Vazio!'
  }
 
  return techVector;
 
 } console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Enzo'))
 // A função techList recebe como parâmetros um array e uma string. O '.sort' é utilizado para colocar o array recebido em ordem alfabética. A variável "techVector" é um array vazio, criado para armazenar propiedades da minha lista. Se o tamanho do meu array for maior que zero, com o uso do 'for', os valores do meu array são percorridos em loop, e à cada loop, é armazenado no final do array, com o uso do '.push', uma nova propriedade, contendo o item de uma posição do array e o nome recebido na função. Se o array recebido for vazio, a função retorna "Vazio!". Depois desses processos de verificação, a função retorna o array 'techVector'.
 
 
 // Desafio 11
 function generatePhoneNumber(numbers) {
   
   if (numbers.length != 11) {
     return "Array com tamanho incorreto."
   }
   for (let index of numbers) {
     if (numbers[index] < 0 || numbers[index] > 9) {
       return "Não é possível gerar um número de telefone com esses valores."
     }
   }
 
   
 
 } 
 
 // Desafio 12
 function triangleCheck(lineA, lineB, lineC) {
   
 
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
