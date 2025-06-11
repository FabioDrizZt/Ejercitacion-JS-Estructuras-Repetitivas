const { listadoImpares, listadoPares } = require('../ejercicio04');

describe('Ejercicio 4 - Listados de números pares e impares (sin funciones ni arrays)', () => {
  test('Debe generar el listado correcto de impares hasta 999', () => {
    const impares = [];
    for (let i = 1; i <= 999; i += 2) {
      impares.push(i);
    }
    const esperado = impares.join(', ');

    expect(listadoImpares).toBe(esperado);
  });

  test('Debe generar el listado correcto de pares hasta 1000', () => {
    const pares = [];
    for (let i = 2; i <= 1000; i += 2) {
      pares.push(i);
    }
    const esperado = pares.join(', ');

    expect(listadoPares).toBe(esperado);
  });
}); 