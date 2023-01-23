function interesFCI(dinero, interes){
    return ((interes * dinero) / 100) + dinero
}


//BONOS--------------------------------------------------------------------------------------------------
class PlazoFijo{
    constructor(nombre, cantidad, dias, interes, saldo){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.dias = dias;
        this.interes = interes;
        this.saldo = saldo;
    }
}

//Creo objetos de plazo fijo

const fci = [];

datos['bonos'].forEach(bonos => {
    fci.push(new PlazoFijo(
        bonos.nombre,
        bonos.cantidad,
        bonos.dias,
        bonos.interes,

        interesFCI(bonos.cantidad, bonos.interes),
     ));    
})

console.log(datos);

/*
fci.push(new PlazoFijo(
    "plazo fijo 30",
    dineroFCI,
    30,
    4.5,
));

fci.push(new PlazoFijo(
    "plazo fijo 60",
    dineroFCI,
    60,
    10.2,
));

fci.push(new PlazoFijo(
    "plazo fijo 90",
    dineroFCI,
    90,
    18,
));
*/

//CARGO LAS BONOS A LOCALSTORAGE
localStorage.setItem("fci", JSON.stringify(fci));


//CARGO TABLE DE HTML BONOS CON EL ARRAY DE BONOS
let tableBono = document.getElementById("tableBono");
let tbodyBono = tableBono.getElementsByTagName("tbody")[0];

fci.forEach((item, index)  => {
//item["a"] = index;
    var newRow = tbodyBono.insertRow();
    Object.keys(item).forEach(key => {
        var newCell = newRow.insertCell();
        var value = document.createTextNode(item[key]);
        newCell.appendChild(value);
        });
})


function agregarBonos(activoElegido, cantidad) {
    let bonosMercadoStorage = JSON.parse(localStorage.getItem("fci"));

    for (i = 0; i < bonosMercadoStorage.length; i++) {
        if (activoElegido === bonosMercadoStorage[i].nombre) {
            console.log("accion elegida", bonosMercadoStorage[i]);
            cargarBilletera(bonosMercadoStorage[i], cantidad);
            return;            
        };
    };
    
    Swal.fire(
        'La accion no se encuentra en el mercado!',
        'You clicked the button!',
        'error'//tipo de icono
    );
};


function comprarBonos() {
    //let billetera = JSON.parse(localStorage.getItem("miBilletera")) || [];
    let activoElegido = document.getElementById("inputComprar").value.toLowerCase();
    let cantidadActivo = parseInt(document.getElementById("inputCantidad").value);
  
    agregarBonos(activoElegido, cantidadActivo);
  
  }


let btnComprarBono = document.getElementById("btnComprarBono");
btnComprarBono.onclick = () => comprarBonos(); 

