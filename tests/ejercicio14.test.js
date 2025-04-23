const { calcularMediaParesImpares } = require('../ejercicio14');

describe('Ejercicio 14 - Media de pares e impares', () => {
  test('Debe calcular medias correctamente', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = calcularMediaParesImpares(numeros);
    expect(resultado).toEqual({
      mediaPares: 6,
      mediaImpares: 5
    });
  });

  test('Debe manejar array vacío', () => {
    expect(calcularMediaParesImpares([])).toEqual({
      mediaPares: 0,
      mediaImpares: 0
    });
  });
}); 