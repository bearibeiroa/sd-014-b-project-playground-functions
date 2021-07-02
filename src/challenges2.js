// Desafio 10
//Faz a ordenação crescente das strings 
function ordenarPorTecnologia(a, b) {
  if(a.tech < b.tech) {
    return -1;
  }
  if(a.tech > b.tech) {
    return 1;
  }

  return 0;
}

function techList(techLearn, name) {
  let newTechList;
  //Percorre o array e cria um objeto para cada tecnologia do array
  for(let index = 0; index < techLearn.length; index += 1) {
    techLearn[index] = {
      tech: techLearn[index],
      name: name
    };
  }

  //Verifica se o array está vazio e, se sim, retorna "Vazio!", se não, continua
  if(techLearn.length === 0) {
    return ('Vazio!');
  } else {
    //Adiciona todos os objetos em uma nova lista e ordena com a função
    //ordenarPorTecnologia()
    newTechList = techLearn.sort(ordenarPorTecnologia);
  }

  return newTechList;
}

// Desafio 11
function generatePhoneNumber(vetorNumberPhone) {
  let numberPhone = [];
  let countNumberAppers = 0;
  //Verifica se o array tem exatamente 11 digitos
  if(vetorNumberPhone.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {

    //Percorre o array um por um
    for(let index = 0; index < vetorNumberPhone.length; index += 1) {

      //Verifica quantas vezes aparece os números
      countNumberAppers = 0;
      for(let indice = 0; indice < vetorNumberPhone.length; indice += 1) {
        if (vetorNumberPhone[indice] === vetorNumberPhone[index]) {
          countNumberAppers += 1;
        };
      }

      //Verifica e valida cada um dos números do array
      if(vetorNumberPhone[index] < 0 || vetorNumberPhone[index] > 9 || countNumberAppers >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        //Valida e formata os números
        if(index === 0 ) {
          numberPhone += '(' + vetorNumberPhone[index];  
        } else if(index === 1) {
          numberPhone += vetorNumberPhone[index] + ') ';
        }else if(index === 6){
          numberPhone +=  vetorNumberPhone[index] + '-' ;
        }else{
          numberPhone += vetorNumberPhone[index];
        };

      };

    };

  };

  return numberPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isPossible = false;

  if (
    lineA < lineB + lineC 
    && 
    lineB < lineA + lineC 
    && 
    lineC < lineA + lineB) {
    return isPossible = true;
  } else {
    return isPossible;
  }; 
}
// Desafio 13
function hydrate(bebida) {
  let countGlassWater = 0;

  //Percorre a string recebida
  for(let key of bebida) {

    //Verifica se o caractere key é maior que 0 e menor que 9
    if(key > 0 && key <= 9 ){
      //Adiciona 1 ao contador de copos de água
      countGlassWater += parseInt(key);
    };
  };

  if(countGlassWater === 1) {
    return countGlassWater + ' copo de água';
  } else {
    return countGlassWater + ' copos de água';
  };

}

console.log(hydrate('1 cerveja, 3 whisky'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
