const { analizarTiempos } = require('../ejercicio17');

describe('Ejercicio 17 - Análisis de tiempos de ciclista', () => {
  test('Debe analizar tiempos correctamente', () => {
    const tiempos = [120, 115, 118, 110, 122];
    const tiempoReferencia = 119;
    const resultado = analizarTiempos(tiempos, tiempoReferencia);
    expect(resultado).toHaveProperty('promedio');
    expect(resultado).toHaveProperty('tiemposMenores');
    expect(resultado).toHaveProperty('mejorTiempo');
  });
}); 