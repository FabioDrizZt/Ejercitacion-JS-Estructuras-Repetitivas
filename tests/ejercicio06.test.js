const { dividirPorRestas, resultadoDivision } = require('../ejercicio06');

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

describe('Ejercicio 6 - División mediante restas (sin funciones ni arrays)', () => {
  // Los números de entrada (a y b) están definidos en `ejercicio06.js`.
  // El test actual asume que a = 10 y b = 2.
  test('Debe realizar la división correcta para a = 10, b = 2', () => {
    const esperado = 5
    expect(resultadoDivision).toBe(esperado)
  })

  // Para probar la división entera (ej: 7 / 2 = 3):
  // 1. Cambia `a` a 7 y `b` a 2 en `ejercicios/ejercicio06.js`.
  // 2. Comenta el test anterior y descomenta el siguiente.
  /*
  test('Debe realizar la división entera correcta para a = 7, b = 2', () => {
    const esperado = 3;
    expect(resultadoDivision).toBe(esperado);
  });
  */

  // Para probar la división por cero:
  // 1. Cambia `b` a 0 en `ejercicios/ejercicio06.js`.
  // 2. Comenta los tests anteriores y descomenta el siguiente.
  /*
  test('Debe mostrar un error para división por cero', () => {
    const esperado = 'Error: División por cero';
    expect(resultadoDivision).toBe(esperado);
  });
  */
}) 