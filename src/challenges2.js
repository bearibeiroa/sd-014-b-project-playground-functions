//10 - Crie uma função de Lista de Tecnologias
function techList(skills, nameTech) {
  let trybeSkills = []; // Dica do Slack, do Thomas Ferreira - 14B
  let newObjects;
  skills.sort(); // ja faz a organização do array recebido, antes de continuar. Na monitoria, soube que podia ser usado assim, sem atribuir a uma variavel.
 
  if (skills.length === 0) {
    trybeSkills = 'Vazio!';
  } else {
    for (let i = 0; i < skills.length; i += 1) {
      newObjects = { tech: skills[i], name: nameTech };
      trybeSkills.push(newObjects);
    }
  }
  return trybeSkills;
}

console.log(techList(['Javascript', 'HTML', 'CSS', 'VB', 'C++'], 'Riba'));

// Desafio 11
function generatePhoneNumber() {
  
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
