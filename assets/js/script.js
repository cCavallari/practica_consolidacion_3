/* Arreglo para los gastos */
/* Poblarlo y manipularlo */
/* ForEach*/
/* Total del arreglo se muestra en gastos */

var gastos = []; //arreglo vacio

function Gasto(nombre, gasto) { //función constructora
    this.nombre = nombre;
    this.gasto = gasto;
}

function insertarGasto(gastoNombre, gastoValor) { //función que rescatará dos parámetros,
    var gasto = new Gasto(gastoNombre, gastoValor); // los cuales corresponderan a los datos del objeto (en este caso: nombre y gasto), los asignamos a una variable 
    gastos.push(gasto);// y llamamos al arreglo y le hacemos un push de los datos obtenidos y guardados en la variable 
    return gasto;// devolvemos la variable para poder utilizar los datos
}

var miPresupuesto = document.querySelector('#inputPresupuesto');

var btnPresupuesto = document.querySelector('#btnPresupuesto');
btnPresupuesto.addEventListener('click', function () {
    var presupuestoTabla = document.querySelector('#presupuestoTabla');
    presupuestoTabla.innerHTML = '$' + miPresupuesto.value;
});

var btnGasto = document.querySelector('#btnGasto');
btnGasto.addEventListener('click', function () {
    var miGastoValor = document.querySelector('#inputGasto');
    var miGastoNombre = document.querySelector('#inputNombreGasto');
    /* No es aconsejable declarar muchas variables */
    var gastoValor = miGastoValor.value; /* valor de la vista (de la caja) */
    gastoValor = parseFloat(gastoValor);
    var gastoTabla = document.querySelector('#gastoTabla');
    gastoTablaParse = parseFloat(gastoTabla);
    gastoTabla.innerHTML = '$' + gastoValor;
    var miTotal = document.querySelector('#saldoTabla');
    miPresupuesto.value = parseFloat(miPresupuesto.value);
    miTotal.innerHTML = '$' + (miPresupuesto.value - gastoValor);
    if ((miPresupuesto.value - gastoValor) < 0) {
        miTotal.setAttribute('class', 'txtRojo');
    }
    var gasto = insertarGasto(miGastoNombre.value, gastoValor); //contexto del click
    console.log (gastos);

    var nuevoTr = document.createElement('tr');
    var nuevoNombreGasto = document.createElement('td');
    var nuevoValorGasto = document.createElement('td');
    nuevoNombreGasto.innerHTML = gasto.nombre;
    nuevoValorGasto.innerHTML = gasto.gasto;

    var tablaGasto = document.querySelector('#cuerpoTablaGasto');
    console.log(tablaGasto);
    nuevoTr.append(nuevoNombreGasto, nuevoValorGasto);
    tablaGasto.append(nuevoTr);

    miGastoValor.value = "";
    miGastoNombre.value = ""; //en etiquetas vacias para acceder al contenido es .value, si tienen cierre es innerHTML
});