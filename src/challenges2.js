// Desafio 10
function techList(techs, nome) {
  let array = [];
  for (let index of techs.sort()) {
    let object = {
      tech: index,
      name: nome,
    };
    array.push(object);
  }
  return array.length === 0 ? 'Vazio!' : array;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  function hasLessThanSum(x, y, z) {
    let abs = Math.abs(y - z);
    return (x < y + z) && (x > abs);
  }  
  function triangleCheck(lineX, lineY, lineZ) {
    return hasLessThanSum(lineX, lineY, lineZ)
    && hasLessThanSum(lineY, lineX, lineZ)
    && hasLessThanSum(lineZ, lineX, lineY);
  }
}

// Desafio 13
function hydrate(text) {
  let numbers = text.match(/\d+/g);
  const total = numbers.reduce((currentTotal, item) => parseInt(item, 10) + currentTotal, 0);
  return (total > 1) ? `${total} copos de água` : `${total} copo de água`;

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
