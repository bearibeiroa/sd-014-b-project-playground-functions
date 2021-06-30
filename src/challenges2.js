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
