function variacionDiaria(apertura, cierre){
    return (apertura - cierre)/10
}

function precioCompra(apertura, cierre){
    return (apertura + cierre)/2
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


//CARGO TABLE DE HTML ACCIONES CON EL ARRAY DE ACCIONES
let tableAcciones = document.getElementById("tableAcciones");
let tbody = tableAcciones.getElementsByTagName("tbody")[0];

accionesMercado.forEach((item, index)  => {
//item["a"] = index;
    var newRow = tbody.insertRow();
    Object.keys(item).forEach(key => {
        var newCell = newRow.insertCell();
        var value = document.createTextNode(item[key]);
        newCell.appendChild(value);
        });
})



