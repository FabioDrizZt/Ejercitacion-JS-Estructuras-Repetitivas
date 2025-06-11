const { calcularPasajerosFinales, pasajerosFinales } = require('../ejercicio25');

describe('Ejercicio 25 - Recorrido de autobús', () => {
  test('Debe calcular pasajeros correctamente', () => {
    expect(calcularPasajerosFinales(10, 3)).toBe(23);
  });

  test('Debe manejar caso sin paradas', () => {
    expect(calcularPasajerosFinales(10, 0)).toBe(10);
  });

  test('Debe rechazar valores negativos', () => {
    expect(() => calcularPasajerosFinales(-1, 3)).toThrow();
    expect(() => calcularPasajerosFinales(10, -1)).toThrow();
  });
});

describe('Ejercicio 25 - Pasajeros de autobús (sin funciones ni arrays)', () => {
  // Los datos de entrada están definidos en `ejercicio25.js`.
  test('Debe calcular el número final de pasajeros correctamente', () => {
    // Proceso:
    // 1. Inicial: 20
    // 2. Parada 1: 20 + 10 - 5 = 25
    // 3. Parada 2: 25 + 7 - 12 = 20
    // 4. Parada 3: 20 + 5 - 8 = 17
    const esperado = 17

    expect(pasajerosFinales).toBe(esperado)
  })
}) 