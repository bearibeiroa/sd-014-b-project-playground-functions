// Desafio 10
function techList(arrayTec, name) {
  // seu código aqui
  let listObj;
  let listOrd = arrayTec.sort();
  if (arrayTec.length === 0) {
    return "Vazio!";
  } else {
    listObj = listOrd.map((tecnologies) => {
      let obj = {};
      obj.tech = tecnologies;
      obj.name = name;
      return obj;
    });
  }
  return listObj;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
