const { resultadoFactoriales } = require('../ejercicio11')

describe('Ejercicio 11 - Factoriales de 10 números (sin funciones ni arrays)', () => {
  // Los 10 números de entrada están definidos en `ejercicio11.js`.
  test('Debe generar el listado correcto de factoriales', () => {
    const factorial = (n) => {
      if (n < 0) return 'N/A'
      if (n === 0 || n === 1) return 1
      let result = 1
      for (let i = 2; i <= n; i++) {
        result *= i
      }
      return result
    }

    const numeros = [5, 3, 7, 0, 1, 8, 2, 4, 6, 10]
    const lineas = numeros.map(num => `Factorial de ${num} es ${factorial(num)}`)
    const esperado = lineas.join('\n')

    expect(resultadoFactoriales).toBe(esperado)
  })
}) 