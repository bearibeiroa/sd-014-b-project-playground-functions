// Desafio 10
function techList(tecnologies, name) {
  let newList = tecnologies.sort();
  let tec = "";
  let result = [];
  if (tecnologies.length <= 0){
    result =  'Vazio!'
    return result;
  }
  for (i of newList){
    let obj = {}
    obj['tech'] = i;
    obj['name'] = name;
    result.push(obj);
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let telephoneNumber = "";
  let repetManyTimes = checkRepetedTimes(numbers, 3);
  let highNumber = 0;
  let lessNumber = 0;
  for (index of numbers){
    if (highNumber < index){
      highNumber = index;
    }
    if (lessNumber > index){
      lessNumber = index;
    }
  }

  if (numbers.length !== 11){
    return 'Array com tamanho incorreto.'
  }else if (highNumber > 9 || lessNumber < 0 || repetManyTimes){
    return 'não é possível gerar um número de telefone com esses valores'
  }else{
    for (let i = 2; i < numbers.length; i += 1){
      telephoneNumber += numbers[i].toString();
      if (i == 6){
        telephoneNumber += "-";
      }
    }
  }

  let ddd = numbers[0].toString() + numbers[1].toString();
  let finalNumber = "("+ddd+")" + " " + telephoneNumber;
  return finalNumber;
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);


function checkRepetedTimes(numbers, times){
  let checkedNumbers = {};
  let repeted3Times = false;
  for (i of numbers){
    if (checkedNumbers[i]){
      checkedNumbers[i] += 1;
    } else{
      checkedNumbers[i] = 1;
    }
    if (checkedNumbers[i] >= times){
      repeted3Times = true;
    }
  }
  return repeted3Times;
}

// Desafio 12
function triangleCheck(a, b, c) {
  let result;
  if (a > b + c || b > a + c || c > a + b){
    result = false;
  } else if (a < Math.abs(b-c) || b < Math.abs(a-c) || c < Math.abs(a-b)){
    result = false;
  }else{
    result = true;
  }
 return result;
}


// Desafio 13
function hydrate(word) {
  let regex = /\d+/g;
  let string = word;
  let matches = string.match(regex);
  let water = 0;
  let result = ""
  for (let i = 0; i < matches.length; i += 1){
    let int = parseInt(matches[i]);
    water += int;
  }
  if (water > 1){
    result = water + " copos de água";
  } else{
    result = water + " copo de água";
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

/*  if (numbers.length === 11){
      if (i >= 2){
        telephoneNumber += numbers[i].toString();
        if (i == 6){
          telephoneNumber += "-";
        }
      }
    } else if (number < 0 || number > 9 || repetManyTimes){
      let b = 'não é possível gerar um número de telefone com esses valores'
      console.log(b);
      return b;
    }else{
      let a = 'Array com tamanho incorreto.'
      console.log(a);
      return a;
    }
  }
  if (numbers.length >= 1){
    ddd = numbers[0].toString() + numbers[1].toString();
  }
  let finalNumber = "("+ddd+")" + " " + telephoneNumber;
  console.log(finalNumber);
  return finalNumber; */