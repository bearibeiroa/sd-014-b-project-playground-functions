// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
// Essa função recebe dois parâmetros(entre "true" e "false"), retornando true se ambos forem verdadeiros, e retornando false caso pelo menos um entre esses parâmetros for false.

// Desafio 2
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}
// Essa função recebe dois parâmetros (numéricos), relacionados a medida da base e da altura de um triângulo. A função multiplica o valor da base pelo valor da altura e divide o resultado por 2. Após essa operação, ela retorna o valor obtido.

// Desafio 3
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  let resultado = string.split(' '); 
  return resultado;
}
// Para realizar esse desafio, consultei a documentação do método '.split'. Essa função recebe uma string como parâmetro e retorna um array de strings separadas por espaço. 

// Desafio 4
function concatName(array) {
  let concate = array[array.length - 1] + ', ' + array[0];
  return concate;
}
// Essa função recebe um array como parâmetro. A variável "concate" pega o último elemento do array recebido e concatena com uma vírgula e espaço ", " e o primeiro do elemento do array. Após isso, a função retorna o valor da variável "concat".

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}
// Essa função recebe dois parâmetros, o número de vitórias e o número de empates de um time respectivamente. Na primeira variável "winPoints", calcula a quantidade de pontos baseada no número de vitórias de um time multiplicados por 3. Na segunda variável "tiePoints", armazena o número de pontos por empate de um time. E na terceira variável "totalPoints", acontece a soma dos pontos de vitória e de empate. Logo após isso, a função retorna a variável "totalPoints".

// Desafio 6
// ref : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// ref : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#usando_apply_e_fun%C3%A7%C3%B5es_embutidas
function highestCount(array) {
  let highNumber = Math.max.apply(null, array);
  let numberCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
} // Essa função recebe um array numérico como parâmetro. Nesse desafio usei o médoto "Math.max.apply()" consultando a documentação no site do MDN. A primeira variável "highNumber" armazena o maior número entre os números recebidos no array. A segunda variávvel "numberCount" é um contador, para conferir quantas vezes o número se repete dentro do array. Usando o 'for' para percorrer as posições do array, se o número da posição do array for igual ao maior número, a variável "numberCount" é incrementada em uma unidade. Após esse processo, a função retorna o valor de "numberCount".  

// Desafio 7
// ref : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let rangeCat1 = mouse - cat1;
  let rangeCat2 = mouse - cat2;
  if ( Math.abs(rangeCat1) === Math.abs(rangeCat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(rangeCat1) < Math.abs(rangeCat2)) {
    return 'cat1';
  } else {(Math.abs(rangeCat2) < Math.abs(rangeCat1));
    return 'cat2';
  }
} // Essa função recebe três parâmetros de posições, do rato, do cat 1 e do cat 2 respectivamente. Nesse desafio usei o método "Math.abs()" para retornar o valor da distância em módulo. A variável "rangeCat1" verifica a distância do 'cat1' em relação ao 'mouse'. A variável "rangeCat2" faz a mesma coisa só que com a distância do 'cat2' em relação ao mouse. Se a distância dos cats 1 e 2 é a mesma em relação ao mouse, a função retorna a string 'os gatos trombam e o rato foge'. Se a distância do cat1 for menor do que a distância do cat2 em relação ao mouse, a função retorna 'cat1'. Caso o contrário aconteça, ela retorna 'cat2'.
 
// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0){ 
    resultado.push('fizzBuzz');
      } else if ((index % 5 === 0)) {
    resultado.push('buzz');
      } else if ((index % 3 === 0)) {
    resultado.push('fizz');
      } else {
    resultado.push('bug!');
      };
    } return resultado;  
}
// Essa função recebe um array numérico. A variável "resultado" é um array vazio, feito para armazenar dados. Se os números recebidos forem divisíveis por 3 e por 5, utilizando o método '.push', a string 'fizzBuzz' é enviada para a última posição do array "resultado". Se o número recebido for divisível apenas por 5, é armazenada a string 'buzz' no final do array "resultado". Já se o número recebido for divisível apenas por 3, é armazenada a string 'fizz' no final do array "resultado". Se os número recebido não atender à nenhuma das três condições anteriores, é armazenada a string 'bug' no final do array "resultado".
  
// Desafio 9
// ref : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
function encode(palavra) {
  let letras = [];
  for (let letra of palavra){
    letras.push(letra);
  }
  for (let index = 0; index < letras.length; index += 1) {
      if (letras[index] === 'a') {
        letras[index] = '1';
      } else if (letras[index] === 'e') {
        letras[index] = '2';
      } else if (letras[index] === 'i') {
        letras[index] = '3';
      } else if (letras[index] === 'o') {
        letras[index] = '4';
      } else if (letras[index] === 'u') 
        letras[index] = '5';
    }
    return letras.join('')
  } 
      
function decode(palavra) {
  let numbers = [];
  for (let number of palavra){
    numbers.push(number);
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === '1') {
      numbers[index] = 'a';
    } else if (numbers[index] === '2') {
      numbers[index] = 'e';
    } else if (numbers[index] === '3') {
      numbers[index] = 'i';
    } else if (numbers[index] === '4') {
      numbers[index] = 'o';
    } else if (numbers[index] === '5') {
      numbers[index] = 'u';
    }
  }
  return numbers.join('');
} 

// Nesse deasfio usei o método join(), para juntar os elementos do array "letras" em uma string e retornar a mesma. A função "encode" recebe uma string como parâmetro. A variável "letras" é um array vazio onde os caracteres serão armazenados separadamente. No primeiro 'for' ocorre o acesso de cada caractere da string recebida, armazenando-os no array "letras" com o auxílio do método ".push". No segundo 'for' ocorre a comparação das letras de cada palavra no array "letras". Se a variável de posição (letras[index]) de uma determinada palavra tiver o mesmo valor e o mesmo tipo da string da vogal comparada, acontece a troca pelo número respectivo atrelado à esta vogal nas condicionais da função. Depois a função retorna o array unificado com o auxílio do método ".join".
// A função decode faz o processo inverso da função decode. Ele compara as palavras codificadas e às decodifica. 


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
