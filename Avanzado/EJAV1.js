let readlineSync = require('readline-sync');

let accion;
do{
    let numero = readlineSync.question('Me puedes decir un numero para calcular');
    let numero2= readlineSync.question("Me puedes decir otro numero para calcular");

    numero = parseInt(numero);
    numero2=parseInt(numero2);

    console.log("Ahora dime que operacion quieres hacer")
    accion=readlineSync.question("Multiplicar,Sumar,Restar,Dividir o Salir")
switch (accion.toLowerCase()) {
    case  "multiplicar" :
        console.log("Multiplicación: "+ (numero*numero2))
        
    break;
    case "sumar" :
            console.log("Sumar: "+ (numero+numero2))
            
            break;
    case "restar" :
            console.log("Restar: "+ (numero-numero2))
            
           break;     
    case "dividir" :
            console.log("Dividir: "+ (numero/numero2))
            
           break;   
    case "salir":
        console.log("Muchas gracias por usar la calculadora")
        break; 
    default: 
    console.log("No es una opcion valida");
        break;}
    }
        while (accion.toLowerCase()!="salir");

