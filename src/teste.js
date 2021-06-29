let frase = 'Esse e um teste'

function splitSentence(string) {
  let array = [];
  let words = '';
  
  for (let cont = 0; cont < string.length; cont+=1){
    if(string[cont] != " "){
       words += string[cont];
    }else{
      array.push(words);
       words = '';
    }
    
  } 
  array.push(words)
  return array;
}


console.log(splitSentence(frase));
