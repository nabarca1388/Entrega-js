function variacionDiaria(apertura, cierre) {
    return (apertura - cierre) / 10
}

function precioCompra(apertura, cierre) {
    return (apertura + cierre) / 2
}


//ACCIONES---------------------------------------------------------------------------------------------

class Accion {
    constructor(nombre, prApertura, prCierre, prCompra, variacion) {
        this.nombre = nombre;
        this.prApertura = prApertura;
        this.prCierre = prCierre;
        this.prCompra = prCompra;
        this.variacion = variacion;
    }
}


//Creo objetos de acciones en array
const accionesMercado = [];

datos['acciones'].forEach(accion => {
    accionesMercado.push(new Accion(
        accion.nombre,
        accion.prApertura,
        accion.prCierre,

        precioCompra(accion.prApertura, accion.prCierre),
        variacionDiaria(accion.prApertura, accion.prCierre),       
     ));    
})


console.log(datos);

accionesMercado.forEach(item => {
    item.variacion = variacionDiaria(item.prApertura, item.prCierre);
    item.prCompra = precioCompra(item.prApertura, item.prCierre);
});

//CARGO LAS ACCIONES A LOCALSTORAGE
localStorage.setItem("accionesMercado", JSON.stringify(accionesMercado));


//CARGO TABLE DE HTML ACCIONES CON EL ARRAY DE ACCIONES
let tableAcciones = document.getElementById("tableAcciones");
let tbody = tableAcciones.getElementsByTagName("tbody")[0];

const cargarTabla = () => {
    tbody.innerHTML = "";
    accionesMercado.forEach((item, index) => {
        //item["a"] = index;
        var newRow = tbody.insertRow();
        Object.keys(item).forEach((key) => {
            var newCell = newRow.insertCell();
            var value = document.createTextNode(item[key]);
            newCell.appendChild(value);
        });
    });
};


function agregarAcciones(activoElegido, cantidad) {
    let accionesMercadoStorage = JSON.parse(localStorage.getItem("accionesMercado"));

    for (i = 0; i < accionesMercadoStorage.length; i++) {
        if (activoElegido === accionesMercadoStorage[i].nombre) {
            console.log("accion elegida", accionesMercadoStorage[i]);
            cargarBilletera(accionesMercadoStorage[i], cantidad);
            return;            
        };
    };
    
    Swal.fire(
        'La accion no se encuentra en el mercado!',
        'You clicked the button!',
        'error'//tipo de icono
    );
};


function comprarAcciones() {
    let activoElegido = document.getElementById("inputComprar").value.toLowerCase();
    let cantidadActivo = parseInt(document.getElementById("inputCantidad").value);

    agregarAcciones(activoElegido, cantidadActivo);

}


let btnComprarAccion = document.getElementById("btnComprarAcciones");
btnComprarAccion.onclick = () => comprarAcciones();
cargarTabla(); 