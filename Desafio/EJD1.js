function Generar(){
    let caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            let readlineSync = require('readline-sync');
    let longitud=readlineSync.question("Dime una longitud de contraseña");
    longitud=parseInt(longitud);
    let contraseña = "";
    let naleatorio;
    for(i=0;i<longitud;i++){
        naleatorio=Math.floor(Math.random()*caracteres.length);
        contraseña= contraseña+caracteres[naleatorio];
    }
console.log(contraseña);
}
Generar();