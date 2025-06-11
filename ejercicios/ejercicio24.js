// Ejercicio 24
// Un galpón tiene una cantidad inicial de cajones. Repetidamente, entran y salen camiones que
// traen o llevan cantidades de cajones. Si no alcanza la cantidad a llevar, se debe mostrar un
// mensaje "NO ALCANZA", se lleva todo lo que hay y el galpón queda vacío.
// Se muestra al final de la jornada cuantos cajones hay (Stock final), cuantos ingresaron y
// cuantos salieron en toda la jornada.
//
// NOTA: No se deben utilizar funciones ni arrays.
// La entrada de datos se simula con variables. El fin se indica con un centinela.
// El resultado debe ser el stock final y los totales de ingresos y egresos.

// Datos de ejemplo
const stockInicial = 50
const mov1_tipo = 'Ingreso', mov1_cantidad = 10
const mov2_tipo = 'Egreso', mov2_cantidad = 20
const mov3_tipo = 'Ingreso', mov3_cantidad = 15
const mov4_tipo = 'Egreso', mov4_cantidad = 60 // "NO ALCANZA"
const finMovimientos = 'FIN' // Centinela

// --- Implementación ---
// Tu código aquí...
// Procesa la secuencia de movimientos.
// Para los egresos, si la cantidad pedida es mayor al stock, se debe llevar todo
// lo que hay, dejando el stock en 0.
// Al final, calcula las variables `stockFinal`, `totalIngresos`, `totalEgresos`.
const stockFinal = null
const totalIngresos = null
const totalEgresos = null

module.exports = {
  stockFinal,
  totalIngresos,
  totalEgresos
}
