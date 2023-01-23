//BILLETERA----------------------------------------------------------------------
class Billetera {
    constructor(nombre, tenencia, prCompra, ganancia) {
        this.nombre = nombre;
        this.tenencia = tenencia;
        this.prCompra = prCompra;
        this.ganancia = ganancia;
    }
}


//Cargo mi billetera con objetos

const miBilletera = [];


function cargarBilletera(billetera, cantidad) {
    let billeteraDeStorage = JSON.parse(localStorage.getItem("miBilletera")) || [];

    if (billeteraDeStorage.length === 0) {
        miBilletera.push(new Billetera(
            nombre = billetera.nombre,
            tenencia = cantidad,
            prCompra = billetera.prCompra,
            ganancia = cantidad * billetera.prCompra,
        ));
        localStorage.setItem("miBilletera", JSON.stringify(miBilletera));
        Toastify({
            text: "ACTIVO ADQUIRIDO",
            duration: 3000,
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
            }).showToast();
    } else {

        for (i = 0; i < billeteraDeStorage.length; i++) {

            if (billetera.nombre === billeteraDeStorage[i].nombre) {
                billeteraDeStorage[i].tenencia = billeteraDeStorage[i].tenencia + cantidad;
                billeteraDeStorage[i].ganancia = billeteraDeStorage[i].tenencia * billeteraDeStorage[i].prCompra;
                localStorage.setItem("miBilletera", JSON.stringify(billeteraDeStorage));
                Toastify({
                    text: "ACTIVO ADQUIRIDO",
                    duration: 3000,
                    position: "center",
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                    }).showToast();
                return;
            };
        };

        billeteraDeStorage.push(new Billetera(
            nombre = billetera.nombre,
            tenencia = cantidad,
            prCompra = billetera.prCompra,
            ganancia = cantidad * billetera.prCompra,
        ));
        Toastify({
            text: "ACTIVO ADQUIRIDO",
            duration: 3000,
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
            }).showToast();

        localStorage.setItem("miBilletera", JSON.stringify(billeteraDeStorage));

    };

}



function llenarBilletera() {

    let tableBilletera = document.getElementById("tableBilletera");
    let tbodyBilletera = tableBilletera.getElementsByTagName("tbody")[0];
    let billeteraDeStorage = JSON.parse(localStorage.getItem("miBilletera"));


    billeteraDeStorage.forEach((item, index) => {
        var newRow = tbodyBilletera.insertRow();
        Object.keys(item).forEach(key => {
            var newCell = newRow.insertCell();
            var value = document.createTextNode(item[key]);
            newCell.appendChild(value);
        });
    });
};



let btnActualizar = document.getElementById("actualizar");

if (btnActualizar) {
    btnActualizar.onclick = () => llenarBilletera();
}

