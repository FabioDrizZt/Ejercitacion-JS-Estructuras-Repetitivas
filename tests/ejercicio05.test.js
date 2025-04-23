const { generarParesDescendentes } = require('../ejercicio05');

describe('Ejercicio 5 - Números pares descendentes', () => {
  const casos = [
    { n: 10, esperado: [10, 8, 6, 4, 2] },
    { n: 6, esperado: [6, 4, 2] },
    { n: 2, esperado: [2] }
  ];

  casos.forEach(({ n, esperado }) => {
    test(`Debe generar secuencia correcta desde ${n}`, () => {
      expect(generarParesDescendentes(n)).toEqual(esperado);
    });
  });

  test('Debe rechazar números impares', () => {
    expect(() => generarParesDescendentes(7)).toThrow();
  });
}); 