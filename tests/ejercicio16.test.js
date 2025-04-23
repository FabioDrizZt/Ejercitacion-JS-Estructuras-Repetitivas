const { calcularAñoSuperacion } = require('../ejercicio16');

describe('Ejercicio 16 - Crecimiento poblacional', () => {
  test('Debe calcular año correctamente', () => {
    const resultado = calcularAñoSuperacion(25000000, 19900000, 0.02, 0.03);
    expect(resultado).toBeGreaterThan(1994);
  });
}); 