let readlineSync = require('readline-sync');
let nacimiento=readlineSync.question("Dime cual es tu fecha de nacimiento (YYYY-MM-DD)");
nacimiento= new Date(nacimiento);
let fechaActual = new Date();
do {
    if (!isNaN(nacimiento)){
    let diferencia= fechaActual-nacimiento;
    let edadtotal= diferencia/ (1000 * 60 * 60 * 24 * 365);
    console.log(Math.floor(edadtotal));
    }else{
        console.log("No esta bien introducida la fecha")
    }
    
} while (isNaN(nacimiento));

