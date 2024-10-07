let readlineSync = require('readline-sync');
let frase = readlineSync.question("Me puedes dar una frase para contar cuantas palabras tiene");

let arraypalabras= frase.split(" ");

console.log("Tu frase tiene "+arraypalabras.length+" palabras");
