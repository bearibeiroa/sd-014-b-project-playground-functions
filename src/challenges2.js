// Desafio 10
function techList(tech, name) {
  
  tech.sort();
  let lista = [];

  if (tech.length === 0) {
    return "Vazio!";
  } else {
    for(let index10 = 0; index10 < tech.length; index10 +=1){

      //função para criar um array com objetos comentada pelo Thomas Ferreira no Slack, usei como método.
      lista.push({
        tech: tech[index10],
        name: name,
      })
    }   
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(numero) {

let maiorQue9 = false;
let menorQue0 = false;
let naoTem11 = false;
let repetidos3 = false;
let resposta;

for (let index9 = 0; index9 < numero.length; index9 += 1) {
 if (numero[index9] > 9) {
    maiorQue9 = true;
    break;
  }
 }

for (let index0 = 0; index0 < numero.length; index0 += 1){
  if (numero[index0] < 0) {
    menorQue0 = true;
    break;
  }
}

if (numero.length != 11) {
  naoTem11 = true;
}

for (let index = 0; index < numero.length; index +=1) {   
    let current3 = numero[index];
    let repete3 = 0;

    for (let indexRep = 0; indexRep < numero.length; indexRep += 1) {
        if (current3 === numero[indexRep]) {
            repete3 += 1;
        }
    }
    if (repete3 > 2); {
    repetidos3 = true;
    break;
    } 
}

if (maiorQue9 == true) {
  resposta = 'não é possível gerar um número de telefone com esses valores';
} else if (menorQue0 == true) {
  resposta =  'não é possível gerar um número de telefone com esses valores';
} else if (repetidos3 == true) {
  resposta =  'não é possível gerar um número de telefone com esses valores';
} else if (naoTem11 == true) {
  resposta =  'Array com tamanho incorreto.'   
} else {
  resposta =  '(' + numero[0] + numero[1] + ') ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10];
}
return resposta;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

let ehTriang = false;
let difA = lineB - lineC;
let difB = lineC - lineA;
let difC = lineA - lineB;

let absA = Math.abs(difA);
let absB = Math.abs(difB);
let absC = Math.abs(difC);

if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineA + lineB)) {
ehTriang = false;
} else if ((lineA < absA) || (lineB < absB) || (lineC < absC)) {
  ehTriang = false;
} else {
  ehTriang = true;
}
return ehTriang;
}

// Desafio 13
function hydrate(bebidas) {
let quantBebidas = 0;
let somaBebidas = 0;

for (let indexBev = 0; indexBev < bebidas.length; indexBev += 1) {
  let currentBev = bebidas[indexBev];
  if ((bebidas[indexBev] > 0) && (bebidas[indexBev] <= 9)) {
    quantBebidas += parseInt(currentBev); 
  } else {
  }
}

if (quantBebidas == 1) {
  return quantBebidas + ' copo de água';
} else {
  return quantBebidas + ' copos de água'
}

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
