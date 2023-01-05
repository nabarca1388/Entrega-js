//BILLETERA----------------------------------------------------------------------
class Billetera{
    constructor(activo, prCompra, prDia, ganancia){
        this.activo = activo;
        this.prCompra = prCompra;
        this.prDia = prDia;
        this.ganancia = ganancia;
    }
}


//Cargo mi billetera con objetos

const miBilletera = [];


function cargarBilletera (billetera){

    for(i = 0; i < billetera.length; i++){
        miBilletera.push(billetera[i]);
    }
}


