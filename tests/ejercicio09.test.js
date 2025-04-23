const { generarFactoriales } = require('../ejercicio09');

describe('Ejercicio 9 - Números y sus factoriales', () => {
  test('Debe generar factoriales correctamente para N=5', () => {
    const resultado = generarFactoriales(5);
    const esperado = [
      { numero: 1, factorial: 1 },
      { numero: 2, factorial: 2 },
      { numero: 3, factorial: 6 },
      { numero: 4, factorial: 24 },
      { numero: 5, factorial: 120 }
    ];
    expect(resultado).toEqual(esperado);
  });

  test('Debe manejar N=1 correctamente', () => {
    expect(generarFactoriales(1)).toEqual([
      { numero: 1, factorial: 1 }
    ]);
  });
}); 