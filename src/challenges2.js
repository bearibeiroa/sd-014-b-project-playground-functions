// Desafio 10
function techList(tech1, nome) {
  if (tech1.length === 0) {
    return 'Vazio!';
  }
  let aux = tech1.length;
  tech1 = tech1.sort();

  let technology = {
    tech: '',
    name: '',
  };

  for (let key = 0; key < aux; key += 1) {
    technology.tech = tech1[key];
    technology.name = nome;
    return technology;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ab = Math.abs(lineA + lineB);
  let ac = Math.abs(lineA + lineC);
  let bc = Math.abs(lineB + lineC);
  if (lineA < bc && lineB < ac && lineC < ab) {
    return true;
  }
  return false;
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
