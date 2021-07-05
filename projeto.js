function compareTrue(a,b) {
if (a===true && b===true){
    return true;
}
else if(a===false && b===false){
    return false;
}
else if (a===false && b===true){
    return false;
}
  }
console.log(compareTrue);

