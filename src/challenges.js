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
function fizzBuzz() {
  // seu código aqui
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

