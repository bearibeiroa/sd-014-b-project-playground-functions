// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
  // seu código aqui

  function checkNumbers(exer11) {
    let numbersCount = {};
  
    for(let index of exer11) {
      if(numbersCount[index] === undefined) 
        numbersCount[index] = 1;
      else
        numbersCount[index]++;
    }
  
    for(let index1 in numbersCount) {
      if(index1 < 0 || index1 > 9) 
        return false;
      if(numbersCount[index1] >= 3)
        return false;
    }
  
    return true;
  }
  
  function generatePhoneNumber(exer11) {
    if(exer11.length !== 11)
      return 'Array com tamanho incorreto.';
  
    if(!checkNumbers(exer11)) 
      return 'não é possível gerar um número de telefone com esses valores';
  
    if(exer11.length === 11)
      phoneNumber = "(" + exer11[0] + exer11[1] + ")" + " " + exer11[2] + exer11[3] + exer11[4] + exer11[5] + exer11[6] + "-" + exer11[7] + exer11[8] + exer11[9] + exer11[10];
    return phoneNumber;

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
  let nDrinks = exer13.match(/[0-9]/g); // puxa somente os numeros da string e transforma em array
  let soma = 0;                         
    for(let i of nDrinks){              // percorre os elementos da array      
      soma += Number(i)                 // soma os elementos da array
    }
    if(soma > 1){                       // se a soma for maior que 1 retorna copoS, se não, se for 1, ela retorna copo.
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
