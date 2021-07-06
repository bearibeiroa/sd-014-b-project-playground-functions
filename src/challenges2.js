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
 function hasElevenNumbers (array){
  if (array.length != 11) {
    return true
  }
}
// A utilização de "const element = array[index]" e "array.filter((x) => x === element).length >= 3" foram retirados do repositório do Welton Thomas. Das linhas 49 à 51 e a linha 56 também foram retiradas da mesma fonte.
// ref : "https://github.com/tryber/sd-014-b-project-playground-functions/pull/70/commits/e6fa301e8300c4546cbc654929dde2238f924fb7" 
// ref : "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring" "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const"

function numberVerifier (array) {
  for (let index in array) {
     const element = array[index]
    if (element < 0 || element > 9 || array.filter((x) => x === element).length >= 3) {
      return true
    }
  }
} 

 function generatePhoneNumber(numbers) {
  if (hasElevenNumbers(numbers) === true) {
    return "Array com tamanho incorreto."
  }
  
  if (numberVerifier(numbers) === true) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  let phoneNumber = '';
  numbers.forEach((element) => { 
    phoneNumber += element;
  });
  
  let ddd = phoneNumber.substring(0,2);
  let firstFive = phoneNumber.substring(2,7);
  let lastFour = phoneNumber.substring(7);
  phoneNumber = `(${ddd}) ${firstFive}-${lastFour}`;
  return phoneNumber;
  } 

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
 
 // Desafio 12
 // Para resolver esse desafio, usei a lógica e a dica do Thomas Ferreira no Slack. ref : "https://github.com/tryber/sd-014-b-project-playground-functions/pull/90https://github.com/tryber/sd-014-b-project-playground-functions/pull/90"
 // ref : "https://trybecourse.slack.com/archives/C023YHXAEGM/p1625455870052700"
 function triangleCheck(lineA, lineB, lineC) {
   let diffAB = Math.abs(lineA - lineB)
   let diffAC = Math.abs(lineA - lineC)
   let diffBC = Math.abs(lineB - lineC)
   let ladoA = lineA < lineB + lineC && lineA > diffBC
   let ladoB = lineB < lineA + lineC && lineB > diffAC
   let ladoC = lineC < lineA + lineB && lineC > diffAB
   let triangle = ladoA + ladoB + ladoC 
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
