// Desafio 10
function techList(array, pname) {
  let narray = [];
  for (let i of array.sort()) {
    let obj = {
      tech: i,
      name: pname,
    };
    narray.push(obj);
  }
  return narray.length === 0 ? 'Vazio!' : narray;
}

// Desafio 11
function generatePhoneNumber(n) {
  if (n.length !== 11) return 'Array com tamanho incorreto.';
  let integritycheck = false;
  for (let i of n) {
    if (i > 9 || i < 0) {
      integritycheck = true;
      break;
    }
    let repeated = 0;
    for (let o of n) {
      if (i === o) repeated += 1;
    }
    if (repeated >= 3) integritycheck = true;
  }

  if (integritycheck) return 'não é possível gerar um número de telefone com esses valores';

  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  let fabs = Math.abs(b - c);
  let fcheck = false;
  if ((a < b + c) && (a > fabs)) {
    fcheck = true;
  }
  let sabs = Math.abs(a - c);
  let scheck = false;
  if ((b < a + c) && (b > sabs)) {
    scheck = true;
  }
  let tabs = Math.abs(c - a);
  let tcheck = false;
  if ((c < b + a) && (c > tabs)) {
    tcheck = true;
  }
  return fcheck && scheck && tcheck;
}

// Desafio 13
function hydrate(str) {
  let numbers = str.match(/\d+/g);
  let total = numbers.reduce((ptotal, item) => parseInt(item, 10) + ptotal, 0);
  if (total > 1) return `${total} copos de água`;
  return `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
