// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triang = false;
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) && (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))) {
    triang = true;
  } else {
    triang = false;
  }
  return triang;
}

/* nessa questão recebemos como parâmetro da função a medida de três linhas e temos que verificar se elas podem formar um triângulo
para sabermos se elas podem formar,
o valor de cada uma das linhas deve ser menor que a soma das outras
e também
o valor de cada uma das linhas deve ser maior que a subtração das outras

então criei uma variavel triang e dei valor false para identificar que é boolean
após criei um if e coloquei dentro dele as seguintes proposições:

1. a < b + c   2. a > b - c
3. b < a + c   4. b > a - c
5. c < a + b   6. c > a - b

se os numeros passados como parâmetros atenderem, triang = true
se os numeros não atenderem os parâmetros, vai para o else, que é triang = false
e no final botei para retornar o valor de triang */

// Desafio 13
function hydrate(exer13) {
  // seu código aqui
  let nDrinks = exer13.match(/[0-9]/g);
  let soma = 0;
    for(let i of nDrinks){
      soma += Number(i)
    }
    if(soma > 1){
      return soma + " copos de água"
    }
  return soma + " copo de água"
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
