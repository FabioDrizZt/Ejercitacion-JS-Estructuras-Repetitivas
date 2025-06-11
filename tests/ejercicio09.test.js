const { generarFactoriales, listadoFactoriales } = require('../ejercicio09');

describe('Ejercicio 9 - Números y sus factoriales', () => {
  test('Debe generar factoriales correctamente para N=5', () => {
    const resultado = generarFactoriales(5);
    const esperado = [
      { numero: 1, factorial: 1 },
      { numero: 2, factorial: 2 },
      { numero: 3, factorial: 6 },
      { numero: 4, factorial: 24 },
      { numero: 5, factorial: 120 }
    ];
    expect(resultado).toEqual(esperado);
  });

  test('Debe manejar N=1 correctamente', () => {
    expect(generarFactoriales(1)).toEqual([
      { numero: 1, factorial: 1 }
    ]);
  });
});

describe('Ejercicio 9 - Números y sus factoriales (sin funciones ni arrays)', () => {
  // El número de entrada N está definido en `ejercicio09.js`.
  // El test actual asume que N = 5.
  test('Debe generar el listado correcto de factoriales para N=5', () => {
    const esperado = '1, 1\n' +
                     '2, 2\n' +
                     '3, 6\n' +
                     '4, 24\n' +
                     '5, 120'
    expect(listadoFactoriales).toBe(esperado)
  })

  // Para probar con otro número (ej: N=1):
  // 1. Cambia `n` a 1 en `ejercicios/ejercicio09.js`.
  // 2. Comenta el test anterior y descomenta el siguiente.
  /*
  test('Debe generar el listado correcto de factoriales para N=1', () => {
    const esperado = '1, 1';
    expect(listadoFactoriales).toBe(esperado);
  });
  */
}) 