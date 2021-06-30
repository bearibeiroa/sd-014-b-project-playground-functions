// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(param) {
  let fraseDoParam = param;
  return fraseDoParam.split(' ');
}

// Desafio 4
function concatName(paramDeArray) {
  let primeiroEUltimo = paramDeArray[paramDeArray.length - 1] + ', ' + paramDeArray[0];
  return primeiroEUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let indeceDoNumeroMaior = 0; 
  let quantidadeDeVezes = 0;
  for (let index = 0; index < arrayNumeros.length; index +=1){
  if (arrayNumeros[indeceDoNumeroMaior] < arrayNumeros[index]){
    indeceDoNumeroMaior = index;

 }}
 for(index = 0; index < arrayNumeros.length; index += 1){
   if (arrayNumeros[indeceDoNumeroMaior] === arrayNumeros[index]){
     quantidadeDeVezes = quantidadeDeVezes +1;
   }}
   return quantidadeDeVezes;
 }
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
   if (cat1 === cat2 || (cat1 + cat2)/2 === mouse) {
     return 'os gatos trombam e o rato foge'
   } else if ( cat1 > cat2){
     return 'cat2'
   }else {
     return 'cat1'
   }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let novoArray = [];
  for(let index = 0; index < arrayDeNumeros.length; index += 1){
    if (arrayDeNumeros[index]%3 === 0 && arrayDeNumeros[index]%5 === 0){
      novoArray.push('fizzBuzz')
    }else if(arrayDeNumeros[index]%3 === 0){
      novoArray.push('fizz');
    }else if (arrayDeNumeros[index]%5 === 0){
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

// Desafio 9
function encode(stringEncode) {
  let fraseNova = ''
for (let letraAtual of stringEncode){
  if (letraAtual === 'a'){
    letraAtual = '1';
    fraseNova += letraAtual
  } else if (letraAtual === 'e'){
    letraAtual = '2';
    fraseNova += letraAtual;
  } else if (letraAtual === 'i'){
    letraAtual ='3';
    fraseNova += letraAtual;
  } else if (letraAtual === 'o'){
    letraAtual = '4';
    fraseNova += letraAtual;
  } else if (letraAtual === 'u'){
    letraAtual = '5';
    fraseNova += letraAtual;
  }
  else{
    fraseNova += letraAtual
  }
}
  console.log(fraseNova);

}




function decode(stringDecode) {
  let fraseNova2 = ''
  for (let letraAtual2 of stringDecode){
    if (letraAtual2 === '1'){
      letraAtual2 = 'a';
      fraseNova2 += letraAtual2
    } else if (letraAtual2 === '2'){
      letraAtual2 = 'e';
      fraseNova2 += letraAtual2;
    } else if (letraAtual2 === '3'){
      letraAtual2 ='i';
      fraseNova2 += letraAtual2;
    } else if (letraAtual2 === '4'){
      letraAtual2 = 'o';
      fraseNova2 += letraAtual2;
    } else if (letraAtual2 === '5'){
      letraAtual2 = 'u';
      fraseNova2 += letraAtual2;
    }
    else{
      fraseNova2 += letraAtual2
    }
  }
    console.log(fraseNova2);
  
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
