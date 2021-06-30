// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  let area = base*height/2;
  return area;
}

// Desafio 3
function splitSentence(mergedSentence) {
  // seu código aqui
}

// Desafio 4
function concatName(array=['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
  concatName = (array[(array.length-1)] + ", " + array[0]);
  return(concatName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let footballPoints = 3*wins + ties;
  return footballPoints;
}

// Desafio 6
function highestCount(numeros) {

  let indiceMaior = 0;

  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  let verificaNumero = numeros[indiceMaior];
  let contNumero = 0;
  
  for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
  return contNumero
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = (mouse - cat1)**2;
  let distMouseCat2 = (mouse - cat2)**2;
  
  if (distMouseCat1 < distMouseCat2) {
    return ("cat1");
  }
  else {
    if (distMouseCat2 < distMouseCat1) {
      return ("cat2");
    }
    else { return ("os gatos trombam e o rato foge")}
  }// seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let fizzbuzzbug = [];
  for (let numero in numeros) {
    if (numeros[numero]%3 === 0 && numeros[numero]%5 !== 0) {
      fizzbuzzbug.push("fizz");
    }
    else {
      if (numeros[numero]%5 === 0 && numeros[numero]%3 !== 0) {
        fizzbuzzbug.push("buzz");
      }
      else {
        if (numeros[numero]%5 === 0 && numeros[numero]%3 === 0) {
          fizzbuzzbug.push("fizzBuzz");
        }
        else { fizzbuzzbug.push("bug!");}
      }
    }
  }
  return fizzbuzzbug;
}

// Desafio 9
function encode(str1ng) {
  let encodedString = [];
  for (let aux = 0 ; aux <= str1ng.length ; aux += 1) {
    //console.log(str1ng[aux]);
    if (str1ng[aux] == "a") {encodedString[aux] = "1"}
      if (str1ng[aux] === "a") {encodedString[aux] = "1"}
      else{
        if (str1ng[aux] === "e") {encodedString[aux] = "2"}
        else{
          if (str1ng[aux] === "i") {encodedString[aux] = "3"}
          else{
            if (str1ng[aux] === "o") {encodedString[aux] = "4"}
            else{
              if (str1ng[aux] === "u") {encodedString[aux] = "5"}
              else{
                encodedString[aux] = str1ng[aux]}
              } } } } }
//return encodedString;

for (let aux2 = 0 ; aux2 <= encodedString.length ; aux2 += 1) {
  encodedString = [encodedString[aux2] +]
}

console.log(encodedString)
}

encode("aba");

function decode(encodedString) {
  let decodedString = encodedString;
  for (char in encodedString) {
      if (encodedString[char] === "1") {decodedString[char] = "a"}
      else{
        if (encodedString[char] === "2") {decodedString[char] = "e"}
        else{
          if (encodedString[char] === "3") {decodedString[char] = "i"}
          else{
            if (encodedString[char] === "4") {decodedString[char] = "o"}
            else{
              if (encodedString[char] === "5") {decodedString[char] = "u"}
              else{
                decodedString[char] = encodedString[char]}
              } } } } }
return decodedString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  triangleCheck,
};

// Desafio 10




// Desafio 11

function generatePhoneNumber(numbers) {
  if (numbers.length = 11) { ///////////////// 
    for (let indice in numbers) {
      if (numbers[indice]> 0) {
        ///contador de repetidos
        let contRepetido = 0;
        let contNumero = 0;
        let indexNumeroRepetido = 0;
        for (let index in numbers) {
          let verificaNumero = numeros[index];
          for (let index2 in numbers) {
            if (verificaNumero === numbers[index2]) {
              contNumero += 1;
            }
          }
          if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
          }
          contNumero = 0;
        }
        ///contador de repetidos
        if (contNumero <3) {
          .
        }
        else {return("não é possível gerar um número de telefone com esses valores");}
      }
      else {return("não é possível gerar um número de telefone com esses valores");}
    }
  }
  else {return ("Array com tamanho incorreto.");}
}


// Desafio 12
/*
12 - Crie uma função de Condição de existência de um triângulo
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

Para tanto, tenha em mente algumas considerações:
Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas. Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs. O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.
O que será verificado:
Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.
Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.*/

function triangleCheck(lineA, lineB, lineC) {
  let difAB = Math.abs(lineA-lineB);
  let difBC = Math.abs(lineB-lineC);
  let difAC = Math.abs(lineA-lineC);

  let sumAB = (lineA+lineB);
  let sumBC = (lineB+lineC);
  let sumAC = (lineA+lineC);

  let checkA = ((lineA < sumBC) && (lineA > difBC));
  let checkB = ((lineB < sumAC) && (lineB > difAC));
  let checkC = ((lineC < sumAB) && (lineC > difAB));
  let resultado = false;

// (lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)
// (lineA < difBC) || (lineB < difAC) || (lineC < difAB)

  ////Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
  if ((lineA > sumBC) || (lineB > sumAC) || (lineC > sumAB)) {
    return false;
  }
  //Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.
  else if ((lineA < difBC) || (lineB < difAC) || (lineC < difAB)) {
      return false;
  }
  //Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  //e maior que o valor absoluto da diferença entre essas medidas.

  else if ((checkA === true) || (checkB === true) || (checkC === true)) {
    return true;
  }
}

//triangleCheck(10,14,8);
console.log(typeof triangleCheck(10,14,8))
console.log(triangleCheck(10,14,8))



function teste(){ return("teste do console")}
console.log(teste())


// Desafio 13



