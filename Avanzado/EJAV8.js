let readlineSync = require('readline-sync');
class Tarea{
    constructor(nombre,completada){
        this.nombre=nombre;
        this.completada=completada;
    }
    completar(){
        this.completada=true;
    }
    
}
let Tareasp=[];
let Tareasc=[];
let opcion;
function añadir(Tareasp){
    let tarea=readlineSync.question("Dime una Tarea para añadir");
    Tareasp.push(nombre);
}
function completar(Tareasp,Tareasc){
    let tarea=readlineSync.question("Dime que has completado");
    Tareasc.push(nombre);
    Tareasp = Tareasp.filter(Tareasp => Tareasp !== tarea);
}
function ver(Tareasp,Tareasc){
    console.log("Tareas completadas: "+Tareasc);
    console.log("Tareas pendientes: "+Tareasp)

}
const tarea1= new Tarea();
do {
     opcion=readlineSync.question("Que quieres hacer 1.Ver 2.Añadir 3.Completar 4.Salir" );
    opcion= parseInt(opcion);
switch (opcion) {
    case 1:
        ver(Tareasp,Tareasc);
        break;
        case 2:
        añadir(Tareasp);
        break;
        case 3:
        completar(Tareasp,Tareasc);
        break;
        case 4:
        console.log("Gracias por usar");
        break;

    default:
        break;
}

    
} while (opcion!=4);




