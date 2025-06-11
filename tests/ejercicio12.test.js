const { mayor, menor } = require('../ejercicio12');

describe('Ejercicio 12 - Mayor y menor de 20 números (sin funciones ni arrays)', () => {
  // Los 20 números de entrada están definidos en `ejercicio12.js`.
  test('Debe encontrar el mayor y el menor correctamente', () => {
    // Para el conjunto de números dado, el mayor es 20 y el menor es 1.
    const esperadoMayor = 20;
    const esperadoMenor = 1;

    expect(mayor).toBe(esperadoMayor);
    expect(menor).toBe(esperadoMenor);
  });
}); 