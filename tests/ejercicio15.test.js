const { encontrarNumero } = require('../ejercicio15');

describe('Ejercicio 15 - Encontrar número con condiciones', () => {
  test('Debe encontrar número válido', () => {
    const numeros = [102, 105, 98, 1002, 2];
    const resultado = encontrarNumero(numeros);
    expect(resultado).toBe(102);
  });

  test('Debe manejar array vacío', () => {
    const numeros = [];
    expect(() => encontrarNumero(numeros)).toThrow();
  });

  test('Debe manejar array sin números válidos', () => {
    const numeros = [1, 2, 3, 4, 5];
    expect(() => encontrarNumero(numeros)).toThrow();
  });
}); 