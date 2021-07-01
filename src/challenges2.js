// Desafio 10
function techList(techList, name) {
  let list = []
  let techListSort = techList.sort()
  if (techList.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < techList.length; index += 1) {
    list.push({
      tech: techListSort[index],
      name: name
    })
  }
  return list
}

// Desafio 11
function generatePhoneNumber(phone) {
  let phoneNumber =  '00000000000';
  for (let index; index < phone.length; index += 1){
   phoneNumber[index] = phone[index]
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
