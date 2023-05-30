var totalPresupuesto = 0;
var gastos = [];

function Gasto(nombre, gasto) {
    this.nombre = nombre;
    this.gasto = gasto;
}

function insertarGasto(gastoNombre, gastoValor) {
    var gasto = new Gasto(gastoNombre, gastoValor); /* parametros que debe recibir (del contenido de la caja) para asignarlos */
    gastos.push(gasto);
    //variable global, no necesito return
}

var miPresupuesto = document.querySelector('#inputPresupuesto');

var btnPresupuesto = document.querySelector('#btnPresupuesto');
btnPresupuesto.addEventListener('click', function () {
    var presupuestoTabla = document.querySelector('#presupuestoTabla');
    presupuestoTabla.innerHTML = '$' + miPresupuesto.value;
    totalPresupuesto = parseInt(miPresupuesto.value);
});

var btnGasto = document.querySelector('#btnGasto');
btnGasto.addEventListener('click', function () {
    var miGastoValor = document.querySelector('#inputGasto');
    var miGastoNombre = document.querySelector('#inputNombreGasto');
    /* No es aconsejable declarar muchas variables */
    var gastoValor = miGastoValor.value; /* valor de la vista (de la caja) */
    gastoValor = parseFloat(gastoValor);
    gastoTablaParse = parseFloat(gastoTabla);
    gastoTabla.innerHTML = '$' + gastoValor;
    miPresupuesto.value = parseFloat(miPresupuesto.value);
    insertarGasto(miGastoNombre.value, gastoValor); //contexto del click
    console.log(gastos);
    mostrarSaldo();
    mostrarGastos();

});

function mostrarGastos() {
    var tablaGasto = document.querySelector('#cuerpoTablaGasto');
    tablaGasto.innerHTML = '';
    for (let i = 0; i < gastos.length; i++) {
        var nuevoTr = document.createElement('tr');
        var nuevoNombreGasto = document.createElement('td');
        var nuevoValorGasto = document.createElement('td');
        var papelera = document.createElement('td');
        papelera.setAttribute('class', 'text-primary me-2 btnEliminar');
        var iconoPapelera = document.createElement('i');
        iconoPapelera.setAttribute('class', 'fa fa-trash');
        iconoPapelera.addEventListener('click', borrar);
        iconoPapelera.setAttribute('alt', i);
        nuevoNombreGasto.innerHTML = gastos[i].nombre;
        nuevoValorGasto.innerHTML = '$' + (gastos[i].gasto);
        papelera.appendChild(iconoPapelera);
        nuevoTr.append(nuevoNombreGasto, nuevoValorGasto, papelera);
        tablaGasto.append(nuevoTr);
    }
}

function mostrarSaldo() {
    var suma = 0;
    var gastoTabla = document.querySelector('#gastoTabla');
    for (const totalGasto of gastos) {
        suma += totalGasto.gasto; //acá esta sumando todos los gastos 
    }
    let mostrar = totalPresupuesto - suma;
    saldo = document.querySelector('#saldoTabla');
    if (mostrar < 0) {
        saldo.setAttribute('class', 'txtRojo');
    }
    saldo.innerHTML = '$' + mostrar;
    gastoTabla.innerHTML = '$' + suma;
}

function borrar(){
    let indice = parseInt(this.getAttribute('alt'));
    gastos.splice(indice,1);
    mostrarGastos();
    mostrarSaldo();
}
