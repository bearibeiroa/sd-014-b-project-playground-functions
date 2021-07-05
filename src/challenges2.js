// Desafio 10
function techList(tech, nome) {
  // seu código aqui
  let arrayTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1){
    arrayTech.push({
    tech: tech[index],
    name: nome })
  }
  if (tech.length === 0){
    arrayTech = "Vazio!"
  }
  return arrayTech; 
}
// let tech = techList(["React", "HTML"], "Lucas");
// console.log(tech);
// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
let phoneNumber = [];


  if (number.length != 11) {
    return "Array com tamanho incorreto.";
  } 

for (let index = 0; index < number.length; index += 1) {
  if (number[index] < 0 || number[index] > 9) {
    return "não é possível gerar um número de telefone com esses valores";
  }
}
for (let index = 0; index <= 10; index += 1) {
  let contador = 0;
  for (let indexContador = 0; indexContador < number.length; indexContador += 1) {
    if (number[index] === number[indexContador]) {
      contador += 1;
    } if (contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  }
return  "(" + number[0] + number[1] + ")" + " " + number[2] + number[3] + number[4] + number[5] + number[6] + "-" + number[7] + number[8] + number[9] + number[10];
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
