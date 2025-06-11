const { resultadoWhile, resultadoFor, resultadoDoWhile } = require('../ejercicio02')

describe('Ejercicio 2 - Multiplicación mediante sumas sucesivas (sin funciones ni arrays)', () => {
  // Los números a multiplicar están definidos en `ejercicio02.js` como:
  // const a = 5;
  // const b = 3;
  const esperado = 15

  test('debe multiplicar usando while', () => {
    expect(resultadoWhile).toBe(esperado)
  })

  test('debe multiplicar usando for', () => {
    expect(resultadoFor).toBe(esperado)
  })

  test('debe multiplicar usando do-while', () => {
    expect(resultadoDoWhile).toBe(esperado)
  })
}) 