function generatePhoneNumber(array) {
  let phoneNumber = '(';
  let qtd = 0;
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let cont = 0; cont < array.length; cont += 1) {
    qtd = 0;
    for (let cont2 = 0; cont2 < array.length; cont2 += 1) {
      if (array[cont] === array[cont2]) {
        qtd += 1;
      }
      if (qtd > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }

      if (array[cont] < 0 || array[cont] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      
    }
      if (cont === 2) {
        phoneNumber += ')' + array[cont];
      } else if (cont === 7) {
        phoneNumber += '-' + array[cont];
      } else {
        phoneNumber += array[cont];
      }
  }
  return phoneNumber;
}
let teste = [2, 1, 9, 5, 7, 3, 7, 8, 8, 6, 6];

console.log(generatePhoneNumber(teste));
