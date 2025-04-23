const { restoPorRestas } = require('../ejercicio08');

describe('Ejercicio 8 - Resto mediante restas', () => {
  const casos = [
    { a: 10, b: 3, esperado: 1 },
    { a: 15, b: 4, esperado: 3 },
    { a: 8, b: 2, esperado: 0 },
    { a: 7, b: 5, esperado: 2 },
    { a: 3, b: 7, esperado: 3 }
  ];

  casos.forEach(({ a, b, esperado }) => {
    test(`${a} % ${b} debe ser ${esperado}`, () => {
      expect(restoPorRestas(a, b)).toBe(esperado);
    });
  });

  test('Debe rechazar división por cero', () => {
    expect(() => restoPorRestas(10, 0)).toThrow();
  });
}); 