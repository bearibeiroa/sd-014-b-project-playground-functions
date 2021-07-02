// Desafio 1
function compareTrue(a,b) {
  if (a && b == true){
    return true
  }
  else{
    return false
  }
}
// Desafio 2
function calcArea(base,height) {
  let valor = (base * height / 2)
  return valor 
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
  // seu código aqui
}

// Desafio 4
function concatName(arrray) {
  let primeiro = arrray[0]
  let ultimo = arrray[arrray.length -1]
  return ultimo + ", " + primeiro

  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  pontosVitoria = (wins*3)
  pontosEmpate = (ties*1)
  pontostotal = (pontosEmpate+pontosVitoria)
  return pontostotal
  // seu código aqui
}

// Desafio 6
function highestCount(paraArrayNum){
  let maiorNumero = Math.max.apply(null, paraArrayNum);;
  let quantidade = 0;
  for (i = 0; i < paraArrayNum.length; i += 1){
  if(maiorNumero === paraArrayNum[i]){
    quantidade = quantidade + 1;
  }
}
  return quantidade
}

  // seu código aqui


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato1 = (cat1-mouse)
  let rato2 = (cat2-mouse)
  if (rato1<0){
    rato1=(rato1*-1)
  }
  if (rato2<0){
    rato2 = (rato2*-1)
  }
  if (rato1>rato2){
    return "cat2"
  } 
  else if(rato2>rato1){
    return "cat1"
  }
  else if(rato1==rato2){
   return "os gatos trombam e o rato foge"
  }

  else{
    return "undefined"
  }
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array1) {
  let retorno = [];
  for (i=0;i<array1.length;i++){
    if (array1[i] % 3 == 0 && array1[i]% 5 ==0){
      retorno.push('fizzBuzz')
    } else if (array1[i] % 3 == 0){
      retorno.push('fizz')
    }else if (array1[i] % 5 == 0){
      retorno.push('buzz')
    } else {
      retorno.push('bug!')
    }
  }
    return retorno;
  }

  // seu código aqui


// Desafio 9
function encode(frase) {
  let fraseNova = "";
  for (let letraAtual of frase){
    if (letraAtual==="a"){
      letraAtual = '1';
      fraseNova += letraAtual
    }
    else if (letraAtual==="e"){
      letraAtual = '2';
      fraseNova += letraAtual
    }
    else if (letraAtual==="i"){
      letraAtual = '3';
      fraseNova += letraAtual
    }
    else if (letraAtual==="o"){
      letraAtual = '4';
      fraseNova += letraAtual
    }
    else if (letraAtual==="u"){
      letraAtual = '5';
      fraseNova += letraAtual
    }
    else{
      fraseNova += letraAtual
    }
  }
    return fraseNova
  }

function decode(frase2) {
  let fraseNova2 = "";
  for (let letraAtual2 of frase2){
    if (letraAtual2 ==="1"){
      letraAtual2 = 'a';
      fraseNova2 += letraAtual2 
    }
    else if (letraAtual2 ==="2"){
      letraAtual2 = 'e';
      fraseNova2 += letraAtual2
    }
    else if (letraAtual2 ==="3"){
      letraAtual2  = 'i';
      fraseNova2 += letraAtual2 
    }
    else if (letraAtual2==="4"){
      letraAtual2 = 'o';
      fraseNova2 += letraAtual2
    }
    else if (letraAtual2==="5"){
      letraAtual2 = 'u';
      fraseNova2 += letraAtual2
    }
    else{
      fraseNova2 += letraAtual2
    }
  }
    return fraseNova2
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

