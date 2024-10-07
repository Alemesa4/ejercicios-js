let readlineSync = require('readline-sync');

let frase = readlineSync.question("Dime una palabra y te la dire al reves");
let frasealreves="";
for(let i=frase.length-1;i>=0;i--){

    frasealreves += frase[i];

}
console.log(frasealreves);