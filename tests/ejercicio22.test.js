const { calcularEstadisticasNotas } = require('../ejercicio22');

describe('Ejercicio 22 - Estadísticas de notas', () => {
  test('Debe calcular estadísticas correctamente', () => {
    const notas = [
      { codigo: 'A1', nota: 8.5 },
      { codigo: 'A2', nota: 9.0 },
      { codigo: 'A3', nota: 7.5 }
    ];
    const resultado = calcularEstadisticasNotas(notas);
    expect(resultado).toHaveProperty('promedio');
    expect(resultado).toHaveProperty('notaMayor');
    expect(resultado).toHaveProperty('codigoMejor');
  });

  test('Debe rechazar notas inválidas', () => {
    const notasInvalidas = [
      { codigo: 'A1', nota: 11 },
      { codigo: 'A2', nota: -1 }
    ];
    expect(() => calcularEstadisticasNotas(notasInvalidas)).toThrow();
  });
}); 