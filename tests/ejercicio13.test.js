const { calcularMedias } = require('../ejercicio13');

describe('Ejercicio 13 - Media de positivos y negativos', () => {
  test('Debe calcular medias correctamente', () => {
    const numeros = [1, -2, 3, -4, 5, -6, 0];
    const resultado = calcularMedias(numeros);
    expect(resultado).toEqual({
      mediaPositivos: 3,
      mediaNegativos: -4
    });
  });

  test('Debe manejar solo positivos', () => {
    const resultado = calcularMedias([1, 2, 3, 0]);
    expect(resultado).toEqual({
      mediaPositivos: 2,
      mediaNegativos: 0
    });
  });
}); 