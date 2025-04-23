const { calcularPromedioWhile, calcularPromedioFor, calcularPromedioDoWhile } = require('../ejercicio01')

describe('Ejercicio 1 - Cálculo de promedio de notas', () => {
  const casos = [
    {
      notas: [7, 8, 9, -1],
      esperado: 8
    },
    {
      notas: [10, 10, 10, -1],
      esperado: 10
    },
    {
      notas: [5, 7, 6, 8, 9, -1],
      esperado: 7
    }
  ]

  describe('Usando while', () => {
    casos.forEach(({ notas, esperado }) => {
      test(`debe calcular promedio ${esperado} para notas ${notas.slice(0, -1)}`, () => {
        expect(calcularPromedioWhile(notas)).toBe(esperado)
      })
    })
  })

  describe('Usando for', () => {
    casos.forEach(({ notas, esperado }) => {
      test(`debe calcular promedio ${esperado} para notas ${notas.slice(0, -1)}`, () => {
        expect(calcularPromedioFor(notas)).toBe(esperado)
      })
    })
  })

  describe('Usando do-while', () => {
    casos.forEach(({ notas, esperado }) => {
      test(`debe calcular promedio ${esperado} para notas ${notas.slice(0, -1)}`, () => {
        expect(calcularPromedioDoWhile(notas)).toBe(esperado)
      })
    })
  })
})
