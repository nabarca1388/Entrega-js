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
    "Plazo fijo 30",
    dineroFCI,
    30,
    4.5,
))

fci.push(new PlazoFijo(
    "Plazo fijo 60",
    dineroFCI,
    60,
    10.2,
))

fci.push(new PlazoFijo(
    "Plazo fijo 90",
    dineroFCI,
    90,
    18,
))

fci.forEach(item =>{
    item.dineroFCI = interesFCI(item.cantidad, item.interes);
})

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
