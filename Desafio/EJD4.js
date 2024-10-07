let array=[1,5,3,4,7,2,9];
let cambio=true;
while(cambio){
    cambio=false;
for(i=0;i<array.length-1;i++){
    if(array[i]>array[i+1]){
     let temp=array [i]; 
     array[i]=array[i+1];
     array[i+1]=temp;
     cambio=true;
    }}
}
console.log(array);