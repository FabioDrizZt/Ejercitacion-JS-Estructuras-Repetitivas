const { calcularPorcentajesEstudios } = require('../ejercicio18');

describe('Ejercicio 18 - Porcentajes de niveles de estudio', () => {
  test('Debe calcular porcentajes correctamente', () => {
    const datos = [
      'primario', 'secundario', 'universitario',
      'primario', 'postgrado', 'secundario'
    ];
    const resultado = calcularPorcentajesEstudios(datos);
    expect(Object.values(resultado).reduce((a, b) => a + b)).toBe(100);
  });
}); 