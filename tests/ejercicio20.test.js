const { registrarVentas } = require('../ejercicio20');
const { totalVentas, numeroClientes } = require('../ejercicio20');

describe('Ejercicio 20 - Registro de ventas', () => {
  test('Debe calcular totales correctamente', () => {
    const ventas = [100.50, 200.75, 50.25];
    const resultado = registrarVentas(ventas);
    expect(resultado).toEqual({
      totalVentas: 351.50,
      numeroClientes: 3
    });
  });
});

describe('Ejercicio 20 - Registro de ventas (sin funciones ni arrays)', () => {
  // Las ventas de entrada están definidas en `ejercicio20.js`.
  test('Debe calcular el total de ventas y el número de clientes correctamente', () => {
    // Ventas: 150.50, 75.00, 300.25, 50.00
    // Total Clientes: 4
    // Total Ventas: 575.75
    const esperadoVentas = 575.75;
    const esperadoClientes = 4;

    expect(totalVentas).toBeCloseTo(esperadoVentas);
    expect(numeroClientes).toBe(esperadoClientes);
  });
}); 