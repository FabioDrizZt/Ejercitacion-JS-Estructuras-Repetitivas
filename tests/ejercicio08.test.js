const { restoPorRestas, resultadoResto } = require('../ejercicio08');

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

describe('Ejercicio 8 - Resto mediante restas (sin funciones ni arrays)', () => {
  // Los números de entrada (a y b) están definidos en `ejercicio08.js`.
  // El test actual asume que a = 10 y b = 3.
  test('Debe calcular el resto correcto para a = 10, b = 3', () => {
    const esperado = 1
    expect(resultadoResto).toBe(esperado)
  })

  // Para probar con otros números (ej: 3 % 7 = 3):
  // 1. Cambia `a` a 3 y `b` a 7 en `ejercicios/ejercicio08.js`.
  // 2. Comenta el test anterior y descomenta el siguiente.
  /*
  test('Debe calcular el resto correcto para a = 3, b = 7', () => {
    const esperado = 3;
    expect(resultadoResto).toBe(esperado);
  });
  */

  // Para probar la división por cero:
  // 1. Cambia `b` a 0 en `ejercicios/ejercicio08.js`.
  // 2. Comenta los tests anteriores y descomenta el siguiente.
  /*
  test('Debe mostrar un error para división por cero', () => {
    const esperado = 'Error: División por cero';
    expect(resultadoResto).toBe(esperado);
  });
  */
}) 