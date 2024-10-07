let readlineSync = require('readline-sync');

let nota = readlineSync.question("Dime tu nota para saber si es aprobado(0 a 100)");
nota=parseInt(nota);
if(nota>=60){
    console.log("Estas aprobado")
}else{
    console.log("Estas suspenso")
}