class Libro{
    constructor(titulo,autor,año){
    this.titulo=titulo;
    this.autor=autor;
    this.año=año; 
}
mostrarinfo() {
    console.log("Titulo: " + this.titulo + ", Autor: " + this.autor + ", Año: " + this.año);
}
}
const readlineSync = require('readline-sync');
let salir=false;
let libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez', 1967);
let libro2 = new Libro('1984', 'George Orwell', 1949);
let libro3 = new Libro('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605);
let libro4 = new Libro('Matar a un ruiseñor', 'Harper Lee', 1960);
let libro5 = new Libro('El gran Gatsby', 'F. Scott Fitzgerald', 1925);
let libro6 = new Libro('Orgullo y prejuicio', 'Jane Austen', 1813);
let libro7 = new Libro('Crimen y castigo', 'Fiódor Dostoyevski', 1866);
let libro8 = new Libro('La Odisea', 'Homero', -800);
let libro9 = new Libro('El principito', 'Antoine de Saint-Exupéry', 1943);
let libro10 = new Libro('El señor de los anillos', 'J.R.R. Tolkien', 1954);

let biblioteca = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10];

while(!salir){
console.log("Bienvenido a la biblioteca de Alejandria que quieres hacer?");
console.log("1.Ver los libros que hay");
console.log("2.Añadir libros nuevos");
console.log("3.Eliminar un libro");
console.log("4.Salir");
let opcion = readlineSync.question("");
opcion= parseInt(opcion);
switch (opcion) {
    case 1:
        for(i=0;i<biblioteca.length;i++){
            biblioteca[i].mostrarinfo();
        
        };
        
        break;

        case 2:
            console.log("Dime el titulo");
            let titulo=readlineSync.question("");
            console.log("Dime el autor")
            let autor=readlineSync.question("");
            console.log("Dime el año")
            let año=readlineSync.question("");
         let libro=new Libro(titulo,autor,año);
         biblioteca.push(libro);
            break;
            case 3:
                console.log("Dime el titulo exacto del libro que quieres eliminar");
                let tituloaeliminar=readlineSync.question("");
                let indiceelimnar=biblioteca.findIndex (libro=> libro.titulo === tituloaeliminar);
                if(indiceelimnar !==-1){
                    biblioteca.splice(indiceelimnar,1);
                }
                break;
                case 4:
                    console.log("Espero que te haya gustado nuestra libreria nos vemos pronto");
                    salir=true;
                    break;
    default:
        break;
}}
