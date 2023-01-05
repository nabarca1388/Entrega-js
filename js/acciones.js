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

//CARGO LAS ACCIONES A LOCALSTORAGE
localStorage.setItem("accionesMercado", JSON.stringify(accionesMercado));


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



function agregarAcciones(nombre, billetera){
    let billeteraStorage = JSON.parse(localStorage.getItem("accionesMercado"));

    for(i = 0; i < billeteraStorage.length; i++){
        if(nombre === billeteraStorage[i].nombre){
            //console.log(`siiiii`,billeteraStorage[i].nombre);
            billetera.push(billeteraStorage[i]);
            //console.log(billeteraStorage);
            //console.log(billetera);
        }
    }

    return billetera
}
