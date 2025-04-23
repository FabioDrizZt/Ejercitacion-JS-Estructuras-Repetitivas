const { generarImparesHasta999, generarParesHasta1000 } = require('../ejercicio04');

describe('Ejercicio 4 - Listados de números pares e impares', () => {
  test('Debe generar lista correcta de impares hasta 999', () => {
    const impares = generarImparesHasta999();
    expect(impares).toHaveLength(500);
    impares.forEach(num => {
      expect(num % 2).toBe(1);
      expect(num).toBeLessThanOrEqual(999);
    });
  });

  test('Debe generar lista correcta de pares hasta 1000', () => {
    const pares = generarParesHasta1000();
    expect(pares).toHaveLength(500);
    pares.forEach(num => {
      expect(num % 2).toBe(0);
      expect(num).toBeLessThanOrEqual(1000);
    });
  });
}); 