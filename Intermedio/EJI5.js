let readlineSync=require ("readline-sync");
 
let palabra= readlineSync.question("Dime una palabra para contar sus vocales");
 let vocales=["A","E","I","O","U","a","e","i","o","u"];
 let totalvocales=0;
 for(i=0;i<(palabra.length);i++){
    if(vocales.includes(palabra[i])){
        totalvocales++;
    }
}

console.log("Tiene "+totalvocales+" vocales")
