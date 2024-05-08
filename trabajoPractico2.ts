import * as readlineSync from "readline-sync";

let numN1 = readlineSync.questionInt("ingrese un Numero: ");

while(numN1 == 0) {
    
console.log("cero no es un numero aceptable elija otro");
let numN1 = readlineSync.questionInt("ingrese un Numero: ");
console.log(numN1);
}
//la funcion dentro del if devuelve el resto de la divicion 
//si el numero elegido al ser dividido por dos si el resto es igual a cero
//el numero elegido es par, si no es impar.
if(numN1 % (2) == 0){

console.log("el numero es par");
}
else{
    console.log("el numero es impar");
}
