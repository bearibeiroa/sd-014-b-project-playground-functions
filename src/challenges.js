// Desafio 1
function compareTrue(t,j) {
  if (t == true && j ==true){
    return true
  } else {
    return false
  }

}
// Desafio 2
function calcArea(base, height) {
    area = (base * height) / 2
    return area
}

// Desafio 3
function splitSentence(tuca) { 
  return tuca.split(' ')
}

// Desafio 4

function concatName(junior) {
  let primeiroNome = junior[0];
  let ultimoNome = junior[junior.length - 1];
  return ultimoNome + ', ' + primeiroNome;

  
}

// Desafio 5
function footballPoints(wins, ties) {
let contadorGame = wins * 3 + ties
return contadorGame
}

// Desafio 6
function highestCount(vetor) {
    let c = 0
    let maior = 0
    let qtM = 1

    for(c=0 ; c < vetor.length; c++){
        if(c == 0){
        maior = vetor[c]
    } else {
        if(vetor[c] > maior){
            qtM = 1
            maior = vetor[c]
        } else if(vetor[c] == maior) {
            qtM++
          }
        }
    }
    return qtM
}
  
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
    let distanciaCat1 = (cat1 - mouse);
    let distanciaCat2 = (cat2 - mouse);
    if (distanciaCat1 < 0){
      distanciaCat1 = distanciaCat1 * -1
    }
    if (distanciaCat2 < 0){
      distanciaCat2 = distanciaCat2 * -1
    }
      
    if (distanciaCat1 < distanciaCat2) {
      return 'cat1';
    } else if (distanciaCat1 > distanciaCat2) {
      return 'cat2';
    }
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(peixeonibus) {
  let result = []
  for (let index of peixeonibus){
    if (index % 3 === 0 && index % 5 === 0){
      result.push('fizzBuzz')
    }
    else if (index % 3 === 0){
      result.push('fizz')
    }
    else if (index % 5 === 0){
      result.push('buzz')
    }
    else{
      result.push('bug!')
    }
  }

return result;  
}

// Desafio 9
function encode(codificar) {
  let noidea = codificar.split('')
  for(let index in noidea){
    switch(noidea[index]){
    case 'a': 
      noidea[index] = '1'
      break;
    case 'e':
      noidea[index] = '2'
      break;
    case 'i':
      noidea[index] = '3'
      break;
    case 'o':
      noidea[index] = '4'
    break;
    case 'u':
      noidea[index] = '5'
    break;
    }
  } 
  noidea = noidea.join ('');
  return noidea
}

function decode(whatever) {
  let idea = whatever.split('');
  for (let index in idea) {
    switch (idea[index]) {
      case '1':
        idea[index] = 'a';
        break;
      case '2':
        idea[index] = 'e';
        break;
      case '3':
        idea[index] = 'i';
        break;
      case '4':
        idea[index] = 'o';
        break;
      case '5':
        idea[index] = 'u';
        break;
  
    }
  }
  idea = idea.join('');
  return idea;
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
