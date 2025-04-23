const { mostrarMesesRestantes } = require('../ejercicio19');

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