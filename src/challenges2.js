// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  let techList = []; // Criei um array pra receber os vários objetos, podendo assim usar o .push
  if (techArray.length > 0){
    for (let i of techArray){
      techList.push({ tech: i, name: name }); // push só funciona para arrays, não objetos.
    }
  } else {
    return 'Vazio!'
  } 
  return techList;
}

// Desafio 11
// criar contador de repetição de numero no numbers;
// criar if pra modelo o phoneComplete;
// criar if para mensagens de erro;
function generatePhoneNumber(numbers) {
  // let phoneNumber1 = []
  // let phoneNumber2 = [];
  
  for (let i = 0; i < numbers.length; i += 1){
    let contador = 0;
    let numCurrent = 0;
    if (numbers.length != 11 || numbers[i] > 9 || numbers [i] < 0 ){
      return "Array com tamanho incorreto.";
    } else if () {  
        for (let index = 0; index < numbers.length; i += 1){
          numCurrent = numbers[i];
          for (let i of numbers){	
            if (i === numbers[index]) {
                  contador += 1;
                } 
              }
         
   if (contador >= 3) {
          return "não é possível gerar um número de telefone com esses valores"
        
        }
      }
    }
  }
  return 
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1],));

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
