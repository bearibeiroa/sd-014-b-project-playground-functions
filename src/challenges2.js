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
  let repetManyTimes = checkRepetedTimes(numbers);
  let canMakeNumber = false;
  let result = "";
  for (let i = 2; i < numbers.length; i += 1){
    let number = numbers[i];
    if (numbers.length > 11 || numbers.length < 11){
      canMakeNumber = false;
      result = "Array com tamanho incorreto.";
      break;
    } else if (number < 0 || number > 9 || repetManyTimes === true){
      canMakeNumber = false
      result = "não é possível gerar um número de telefone com esses valores";
      break;
    } else if (i === 7){
      canMakeNumber = true;
      telephoneNumber += "-" + number.toString();
    } else{
      canMakeNumber = true;
      telephoneNumber += number.toString();
    }
  }
  if (canMakeNumber){
    let ddd = numbers[0].toString() + numbers[1].toString();
    result = "("+ddd+")"+" " + telephoneNumber;
  } 
  console.log(result);
  return result;
}

function checkRepetedTimes(numbers){
  let checkedNumbers = {};
  let repeted3Times = false;
  for (i of numbers){
    if (checkedNumbers[i]){
      checkedNumbers[i] += 1;
    } else{
      checkedNumbers[i] = 1;
    }
    if (checkedNumbers[i] >= 3){
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
