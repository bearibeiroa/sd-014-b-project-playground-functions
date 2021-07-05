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
