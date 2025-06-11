const { encontrarNumero, numeroEncontrado } = require('../ejercicio15');

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

describe('Ejercicio 15 - Encontrar número con condiciones (sin funciones ni arrays)', () => {
  // La secuencia de números de entrada está definida en `ejercicio15.js`.
  test('Debe encontrar el primer número que cumple las condiciones', () => {
    // El primer número en la secuencia que es:
    // - Múltiplo de 2
    // - No múltiplo de 5
    // - Mayor que 100
    // - Menor que 10.000
    // ...es 102.
    const esperado = 102

    expect(numeroEncontrado).toBe(esperado)
  })
}) 