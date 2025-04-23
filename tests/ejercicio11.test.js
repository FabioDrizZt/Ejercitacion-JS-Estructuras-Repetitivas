const { calcularFactoriales } = require('../ejercicio11');

describe('Ejercicio 11 - Factoriales de 10 números', () => {
  test('Debe calcular factoriales correctamente', () => {
    const numeros = [1, 2, 3, 4, 5];
    const resultado = calcularFactoriales(numeros);
    expect(resultado).toEqual([1, 2, 6, 24, 120]);
  });

  test('Debe manejar el cero correctamente', () => {
    expect(calcularFactoriales([0])).toEqual([1]);
  });
}); 