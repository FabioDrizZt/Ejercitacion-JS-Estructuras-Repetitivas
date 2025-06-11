const { stockFinal, totalIngresos, totalEgresos } = require('../ejercicio24');

describe('Ejercicio 24 - Gestión de stock de galpón (sin funciones ni arrays)', () => {
  // Los datos de entrada están definidos en `ejercicio24.js`.
  test('Debe calcular el stock final y los totales de movimientos correctamente', () => {
    // Proceso:
    // 1. Stock inicial: 50
    // 2. Ingreso 10 -> Stock: 60, Ingresos: 10
    // 3. Egreso 20 -> Stock: 40, Ingresos: 10, Egresos: 20
    // 4. Ingreso 15 -> Stock: 55, Ingresos: 25, Egresos: 20
    // 5. Egreso 60 -> "NO ALCANZA". Se llevan los 55. Stock: 0, Ingresos: 25, Egresos: 20 + 55 = 75
    const esperadoStockFinal = 0;
    const esperadoTotalIngresos = 25;
    const esperadoTotalEgresos = 75;

    expect(stockFinal).toBe(esperadoStockFinal);
    expect(totalIngresos).toBe(esperadoTotalIngresos);
    expect(totalEgresos).toBe(esperadoTotalEgresos);
  });
}); 