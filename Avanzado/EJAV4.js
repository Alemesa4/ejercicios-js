let readlineSync = require('readline-sync');

let a=readlineSync.question("Dime el primer numero");
let b=readlineSync.question("Dime el segundo numero");
let c=readlineSync.question("Dime el tercer numero");

a=parseInt(a);
b=parseInt(b);
c=parseInt(c);

if (c > a) {
    let temp = c;
    c = a;
    a = temp;
}


if (b > a) {
    let temp = b;
    b = a;
    a = temp;
}


if (c > b) {
    let temp = c;
    c = b;
    b = temp;
}
console.log("El orden es: "+a+">"+b+">"+c)