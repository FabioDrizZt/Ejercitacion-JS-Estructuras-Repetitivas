const { promedio, tiemposMenores, mejorTiempo } = require('../ejercicio17')

describe('Ejercicio 17 - Análisis de tiempos de ciclista (sin funciones ni arrays)', () => {
  // Los tiempos de entrada están definidos en `ejercicio17.js`.
  test('Debe calcular el promedio, los tiempos menores y el mejor tiempo correctamente', () => {
    // Tiempos: 300, 280, 310, 295, 275
    // Tiempo de referencia: 290
    const esperadoPromedio = 292 // (1460 / 5)
    const esperadoTiemposMenores = 2 // (280, 275)
    const esperadoMejorTiempo = 275

    expect(promedio).toBe(esperadoPromedio)
    expect(tiemposMenores).toBe(esperadoTiemposMenores)
    expect(mejorTiempo).toBe(esperadoMejorTiempo)
  })
}) 