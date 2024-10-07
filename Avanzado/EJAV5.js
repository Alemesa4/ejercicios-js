let readlineSync = require('readline-sync');

let numero=readlineSync.question("Dime un numero y te digo si es primo");
let es=true;
numero = parseInt(numero);
if (numero>2){
for(i=2;i<numero;i++){  
    if(numero%i==0){
        es=false;
        
    }
}
}else{
es=true;
}
if(es){
    console.log("Es primo");
        }else{
            console.log("No es primo")
        }