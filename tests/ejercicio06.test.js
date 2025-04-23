const { dividirPorRestas } = require('../ejercicio06');

describe('Ejercicio 6 - División mediante restas', () => {
  const casos = [
    { a: 10, b: 2, esperado: 5 },
    { a: 15, b: 3, esperado: 5 },
    { a: 8, b: 4, esperado: 2 },
    { a: 7, b: 2, esperado: 3 }, // División entera
    { a: 0, b: 5, esperado: 0 }
  ];

  casos.forEach(({ a, b, esperado }) => {
    test(`${a} ÷ ${b} debe ser ${esperado}`, () => {
      expect(dividirPorRestas(a, b)).toBe(esperado);
    });
  });

  test('Debe rechazar división por cero', () => {
    expect(() => dividirPorRestas(10, 0)).toThrow();
  });
}); 