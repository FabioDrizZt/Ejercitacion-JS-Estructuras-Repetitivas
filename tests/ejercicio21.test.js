const { calcularSalarios } = require('../ejercicio21');

describe('Ejercicio 21 - Cálculo de salarios', () => {
  test('Debe calcular salarios correctamente', () => {
    const resultado = calcularSalarios(4);
    expect(resultado).toHaveLength(4);
    expect(resultado[0]).toBe(0.01);
    expect(resultado[1]).toBe(0.02);
    expect(resultado[2]).toBe(0.04);
    expect(resultado[3]).toBe(0.08);
  });
}); 