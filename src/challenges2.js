// Desafio 10
// Para resolver esse desafio, consultei a lógica do Matheus Kaffka ref: "https://github.com/tryber/sd-014-b-project-playground-functions/pull/90"
function techList(techName, name) {
  let techVector = [];
   
  if (techName.length > 0) {
     for (let index of techName.sort()) {
       techVector.push({ tech: index, name: name });
     }
    } else {
    return 'Vazio!'
  } 
 
  return techVector;
 
 } console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
 "Lucas"))
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
 // Para resolver esse desafio, usei a lógica e a dica do Thomas Ferreira no Slack. ref : "https://github.com/tryber/sd-014-b-project-playground-functions/pull/90https://github.com/tryber/sd-014-b-project-playground-functions/pull/90"
 // ref : "https://trybecourse.slack.com/archives/C023YHXAEGM/p1625455870052700"
 function triangleCheck(lineA, lineB, lineC) {
   let diffAB = Math.abs(lineA - lineB)
   let diffAC = Math.abs(lineA - lineC)
   let diffBC = Math.abs(lineB - lineC)
   let sizeA = lineA < lineB + lineC && lineA > diffBC
   let sizeB = lineB < lineA + lineC && lineB > diffAC
   let sizeC = lineC < lineA + lineB && lineC > diffAB
   let triangle = sizeA + sizeB + sizeC 
    return !!triangle;
  
 } 
 
 // Desafio 13
 function hydrate(bebidas) {

   
 }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
