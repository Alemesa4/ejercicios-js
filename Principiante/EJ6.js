let readlineSync = require('readline-sync');

let numero = readlineSync.question('Me puedes decir un numero cualquiera ');

if(numero>10){
console.log("El numero "+numero +" es mayor que 10")
}else{
    console.log("El numero "+numero +" es menor o igual que 10")


}

