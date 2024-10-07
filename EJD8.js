const readlineSync = require('readline-sync');
console.log("Voy a calcular tu media de notas, 5 o menos es suspenso")
let notas=[];
let cantidad=readlineSync.question("Cuantos examenes has hecho");
for (i = 0; i < cantidad; i++) {
    let nota = readlineSync.question("Dime la nota");
    nota=parseFloat(nota);
    notas.push(nota);
}
let suma=0;
for (i = 0; i < notas.length; i++) {
    suma += notas[i];
}

let media= suma / notas.length;

console.log("Tu media es: "+ media)

if (media>=5){
    console.log("Estas aprobado")
}else{
    console.log("Estas suspenso, esfuerzate mas")
}