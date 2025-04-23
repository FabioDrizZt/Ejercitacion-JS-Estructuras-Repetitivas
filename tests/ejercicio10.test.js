const { fibonacci100 } = require('../ejercicio10');

describe('Ejercicio 10 - Primeros 100 números de Fibonacci', () => {
  test('Debe generar los primeros 100 números de Fibonacci correctamente', () => {
    const resultado = fibonacci100();
    expect(resultado).toHaveLength(100);
    expect(resultado[0]).toBe(0);
    expect(resultado[1]).toBe(1);
    for (let i = 2; i < resultado.length; i++) {
      expect(resultado[i]).toBe(resultado[i-1] + resultado[i-2]);
    }
  });
}); 