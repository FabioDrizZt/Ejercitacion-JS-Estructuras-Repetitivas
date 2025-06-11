const { anioSuperacion } = require('../ejercicio16')

describe('Ejercicio 16 - Superación de población (sin funciones ni arrays)', () => {
  test('Debe calcular el año correcto en que la población de B supera a la de A', () => {
    // Cálculo del año esperado
    let pobA = 25000000
    let pobB = 19900000
    const tasaA = 0.02
    const tasaB = 0.03
    let anio = 1994

    while (pobB <= pobA) {
      pobA += pobA * tasaA
      pobB += pobB * tasaB
      anio++
    }
    const esperado = anio

    expect(anioSuperacion).toBe(esperado)
  })
}) 