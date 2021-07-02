// Desafio 10
function techList(tech, name) {
  
  function techList(techs, nome) {
    let listaTech = [];
    techs.sort();
    if (techs.length < 0) {
      return "Vazio!";
    } else {
      for(let indice in techs){
        listaTech.push({
          tech: techs[indice],
          name: nome,
        })
      }
      return listaTech;
    }
  }
  console.log(techList(["Javascript", "HTML", "CSS", "React", "C++"], "Thiago"));


  let listaTecs = {
  javascriptArray: { tech: 'Javascript', name: 'Natalia' },
  cssArray: { tech: 'CSS', name: 'Natalia' },
  htmlArray: { tech: 'HTML', name: 'Natalia' },
  pythonArray: { tech: 'Python', name: 'Natalia' },
  reactArray: { tech: 'React', name: 'Natalia' },
}
let listaFinal;

for (let techKey in listaTecs) {
  if (listaTecs == ({})) {
  listaFinal = 'Vazio!';
  } else {
  listaFinal = [console.log(listaTecs[techKey])];
}
}
return listaFinal;
}


// Desafio 11
function generatePhoneNumber(numero) {
let mensagem11 = 0;
let repete3x = 0;

for (let i = 0; i < t.length; i += 1) {
  let r = 0;
        for (let i2 = 0; i2 < t.length; i2 += 1) {
            if (t[i2] === t[i]) {
                r += 1;
            }
        }
        if (r > 2) {
            return ("não é possível gerar um número de telefone com esses valores");
            erro = true;
            break;
        }
        r = 0;
    }

for (let index11 = 0; index11 < numero.length; index11 += 1) {
  
}

for (let index11 = 0; index11 < numero.length; index11 += 1) {
  if (numero[index11] < 0) {
    mensagem11 = 'não é possível gerar um número de telefone com esses valores';
  } else if (numero[index11] > 9) {
    mensagem11 = 'não é possível gerar um número de telefone com esses valores'; 
  } else if (repete3x === true) {
    mensagem11 = 'não é possível gerar um número de telefone com esses valores';
  } else if (numero.length != 11) {
    mensagem11 = 'Array com tamanho incorreto.'
  } else {
    mensagem11 = '(' + numero[0] + numero[1] + ') ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10];
  }
}
return mensagem11;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

let ehTriang = false;
let difA = lineB - lineC;
let difB = lineC - lineA;
let difC = lineA - lineB;

let absA = Math.abs(difA);
let absB = Math.abs(difB);
let absC = Math.abs(difC);

if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineA + lineB)) {
ehTriang = false;
} else if ((lineA < absA) || (lineB < absB) || (lineC < absC)) {
  ehTriang = false;
} else {
  ehTriang = true;
}
return ehTriang;
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
