class Productos{
    constructor(Nombre,Precio){
        this.Nombre=Nombre;
        this.Precio=Precio;
    }
}
const readlineSync = require('readline-sync');

console.log("Buenas vamos a proceder con tu pedido por favor indicanos los precios de cada objeto por separado junto a su nombre");
console.log("Primero dinos cuantos productos has comprado");
let numerop=readlineSync.question("");
let lista=[];
let total=0;

for(i=0;i<numerop;i++){
console.log("Dime el nombre del producto")
let nombre=readlineSync.question("");
console.log("Dime el precio del mimso")
let precio=readlineSync.question("");
precio=parseFloat(precio);
const Producto= new Productos(nombre,precio);
lista.push(Producto);

}
console.log("Esta es tu lista de la compra: ");
console.table(lista);
for(i=0;i< lista.length;i++){
    total+=lista[i].Precio;
}
if (total>=100) {
  let descuento=100*0.10;
    total=total-descuento;
    console.log("Se va a aplicar un descuento del 10% por superar los 100 euros, el descuento sera de "+ descuento);
}
console.log("Esta es tu cuenta total: "+ total);