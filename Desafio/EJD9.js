let numeros=new Set();
while (numeros.size<5){
    let numeroaleatorio=Math.floor(Math.random()*20)+1;
    numeros.add(numeroaleatorio);
}
console.log("Aqui estan los 5 numeros aleatorios del 1 al 20");
console.log(numeros);