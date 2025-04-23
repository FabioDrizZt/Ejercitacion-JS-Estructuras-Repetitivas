const { registrarVentas } = require('../ejercicio20');

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