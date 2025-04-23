const { gestionarGalpon } = require('../ejercicio24');

describe('Ejercicio 24 - Gestión de galpón', () => {
  test('Debe gestionar movimientos correctamente', () => {
    const movimientos = [
      { tipo: 'entrada', cantidad: 50 },
      { tipo: 'salida', cantidad: 30 },
      { tipo: 'entrada', cantidad: 20 }
    ];
    const resultado = gestionarGalpon(100, movimientos);
    expect(resultado).toEqual({
      stock
    });
  });
}); 