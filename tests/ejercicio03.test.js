const { listadoCuadrados } = require('../ejercicio03');

describe('Ejercicio 3 - Listado de números y sus cuadrados (sin funciones ni arrays)', () => {
  test('Debe generar el listado correcto del 1 al 100 con sus cuadrados', () => {
    const lineas = [];
    for (let i = 1; i <= 100; i++) {
      lineas.push(`${i}, ${i * i}`);
    }
    const esperado = lineas.join('\n');

    expect(listadoCuadrados).toBe(esperado);
  });
}); 