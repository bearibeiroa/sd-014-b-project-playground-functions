// Desafio 1
function compareTrue(a, b) {
  return(a && b)
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringVariavel) {
  let resultado = stringVariavel.split(' ');
  return resultado;
}

// Desafio 4
function concatName(palavra) {      
  let primeiro = palavra[0];
  let ultimo = palavra[palavra.length - 1];  
  return ultimo +', ' + primeiro
}



// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let result = vitoria + ties;
  return result;
}

// Desafio 6
function highestCount(palavra) {
  let maior = palavra[0];
  let contador = 0;
  for (let index = 0; index < palavra.length; index += 1) {    
    if (palavra[index] > maior) {
      maior= palavra[index];
    }         
  } 
  for (let index = 0; index < palavra.length; index += 1) {
    if (palavra[index] === maior) {
      contador += 1;
    }
  }
  return contador;
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let DistanciaCat1 = Math.abs(mouse - cat1);
  let DistanciaCat2 = Math.abs(mouse - cat2);
  if (DistanciaCat1 > DistanciaCat2) {
    return 'cat2';
  } else if (DistanciaCat1 < DistanciaCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse([2, 15, 7, 9, 45]))
// Desafio 8
function fizzBuzz(vetor) {
  let vetorDecodificado = vetor;
  let fizz = 'fizz';
  let fizBuz = 'fizzBuzz';
  let buzz = 'buzz';
  let bug = 'bug!';
  for (let index = 0; index < vetorDecodificado.length; index += 1) {
    if (
      vetorDecodificado[index] % 3 === 0 &&
      vetorDecodificado[index] % 5 === 0
    ) {
      vetorDecodificado[index] = fizBuz;
    } else if (vetorDecodificado[index] % 3 === 0) {
      vetorDecodificado[index] = fizz;
    } else if (vetorDecodificado[index] % 5 === 0) {
      vetorDecodificado[index] = buzz;
    } else {
      vetorDecodificado[index] = bug;
    }
  }
  return vetorDecodificado;
}
console.log(fizzBuzz([9, 25]))
// Desafio 9
function encode(palavra) {
  let contador= palavra.length;  
  let palavraDecodificada= palavra.charAt(0);  
  let resultadoFinal=[];
  let cases="";
  for(index=0, index<contador; index +=1){ 
    switch(palavraDecodificada){
      case "a":
        cases=1 
        break;     
      case "e":
        cases=2;  
        break;   
      case "i":
        cases=3; 
        break;     
      case "o":
        cases=4; 
        break;     
      case "u":
        cases=5;
      default:
        cases=palavraDecodificada;               
    }
    resultadoFinal= cases
  }
  return resultadoFinal;
}
console.log(encode('hi there!'))
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



