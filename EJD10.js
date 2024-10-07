let filas= 5;
let columnas=20;
let asientos=[];
for (i = 0; i < filas; i++) {
    let fila = [];
    for (j = 0; j < columnas; j++) {
        fila.push(0);
    }
    asientos.push(fila);
}
console.log(asientos);