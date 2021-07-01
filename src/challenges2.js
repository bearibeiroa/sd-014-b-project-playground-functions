// Desafio 10
function techList(tech, name) {
  tech.sort();
  function createObjects(tech, name) {
    this.tech = tech;
    this.name = name;
  }
  newList = [];
  for (let index = 0; index < tech.length; index += 1) {
    newList[index] = new createObjects(tech[index], name);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    return newList;
  }

}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

// Desafio 11
function generatePhoneNumber(phone) {

  if (phone.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index in phone) {
    if (phone[index] < 0 || phone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let key in phone) {
    let count = 0;
    for (let secondKey in phone) {
      if (phone[key] === phone[secondKey]) {
        count += 1;
        if (count > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  let mask = '(xx) xxxxx-xxxx';
  phone.forEach(element => {
    mask = mask.replace('x', element)
  });
  return mask;
}
generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return result;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return result;
  } else if (lineC < (lineA + lineC) && lineC > Math.abs(lineA - lineB)) {
    return result;
  }else{
    result = false;
    return result;
  }
}
triangleCheck(2, 3, 4);

// Desafio 13
function hydrate(word) {
  let sumValue = 0;
  let expression = /[1-9]/g;
  let result = word.match(expression);

  for(let index = 0; index < result.length; index += 1){
    sumValue += parseInt(result[index]);
  }
  
  if(sumValue > 1){
    return sumValue + ' copos de água';
  }else{
    return sumValue + ' copo de água';
  }
}
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
