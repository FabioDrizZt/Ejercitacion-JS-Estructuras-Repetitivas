const {
  mediaParesFor,
  mediaImparesFor,
  mediaParesWhile,
  mediaImparesWhile,
  mediaParesDoWhile,
  mediaImparesDoWhile
} = require('../ejercicio14')

describe('Ejercicio 14 - Media de pares e impares (sin funciones ni arrays)', () => {
  // Los números de entrada están definidos en `ejercicio14.js`.
  // Pares: 2, 4, 6, 8, 10 -> Media = (30 / 5) = 6
  // Impares: 1, 3, 5, 7, 9 -> Media = (25 / 5) = 5
  const esperadoPares = 6
  const esperadoImpares = 5

  describe('Versión con bucle for', () => {
    test('Debe calcular la media de los pares correctamente', () => {
      expect(mediaParesFor).toBe(esperadoPares)
    })
    test('Debe calcular la media de los impares correctamente', () => {
      expect(mediaImparesFor).toBe(esperadoImpares)
    })
  })

  describe('Versión con bucle while', () => {
    test('Debe calcular la media de los pares correctamente', () => {
      expect(mediaParesWhile).toBe(esperadoPares)
    })
    test('Debe calcular la media de los impares correctamente', () => {
      expect(mediaImparesWhile).toBe(esperadoImpares)
    })
  })

  describe('Versión con bucle do-while', () => {
    test('Debe calcular la media de los pares correctamente', () => {
      expect(mediaParesDoWhile).toBe(esperadoPares)
    })
    test('Debe calcular la media de los impares correctamente', () => {
      expect(mediaImparesDoWhile).toBe(esperadoImpares)
    })
  })
}) 