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

let valor = accionesMercado.length + fci.length;
let x = 0;

for(let i = 0; i < valor; i++){
    
    if(i < fci.length){
        miBilletera[i] = fci[i];
    }else{
        miBilletera[i] = accionesMercado[x];
        x++;
    }
}


console.log(`TUS ACTIVOS SON: `, miBilletera);

//SUBO BILLETERA A LOCALSTORAGE

const cargar = () => {
    localStorage.setItem("miBilletera", JSON.stringify(miBilletera));
}

