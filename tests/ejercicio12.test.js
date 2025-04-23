const { encontrarMayorMenor } = require('../ejercicio12');

describe('Ejercicio 12 - Mayor y menor de 20 números', () => {
  test('Debe encontrar mayor y menor correctamente', () => {
    const numeros = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10,
                     15, 12, 18, 11, 19, 13, 17, 14, 16, 20];
    const resultado = encontrarMayorMenor(numeros);
    expect(resultado).toEqual({
      mayor: 20,
      menor: 1
    });
  });
}); 