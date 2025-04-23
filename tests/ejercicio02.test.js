const { multiplicarWhile, multiplicarFor, multiplicarDoWhile } = require('../ejercicio02');

describe('Ejercicio 2 - Multiplicación mediante sumas sucesivas', () => {
  const casos = [
    { a: 5, b: 3, esperado: 15 },
    { a: 4, b: 4, esperado: 16 },
    { a: 0, b: 5, esperado: 0 },
    { a: 1, b: 10, esperado: 10 },
    { a: 7, b: 0, esperado: 0 }
  ];

  describe('Usando while', () => {
    casos.forEach(({ a, b, esperado }) => {
      test(`${a} × ${b} debe ser ${esperado}`, () => {
        expect(multiplicarWhile(a, b)).toBe(esperado);
      });
    });
  });

  describe('Usando for', () => {
    casos.forEach(({ a, b, esperado }) => {
      test(`${a} × ${b} debe ser ${esperado}`, () => {
        expect(multiplicarFor(a, b)).toBe(esperado);
      });
    });
  });

  describe('Usando do-while', () => {
    casos.forEach(({ a, b, esperado }) => {
      test(`${a} × ${b} debe ser ${esperado}`, () => {
        expect(multiplicarDoWhile(a, b)).toBe(esperado);
      });
    });
  });
}); 