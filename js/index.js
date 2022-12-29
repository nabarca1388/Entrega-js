// Insert a cell at the end of the row
/*
for(i = 0; i < 6; i++){
    var newCell = newRow.insertCell();
    if(i === 0){
        var newText = document.createTextNode(i);
    }else{
        
    var newText = document.createTextNode(accionesMercado[0]);
    }

    newCell.appendChild(newText);
}

*/



//ACTUALLIZAR BILLETERA
let btnActualizar = document.getElementById("actualizar");
let btnLimpiar = document.getElementById("limpiar");

let tableBilletera = document.getElementById("tableBilletera");
let tbodyBilletera = tableBilletera.getElementsByTagName("tbody")[0];

const ejecutar = () => {
    cargar();
    //console.log("click en el boton", nombre);
    alert("Billetera actualizada");
    let billetera = JSON.parse(localStorage.getItem("miBilletera"));

    billetera.forEach((item, index)  => {
        //item["a"] = index;
            var newRow = tbodyBilletera.insertRow();
            Object.keys(item).forEach(key => {
                var newCell = newRow.insertCell();
                var value = document.createTextNode(item[key]);
                newCell.appendChild(value);
                });
        })
}


const vaciar = () => {
    tbodyBilletera.remove();
    alert("Billetera vacia");
}


btnLimpiar.onclick = () => vaciar();
btnActualizar.onclick = () => ejecutar();







