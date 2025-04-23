const { generarListadoCuadrados } = require('../ejercicio03');

describe('Ejercicio 3 - Listado de números y sus cuadrados', () => {
  test('Debe generar lista correcta del 1 al 100 con sus cuadrados', () => {
    const resultado = generarListadoCuadrados();
    expect(resultado).toHaveLength(100);
    resultado.forEach((item, index) => {
      const numero = index + 1;
      expect(item).toEqual({
        numero: numero,
        cuadrado: numero * numero
      });
    });
  });
}); 