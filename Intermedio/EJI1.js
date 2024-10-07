let readlineSync = require('readline-sync');

let numero = readlineSync.question('Me puedes decir un numero te dire si es par o impar ');
if(numero%2==0){
    console.log("El numero "+numero + " es par")

}else{
    console.log("El numero "+numero + " es impar")
    
}