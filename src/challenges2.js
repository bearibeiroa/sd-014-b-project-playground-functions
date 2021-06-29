// Desafio 10
function techList(arrayTecnologias,name) {
  // seu código aqui
  let arrayOrdenado = arrayTecnologias.sort();
  let resultado = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    let object = {};
    object = {
      tech: arrayOrdenado[index],
      name: name 
    }
    resultado.push(object);
  }
  if (arrayOrdenado.length > 0){
    return resultado;
  } else {
    return "Vazio!";
  }
  
}

// Desafio 11
function generatePhoneNumber(numeroDeTelefone) {
  // seu código aqui 
  let maiorNumero = numeroDeTelefone[0];
  for (let indice in numeroDeTelefone) {
    if (maiorNumero < numeroDeTelefone[indice]) {
      maiorNumero = numeroDeTelefone[indice];      }
  }

  let menorNumero = numeroDeTelefone[0];
  for (let indice in numeroDeTelefone) {
    if (menorNumero > numeroDeTelefone[indice]) {
      menorNumero = numeroDeTelefone[indice];      }
  }
  
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeroDeTelefone) {
    let verificaNumero = numeroDeTelefone[index];
    for (let index2 in numeroDeTelefone) {
      if (verificaNumero === numeroDeTelefone[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }

  if (numeroDeTelefone.length !== 11) {
      return 'Array com tamanho incorreto.'
  } else if (maiorNumero > 9 || menorNumero < 0 || contRepetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
  } else {
      let numeroEstruturado = `(${numeroDeTelefone[0]}${numeroDeTelefone[1]}) ${numeroDeTelefone[2]}${numeroDeTelefone[3]}${numeroDeTelefone[4]}${numeroDeTelefone[5]}${numeroDeTelefone[6]}-${numeroDeTelefone[7]}${numeroDeTelefone[8]}${numeroDeTelefone[9]}${numeroDeTelefone[10]}`;
      return numeroEstruturado;
  }

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
