// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  let resultss;
  if(val1 === true && val2 === true){
    resultss = true;   
  } else if(val1 === false && val2 === true){
    resultss = false;
  } else if(val1 === true && val2 === false){
    resultss = false;
  } else if(val1 === false && val2 === false){
    resultss = false;
  } else {
    resultss = false;
  }
  return resultss;
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;

}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let recebimento = frase;
  let resultado = recebimento.split(" ");
  return resultado;

}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let r1 = frase[0];
  let r2 = frase.pop();
  let resultado = r2 + ", " + r1;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado;
  if(wins || ties > 0){
    let contWin = wins * 3;
    let contTies = ties * 1;
    let resultado = contWin + contTies;
    return resultado;
  }
}



// Desafio 6
function highestCount(numeros) {
  // seu código aqui
let contador = 0;
let max = Math.max(...numeros); //encontrei esse método na internet pra auxliar o meu código
                                //pego o maior n° e marco quantas vezes ele irá repetir :)
for (let index in numeros) {
if(max === numeros[index]){
    contador = contador + 1;
} else {
    contador = contador;
}

}
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado;
  
  
    if(cat2 == mouse + 2 || cat2 == mouse - 2 && cat1 == mouse + 3 || cat1 == mouse -3){
    resultado = 'cat2';
    
    } else if(cat1 == mouse + 6 || cat1 == mouse - 6 && cat2 == mouse + 12 || cat2 == mouse - 12){
    resultado = 'cat1';

  } else if(cat2 == cat1 && cat1, cat2 != mouse){
    return resultado = "os gatos trombam e o rato foge";
    
 }

  return resultado;

  
}

// Desafio 8
function fizzBuzz(val1) {
  // seu código aqui
  let resultado = [];
  for (let index in val1) {
   if(val1[index] % 3 == 0){
   resultado.push('fizz');
} else if(val1[index] % 5 == 0){
  resultado.push('buzz');
} else if(val1[index] % 3 == 0 && val1 % 5 == 0){
  resultado.push('fizzBuzz');
} else if(val1[index] % 3 != 0 && val1 % 5 != 0){
  resultado.push('bug!');
}
  
}
  return resultado;
}

// Desafio 9
function encode() {
  // seu código aqui


}
function decode() {
  // seu código aqui
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
};
