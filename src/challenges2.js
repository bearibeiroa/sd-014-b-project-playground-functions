// Desafio 10
function techList(tech, name) {

  let listaTecs = {
  javascriptArray: { tech: 'Javascript', name: 'Natalia' },
  cssArray: { tech: 'CSS', name: 'Natalia' },
  htmlArray: { tech: 'HTML', name: 'Natalia' },
  pythonArray: { tech: 'Python', name: 'Natalia' },
  reactArray: { tech: 'React', name: 'Natalia' },
}
let listaFinal;

for (let techKey in listaTecs) {
  if (listaTecs.length === 0) {
  listaFinal = 'Vazio!';
  } else {
  listaFinal = [console.log(listaTecs[techKey])];
}
}
return listaFinal;
}


// Desafio 11
function generatePhoneNumber(numero) {


for (let index11 = 0; index11 < numero.length; index11 += 1) {
  if (numero[index11] < 0) {
    mensagem11 = 'não é possível gerar um número de telefone com esses valores';
  } else if (numero[index11] > 9) {
    mensagem11 = 'não é possível gerar um número de telefone com esses valores'; 
  } else if (repete3x === true) {
    mensagem11 = 'não é possível gerar um número de telefone com esses valores';
  } else if (numero.length != 11) {
    mensagem11 = 'Array com tamanho incorreto.'
  } else {
    mensagem11 = '(' + numero[0] + numero[1] + ') ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10];
  }
}
return mensagem11;
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
let quantBebidas = 0; // agora essa variavel já te retorna a soma
let somaBebidas = 0;

for (let indexBev = 0; indexBev < bebidas.length; indexBev += 1) {
  let currentBev = bebidas[indexBev];
  if ((bebidas[indexBev] > 0) && (bebidas[indexBev] <= 9)) {
    quantBebidas += parseInt(currentBev); // parseint pra somar como numero
  } else {
  }
}
// for (let indexSumBev = 0; indexSumBev < quantBebidas.length; indexSumBev += 1) { 
//   somaBebidas += quantBebidas[indexSumBev];
//   console.log(somaBebidas);
// }

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
