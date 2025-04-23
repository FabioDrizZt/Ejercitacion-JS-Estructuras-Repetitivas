const { calcularPasajerosFinales } = require('../ejercicio25');

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