// Desafio 10
function techList(tech, name) {
  // seu código aqui
  /*let resultado;
  for (let index in tech, name) {
    console.log(tech, name[index]);
  }*/

}

// Desafio 11
function generatePhoneNumber(numero) {
  // seu código aqui
  let contNumNeg = 0;
  let contMaiorNove = 0;
  let resultado = [];
  let resposta;
  let numeroTel = [];
  let contx = 0;

  for (let index in numero) {
    resultado.push(numero[index]);

    if(contx == 0){
      numeroTel.push("(");
      numeroTel.push(numero[index]);
      contx += 1;
      
    } else if(contx == 3){
      numeroTel.push(")");
      numeroTel.push(numero[index]);
      contx += 1;
  
    } else if(contx == 4){
      numeroTel.push(" ");
      numeroTel.push(numero[index]);
      contx += 1;
  
    } else if(contx == 9){
      numeroTel.push("-");
      numeroTel.push(numero[index]);
      contx += 1;
  
    } else {
      numeroTel.push(numero[index]);
      
    }
    contx += 1;
    
    
    if(resultado[index] < 0){ //contador de números menores que zero
      contNumNeg += 1;
    } else if(resultado[index] > 9){ //contador de números maiores que nove
      contMaiorNove += 1;
    } else {

    
    }
  }
  
    if(resultado.length != 11){ //verificando se o array tenha o tamanho diferente de 11
      resposta = "Array com tamanho incorreto.";
      
    }

    else if(contMaiorNove >= 1){ //verificando se há algum n° maior que 9
      resposta = "não é possível gerar um número de telefone com esses valores";
  
    } else if(contNumNeg >= 1) { //verificando se há algum n° negativo
      resposta = "não é possível gerar um número de telefone com esses valores";
    } else {
      resposta = numeroTel;
    }
  
    return resposta;
    
    

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
