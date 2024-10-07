class circulo{
    constructor(radio){
        this.radio=radio;
    }
    calculararea(){
        return Math.PI * Math.pow(this.radio,2);
    }

}
const circulo1= new circulo(2);

console.log("El area del circulo es "+Math.trunc(circulo1.calculararea()))