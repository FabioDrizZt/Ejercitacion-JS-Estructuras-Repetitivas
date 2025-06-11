const { promedioWhile, promedioFor, promedioDoWhile } = require('../ejercicio01')

describe('Ejercicio 1 - Cálculo de promedio de notas (sin funciones ni arrays)', () => {
  // Las notas de entrada están definidas en `ejercicio01.js` como:
  // const nota1 = 7;
  // const nota2 = 8;
  // const nota3 = 9;
  // const notaFinal = -1;
  const esperado = 8

  test('debe calcular el promedio usando while', () => {
    expect(promedioWhile).toBe(esperado)
  })

  test('debe calcular el promedio usando for', () => {
    expect(promedioFor).toBe(esperado)
  })

  test('debe calcular el promedio usando do-while', () => {
    expect(promedioDoWhile).toBe(esperado)
  })
})
