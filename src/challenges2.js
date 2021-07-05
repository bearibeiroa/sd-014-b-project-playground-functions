// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let result = true;
 if (lineA < (lineB + lineC) && lineB < (lineC + lineA) && lineC < (lineA + lineB)){
   if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineC - lineA) && lineC > Math.abs(lineA - lineB)) {
   return result
   }
} else {
   result = false;
   return result;
}
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
