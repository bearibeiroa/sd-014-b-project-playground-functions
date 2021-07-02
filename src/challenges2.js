// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(telephoneNumber) {
  let countEqualNumbers = 0;
  let GenerateNumber = "";

  
  if (telephoneNumber.length != 11) 
      return "Array com tamanho incorreto.";
  
      
  for (let i = 0 ; i < telephoneNumber.length ; i += 1) {

      if (telephoneNumber[i] > 9 || telephoneNumber[i] < 0) {
          return "não é possível gerar um número de telefone com esses valores";
      }

      for (let j = 0 ; j < telephoneNumber.length ; j+= 1 ) {
          if (telephoneNumber[i] === telephoneNumber[j])
              countEqualNumbers += 1;
      }

      if (countEqualNumbers >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
      }

      countEqualNumbers = 0;
  }

  generateNumber = '('+telephoneNumber[0]+telephoneNumber[1]+') '+telephoneNumber[2]+telephoneNumber[3]+telephoneNumber[4]+telephoneNumber[5]
  +telephoneNumber[6]+'-'+telephoneNumber[7]+telephoneNumber[8]+telephoneNumber[9]+telephoneNumber[10];

  return generateNumber;

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
