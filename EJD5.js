let numeroaleatorio=Math.floor(Math.random()*100);
console.log("He pensando un numero del 1 al 100, me gustaria que lo adivinaras yo te dare pistas");
const readlineSync = require('readline-sync');
let adivinado= false;
while(!adivinado){
let numero = readlineSync.question("Dime un numero ");
if(numero>numeroaleatorio){
    console.log("Te pasaste, es mas pequeño")
}else if(numero<numeroaleatorio){
    console.log("Te has quedado corto, es mas grande")
}else{
    console.log("Felicidades acertaste");
    adivinado=true;
}}