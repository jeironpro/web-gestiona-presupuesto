let balanceInicial = 0;
let gastosTotales = 0;

function agregarIngresos() {
    const ingresos = parseInt(document.getElementById('ingresos').value);
    const totalIngresos = document.getElementById("totalIngresos");
    totalIngresos.textContent = ingresos;
    balanceInicial = ingresos;
    actualizarBalance();
    limpiarInput();
}

function agregarGastos() {
    const gastos = parseInt(document.getElementById('gastos').value);
    balanceInicial -= gastos;
    gastosTotales += gastos; 
    actualizarBalance();
    actualizarGastos();
    limpiarInput();
}

function actualizarGastos() {
    const totalGastos = document.getElementById("totalGastos");
    totalGastos.textContent = gastosTotales;
}

function actualizarBalance() {
    const balance = document.getElementById("balance");

    if (balanceInicial <= 0) {
        balance.textContent = 0;
    } else {
        balance.textContent = balanceInicial;
    }
}

function limpiarInput() {
    document.getElementById('ingresos').value = '';
    document.getElementById('gastos').value = '';
}