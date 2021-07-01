// Desafio 10
function techList(lista, name) {
  let sort = lista.sort();
  let nicolasLista = [];
  if (lista.length === 0) {
    return 'Vazio!';    
  } else {
    for (let index in sort) {
      nicolasLista.push({ 'tech': sort[index], 'name': name });
    }
  }
  return nicolasLista;
}
console.log(techList([], "Nicolas"));

//Desafio 11
function generatePhoneNumber(string) {
  let osOnze = [];
  for (index in string) {
    osOnze.push(string[index]);

    if (string[index] > 9 || string[index] < 0) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  if (osOnze.length <= 10 || osOnze.length > 11) {
    return "Array com tamanho incorreto.";
  }
  
  for (index in osOnze) {
    let hits = 0;
    
    for (index2 in osOnze) {
            if (osOnze[index2] === osOnze[index]) {
        hits += 1;        
      }

      if (hits >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let zero = "(";
  let um = string[0];
  let dois = string[1];
  let tres = ")"
  let quatro = " ";
  let cinco = string[2];
  let seis = string[3];
  let sete = string[4];
  let oito = string[5];
  let nove = string[6];
  let dez = "-";
  let onze = string[7];
  let doze = string[8];
  let treze = string[9];
  let quatorze = string[10];
  let phoneNumber = zero + um + dois + tres + quatro + cinco + seis + sete + oito + nove + dez + onze + doze + treze + quatorze;
  
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

/* // Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
} */

module.exports = {
  // generatePhoneNumber,
  techList,
  // hydrate,
  // triangleCheck,
};
