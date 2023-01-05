function interesFCI(dinero, interes){
    return ((interes * dinero) / 100) + dinero
}


//BONOS--------------------------------------------------------------------------------------------------
class PlazoFijo{
    constructor(nombre, cantidad, dias, interes){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.dias = dias;
        this.interes = interes;
    }
}

//Creo objetos de plazo fijo
let dineroFCI = 100000;

const fci = [];

fci.push(new PlazoFijo(
    "plazo fijo 30",
    dineroFCI,
    30,
    4.5,
))

fci.push(new PlazoFijo(
    "plazo fijo 60",
    dineroFCI,
    60,
    10.2,
))

fci.push(new PlazoFijo(
    "plazo fijo 90",
    dineroFCI,
    90,
    18,
))

fci.forEach(item =>{
    item.dineroFCI = interesFCI(item.cantidad, item.interes);
})

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



function agregarBonos(nombre, billetera){
    let billeteraStorage = JSON.parse(localStorage.getItem("fci"));

    for(i = 0; i < billeteraStorage.length; i++){
        if(nombre === billeteraStorage[i].nombre){
            console.log(`siiiii`,billeteraStorage[i].nombre);
            billetera.push(billeteraStorage[i]);
            console.log(billeteraStorage);
            console.log(billetera);
        }
    }

    return billetera
}



