// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
  
    return true;
  }
  else{
    
    return false;
  }
}
 


// Desafio 2
function calcArea(base,height) {

  return (base * height)/2;
  
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let words = '';
  
  for (let cont = 0; cont < string.length; cont+=1){
    if(string[cont] != " "){
       words += string[cont];
    }else{
      array.push(words);
       words = '';
    }
    
  } 
  array.push(words)
  return array;
}

// Desafio 4
function concatName(array) {

  let firstTask = array[0];

  let LastTask = array[array.length - 1];

  let newArray = LastTask + ', ' + firstTask;
  return newArray;
}

// Desafio 5
function footballPoints(wins,ties) {

   pontos = (3*wins) + ties;

  return pontos;
}

// Desafio 6
function highestCount(numeros) {
 let maiorNum = numeros[0];
 let qtd = 0;                     
    for (let cont = 0;cont < numeros.length; cont+=1){
      if (numeros[cont] > maiorNum ){
        maiorNum = numeros[cont];
        }
    }
    for (let cont = 0;cont < numeros.length; cont+=1){
      if (maiorNum === numeros[cont]){
        qtd +=1;         
      }
    }
    return qtd;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  
  if (distancia1 < 0){
    distancia1 = distancia1 *-1;

  }if  (distancia2 < 0){
    distancia2 = distancia2 *-1;
  }
  
  if(distancia1 === distancia2){
    
    return 'os gatos trombam e o rato foge';
  }else if (distancia1 > distancia2){
    return 'cat2';
  }else{
     return 'cat1';
  }
  ;
}


// Desafio 8
function fizzBuzz(numeros) {
  array = [];
  for (cont = 0; cont < numeros.length; cont+=1){
    if ((numeros[cont] % 3) === 0 && (numeros[cont] % 5) === 0){
      array.push('fizzBuzz')
    }else if(numeros[cont] % 3 === 0){
      array.push('fizz')
    }else if (numeros[cont] % 5 ===0){
      array.push('buzz')
    }else {
      array.push('bug!')
    }
    }
    return array;
  }

// Desafio 9
function encode(string) {
  let encode = '';
  
  for (let letter of string){
        if (letter === 'a'){
          encode += '1'
        }else if (letter === 'e'){
          encode += '2'
        }else if (letter === 'i'){
          encode += '3'
        }else if (letter === 'o'){
          encode += '4'
        }else if (letter === 'u'){
          encode += '5'
        }else {
          encode += letter
        }
  }
  return encode
}
function decode(string) {
  let decode = '';
  for (let letter of string){
    if (letter === '1'){
      decode += 'a'
    }else if (letter === '2'){
      decode += 'e'
    }else if (letter === '3'){
      decode += 'i'
    }else if (letter === '4'){
      decode += 'o'
    }else if (letter === '5'){
      decode += 'u'
    }else {
      decode += letter;
    }
}
return decode;
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