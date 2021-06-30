//Desafio 9
let textoo = 'hi there!';

function encode(texto) {
  let novoTexto = '';
  for (let index = 0; index < texto.length; index += 1) {
    switch (texto[index]) {
      case 'a':
        novoTexto += '1';
        break;
      case 'e':
        novoTexto += '2';
        break;
      case 'i':
        novoTexto += '3';
        break;
      case 'o':
        novoTexto += '4';
        break;
      case 'u':
        novoTexto += '5';
        break;
      default:
        novoTexto += texto[index];
    }
  }
  return novoTexto;
}

textoo = encode(textoo);
console.log(textoo);

function decode(texto) {
  let novoTexto = texto;
  for (i = 0; i < texto.length; i += 1) {
    novoTexto = novoTexto.replace('1', 'a');
    novoTexto = novoTexto.replace('2', 'e');
    novoTexto = novoTexto.replace('3', 'i');
    novoTexto = novoTexto.replace('4', 'o');
    novoTexto = novoTexto.replace('5', 'u');
  }
  return novoTexto;
}


console.log(decode(textoo));