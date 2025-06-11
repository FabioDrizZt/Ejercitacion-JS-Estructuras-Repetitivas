const { mostrarMesesRestantes, informeMeses } = require('../ejercicio19');

describe('Ejercicio 19 - Meses restantes', () => {
  test('Debe mostrar meses correctamente', () => {
    expect(mostrarMesesRestantes(10)).toEqual(['octubre', 'noviembre', 'diciembre']);
    expect(mostrarMesesRestantes(12)).toEqual(['diciembre']);
  });

  test('Debe rechazar mes inválido', () => {
    expect(() => mostrarMesesRestantes(13)).toThrow();
    expect(() => mostrarMesesRestantes(0)).toThrow();
  });
});

describe('Ejercicio 19 - Informe de meses restantes (sin funciones ni arrays)', () => {
  // Las entradas de mes están definidas en `ejercicio19.js`.
  test('Debe generar el informe completo correctamente', () => {
    const esperado = 'Entrada 10: Octubre, Noviembre, Diciembre\n' +
                     'Entrada 15: Mes inválido\n' +
                     'Entrada 5: Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\n' +
                     '---\n' +
                     'Resumen: 2 valores correctos, 1 incorrecto.'

    expect(informeMeses).toBe(esperado)
  })
}) 