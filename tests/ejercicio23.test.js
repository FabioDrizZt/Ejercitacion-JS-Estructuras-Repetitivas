const { encontrarTresMayores } = require('../ejercicio23');

describe('Ejercicio 23 - Tres valores mayores', () => {
  test('Debe encontrar tres mayores correctamente', () => {
    const numeros = [1, 34, 45, 3, 2, 10, 9, 8, 78, 55, 3, 78, 43];
    const resultado = encontrarTresMayores(numeros);
    expect(resultado).toHaveLength(3);
    expect(resultado).toContain(78);
    expect(resultado).toContain(55);
    expect(resultado).toContain(45);
  });

  test('Debe manejar menos de tres números', () => {
    expect(encontrarTresMayores([3, 78])).toEqual([78, 3]);
  });
}); 