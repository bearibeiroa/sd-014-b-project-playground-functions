// Desafio 10
function techList(tech, name) {
  let arrayObjetos = [];

  for (let i = 0; i < tech.length; i += 1) {
    arrayObjetos.push({
      tech: tech[i],
      name,
    });
  }

  arrayObjetos = arrayObjetos.sort((a, b) => (a.tech < b.tech ? -1 : true));

  return arrayObjetos.length === 0 ? 'Vazio!' : arrayObjetos;
}

// Desafio 11
function verificarTamanhoDoArray(numerosTelefonicos) {
  let erro = null;

  if (numerosTelefonicos.length !== 11) {
    erro = 'Array com tamanho incorreto.';
  }

  return erro;
}

function verificarIntervaloDeNumeros(numerosTelefonicos) {
  let erro = null;

  for (let i = 0; i < numerosTelefonicos.length; i += 1) {
    if (numerosTelefonicos[i] < 0 || numerosTelefonicos[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return erro;
}

function contarRepeticoes(numeroAtual, numerosTelefonicos) {
  let contador = 0;

  for (let j = 0; j < numerosTelefonicos.length; j += 1) {
    if (numeroAtual === numerosTelefonicos[j]) {
      contador += 1;
    }
  }

  return contador;
}

function verificarSeNumerosSeRepetem(numerosTelefonicos, quantidadeDeRepeticoes) {
  for (let i = 0; i < numerosTelefonicos.length; i += 1) {
    const contador = contarRepeticoes(numerosTelefonicos[i], numerosTelefonicos);

    if (contador >= quantidadeDeRepeticoes) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function verificarSeExisteErro(numerosTelefonicos) {
  let erro = null;

  erro = verificarTamanhoDoArray(numerosTelefonicos);

  if (!erro) {
    erro = verificarIntervaloDeNumeros(numerosTelefonicos);
  }

  if (!erro) {
    erro = verificarSeNumerosSeRepetem(numerosTelefonicos, 3);
  }

  return erro;
}

function generatePhoneNumber(numerosTelefonicos) {
  const erro = verificarSeExisteErro(numerosTelefonicos);
  let numeroTelefonico = '(';

  if (erro) {
    return erro;
  }

  for (let i = 0; i < numerosTelefonicos.length; i += 1) {
    numeroTelefonico += numerosTelefonicos[i];

    if (i === 1) {
      numeroTelefonico += ') ';
    } else if (i === 6) {
      numeroTelefonico += '-';
    }
  }

  return numeroTelefonico;
}

// Desafio 12
function validarLadoA(lineA, lineB, lineC) {
  return lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC);
}

function validarLadoB(lineA, lineB, lineC) {
  return lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC);
}

function validarLadoC(lineA, lineB, lineC) {
  return lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB);
}

function triangleCheck(lineA, lineB, lineC) {
  return validarLadoA(lineA, lineB, lineC)
    && validarLadoB(lineA, lineB, lineC)
    && validarLadoC(lineA, lineB, lineC);
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
