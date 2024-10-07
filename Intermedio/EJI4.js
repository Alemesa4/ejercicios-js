let readlineSync = require('readline-sync');
 
let numero = readlineSync.question('Me puedes decir un numero para calcular su tabla de multiplicar');

let resultado=1;
for(i=1;i<11;i++){
    resultado=i*numero;
    console.log(numero +"*"+i+": "+resultado)
}