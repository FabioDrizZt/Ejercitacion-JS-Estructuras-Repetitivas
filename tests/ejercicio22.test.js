const { calcularEstadisticasNotas } = require('../ejercicio22');
const { promedio, notaMayor, codigoMejor } = require('../ejercicio22');

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

describe('Ejercicio 22 - Estadísticas de notas de clase (sin funciones ni arrays)', () => {
  // Los datos de entrada están definidos en `ejercicio22.js`.
  test('Debe calcular el promedio, la nota mayor y el código del mejor estudiante', () => {
    // Notas válidas: 8, 9, 5, 10
    // Promedio: (8 + 9 + 5 + 10) / 4 = 8
    // Nota Mayor: 10
    // Código del Mejor: 'A06'
    const esperadoPromedio = 8
    const esperadoNotaMayor = 10
    const esperadoCodigoMejor = 'A06'

    expect(promedio).toBe(esperadoPromedio)
    expect(notaMayor).toBe(esperadoNotaMayor)
    expect(codigoMejor).toBe(esperadoCodigoMejor)
  })
}) 