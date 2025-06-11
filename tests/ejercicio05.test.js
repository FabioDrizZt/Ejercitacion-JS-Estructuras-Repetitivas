const { generarParesDescendentes, resultadoDescendente } = require('../ejercicio05');

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

describe('Ejercicio 5 - Números pares descendentes (sin funciones ni arrays)', () => {
  // El número de entrada N está definido en `ejercicio05.js`.
  // El test actual asume que N = 10.
  test('Debe generar la secuencia correcta para N = 10', () => {
    const esperado = '10, 8, 6, 4, 2'
    expect(resultadoDescendente).toBe(esperado)
  })

  // Para probar el caso de un N impar:
  // 1. Cambia el valor de `n` en `ejercicios/ejercicio05.js` a un número impar (ej: 7).
  // 2. Comenta el test anterior y descomenta el siguiente test.
  /*
  test('Debe mostrar un error para N impar', () => {
    const esperado = 'Error: N debe ser un número par.';
    expect(resultadoDescendente).toBe(esperado);
  });
  */
}) 