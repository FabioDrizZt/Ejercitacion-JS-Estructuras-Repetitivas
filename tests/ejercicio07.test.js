const { resultadoPotencia } = require('../ejercicio07')

describe('Ejercicio 7 - Potenciación mediante multiplicaciones (sin funciones ni arrays)', () => {
  // La base y el exponente están definidos en `ejercicio07.js`.
  // El test actual asume que base = 2 y exponente = 3.
  test('Debe calcular la potencia correcta para base = 2, exponente = 3', () => {
    const esperado = 8 // 2 * 2 * 2
    expect(resultadoPotencia).toBe(esperado)
  })

  // Para probar el caso de exponente 0 (el resultado debería ser 1):
  // 1. Cambia `exponente` a 0 en `ejercicios/ejercicio07.js`.
  // 2. Comenta el test anterior y descomenta el siguiente.
  /*
  test('Debe calcular la potencia correcta para exponente = 0', () => {
    const esperado = 1;
    expect(resultadoPotencia).toBe(esperado);
  });
  */

  // Para probar con otros números (ej: 5^2 = 25):
  // 1. Cambia `base` a 5 y `exponente` a 2 en `ejercicios/ejercicio07.js`.
  // 2. Comenta los tests anteriores y descomenta el siguiente.
  /*
  test('Debe calcular la potencia correcta para base = 5, exponente = 2', () => {
    const esperado = 25;
    expect(resultadoPotencia).toBe(esperado);
  });
  */
}) 