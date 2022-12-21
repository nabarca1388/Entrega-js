function resta(valorCompra, valorMercado){
    return valorMercado - valorCompra;
}

function variacionDiaria(apertura, cierre){
    return (apertura - cierre)/10
}

function precioCompra(apertura, cierre){
    return (apertura + cierre)/2
}

function interesFCI(dinero, interes){
    return ((interes * dinero) / 100) + dinero
}


//ACCIONES---------------------------------------------------------------------------------------------

class Accion{
    constructor(nombre, prApertura, prCierre, prCompra, variacion){
        this.nombre = nombre;
        this.prApertura = prApertura;
        this.prCierre = prCierre;
        this.prCompra = prCompra;
        this.variacion = variacion;
    }
}

//BONOS--------------------------------------------------------------------------------------------------
class PlazoFijo{
    constructor(cantidad, dias, interes){
        this.cantidad = cantidad;
        this.dias = dias;
        this.interes = interes;
    }
}

//BILLETERA----------------------------------------------------------------------
class Billetera{
    constructor(activo, prCompra, prDia, ganancia){
        this.activo = activo;
        this.prCompra = prCompra;
        this.prDia = prDia;
        this.ganancia = ganancia;
    }
}


//Creo objetos de acciones en array
const accionesMercado = [];
accionesMercado.push(new Accion(
    "ggal",
     980, 
     1000,  
))
accionesMercado.push(new Accion(
    "tesla",
     2300, 
     2240,  
))


accionesMercado.forEach(item =>{
    item.variacion = variacionDiaria(item.prApertura, item.prCierre);
    item.prCompra = precioCompra(item.prApertura, item.prCierre);
})

/*
accionesMercado.forEach(item =>{
    console.log(`Nombre: ${item.nombre}`);
    console.log(`Precio apertura: $${item.prApertura}`);
    console.log(`Precio cierre: $${item.prCierre}`);
    console.log(`Precio compra: $${item.prCompra}`);
    console.log(`Variacion: %${item.variacion}`);
})
*/

//Creo objetos de plazo fijo
let dineroFCI = 100000;

const fci = [];

fci.push(new PlazoFijo(
    dineroFCI,
    30,
    4.5,
))

fci.push(new PlazoFijo(
    dineroFCI,
    60,
    10.2,
))

fci.push(new PlazoFijo(
    dineroFCI,
    90,
    18,
))

fci.forEach(item =>{
    item.dineroFCI = interesFCI(item.cantidad, item.interes);
})


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


//Revisar MUY MAL
let ordenar = prompt("Desea ordenar su billetera?");

if (ordenar === "si") {
    alert(miBilletera.sort((a,b) => a - b));
}else{
    alert(miBilletera.sort((a,b) => a + b));
}
