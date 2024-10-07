let readlineSync = require('readline-sync');
 
let numero = readlineSync.question('Me puedes decir un numero');
let resultado=1; 
while(numero>0){
resultado *= numero;
numero--;
 }
console.log("El factorial es: "+ resultado);