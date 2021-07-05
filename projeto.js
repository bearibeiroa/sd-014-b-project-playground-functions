function compareTrue(a,b) {
var a=true;
var b=true;
if (a===true && b===true){
    return true;
}
else if(a===false && b===false)
    return false;
}
if (a===false && b===true)
return false;
console.log (compareTrue)
