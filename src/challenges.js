// Desafio 1
function compareTrue(b1, b2) {
  return b1 === true && b2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let words = []
  let word = '';
  sentence += ' ';
  for(let count = 0; count < sentence.length; count++) {
    if(sentence[count] == ' ') {
    words.push(word);
    word ='';
    } else {
      word = word + sentence[count];
    }
  }
  return words;
}

// Desafio 4
function concatName(concat) {
  let str1 = concat[0]
  let str2 = concat[concat.length-1];
  let str3 = [];
  return (str2 +', '+str1);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3+ties);
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  contador = 0;
  for(let count =0; count < numeros.length;count++) {
    if (maior <numeros[count])
    {
      maior = numeros[count];
    }
  }
  for(let count =0; count< numeros.length; count++)
  {
    if( maior === numeros[count])
    {
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pcat1=0;
  let pcat2=0;
  if(cat1<mouse)
  {
    for(let count=cat1; count<= mouse; count++)
    {
      pcat1++;
    }
  }else if ( cat1>mouse)
  {
    for(let count=cat1; count>= mouse; count--)
    {
      pcat1++;
    }
  }
  if(cat2<mouse)
  {
    for(let count=cat2; count<= mouse; count++)
    {
      pcat2++;
    }
  }else if ( cat2>mouse)
  {
    for(let count=cat2; count>= mouse; count--)
    {
      pcat2++;
    }
  }
  if (pcat1<pcat2)
  {
    return 'cat1';
  } else if ( pcat2<pcat1)
  {
    return 'cat2';
  }else {return "os gatos trombam e o rato foge";}
}

// Desafio 8
function fizzBuzz(numeros) {
  let fizzreturn =[];
  for( let count= 0;count<numeros.length;count++)
  {
    if(numeros[count] % 3 === 0 && numeros[count] % 5 === 0)
    {
      fizzreturn.push("fizzBuzz");
    } 
    else if ( numeros[count]% 3 ===0)
    {
      fizzreturn.push("fizz");
    }
    else if (numeros[count]% 5 ===0)
    {
      fizzreturn.push("buzz");
    }
    else if(numeros[count] % 3 !== 0 && numeros[count] % 5 !== 0)
    {
      fizzreturn.push("bug!");
    } 
  }
  return fizzreturn;
}

// Desafio 9
function encode(frase) {
  let fraseEncode = '';
for(let count =0; count <frase.length; count++)
{
  if (frase[count] == 'a') {
    fraseEncode += '1';
  } else if (frase[count] == 'e') {
      fraseEncode += '2';
  }else if (frase[count] =='i') {
      fraseEncode += '3';
  }else if (frase[count] =='o') {
      fraseEncode +='4';
  }else if (frase[count] == 'u') {
      fraseEncode += '5';
  }else {
      fraseEncode += frase[count];
  }
}
return fraseEncode;
}

function decode(frase) {
  let fraseEncode = '';
for(let count =0; count <frase.length; count++)
{
  if (frase[count] == '1') {
    fraseEncode += 'a';
  } else if (frase[count] == '2') {
      fraseEncode += 'e';
  }else if (frase[count] =='3') {
      fraseEncode += 'i';
  }else if (frase[count] =='4') {
      fraseEncode +='o';
  }else if (frase[count] == '5') {
      fraseEncode += 'u';
  }else {
      fraseEncode += frase[count];
  }
}
return fraseEncode;
}


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
