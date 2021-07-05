// Desafio 10
function techList(namesTech, name) {
if (namesTech.length === 0) {
  return "Vazio!";
}

namesTech.sort();
let arrayTech = [];
 
 for (let index = 0; index < namesTech.length; index += 1) {
  arrayTech.push({
    tech: namesTech[index],
    name: name
  });
 }
 return arrayTech;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  } 
  let count;
  let msg = 'não é possível gerar um número de telefone com esses valores';
  for (let index = 0; index < phoneNumber.length; index += 1) {
  count = 0;
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
     return msg;
    }
       for (let i = 0; i < phoneNumber.length; i += 1){
        if(phoneNumber[index] == phoneNumber[i]){
        count ++;
        }
       }
       if(count >= 3){
       return msg;
       }
       }
  let allPhoneNumber = phoneNumber.join('');
  let formatPhoneNumber = '('+allPhoneNumber.substring(0,2)+') '+allPhoneNumber.substring(2,7)+'-'+allPhoneNumber.substring(7,11);
  return formatPhoneNumber;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA ) {
    
  }
}

// Desafio 13
function hydrate(stringHydrate) {
  let numberCollection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numbersContain = [];
  let split = stringHydrate.split(' ');
  for (let index = 0; index < split.length; index += 1) {
    for (let i = 0; i < numberCollection.length; i++) {  
      if(split[index] == numberCollection[i]){
        numbersContain += split[index];
      }
    }
    }
  splitNumber = numbersContain.split('');
  let soma = 0;
  for	(let index =0 ; index < splitNumber.length; index += 1){
   soma += parseInt(splitNumber[index]);
  }
  if(soma === 1){
   return soma +' copo de água';
  }else{
   return soma +' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
