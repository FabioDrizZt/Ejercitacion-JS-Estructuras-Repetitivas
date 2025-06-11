const { calcularPorcentajesEstudios, resultadoPorcentajes } = require('../ejercicio18');

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

describe('Ejercicio 18 - Porcentajes de niveles de estudio (sin funciones ni arrays)', () => {
  // Los datos de la encuesta están definidos en `ejercicio18.js`.
  test('Debe calcular los porcentajes correctamente y formatear el string', () => {
    // Basado en los datos: 1 Primario, 3 Secundario, 1 Sup. No Univ., 2 Univ., 1 Postgrado
    // Total: 8 personas
    // Porcentajes: P=12.50, S=37.50, SNU=12.50, U=25.00, PG=12.50
    const esperado = 'Primario: 12.50%, Secundario: 37.50%, Superior no universitario: 12.50%, Universitario: 25.00%, Postgrado: 12.50%'

    expect(resultadoPorcentajes).toBe(esperado)
  })
}) 