const { calcularMedias } = require('../ejercicio13');
const { mediaPositivos, mediaNegativos } = require('../ejercicio13');

describe('Ejercicio 13 - Media de positivos y negativos', () => {
  test('Debe calcular medias correctamente', () => {
    const numeros = [1, -2, 3, -4, 5, -6, 0];
    const resultado = calcularMedias(numeros);
    expect(resultado).toEqual({
      mediaPositivos: 3,
      mediaNegativos: -4
    });
  });

  test('Debe manejar solo positivos', () => {
    const resultado = calcularMedias([1, 2, 3, 0]);
    expect(resultado).toEqual({
      mediaPositivos: 2,
      mediaNegativos: 0
    });
  });
});

describe('Ejercicio 13 - Media de positivos y negativos (sin funciones ni arrays)', () => {
  // Los números de entrada están definidos en `ejercicio13.js`.
  test('Debe calcular las medias correctamente', () => {
    // Para el conjunto de números [1, -2, 3, -4, 5, -6], las medias son:
    // Positivos: (1 + 3 + 5) / 3 = 3
    // Negativos: (-2 + -4 + -6) / 3 = -4
    const esperadoPositivos = 3
    const esperadoNegativos = -4

    expect(mediaPositivos).toBe(esperadoPositivos)
    expect(mediaNegativos).toBe(esperadoNegativos)
  })

  // Para probar un caso con solo números positivos:
  // 1. Reemplaza los números en `ejercicios/ejercicio13.js` por, ej: 1, 2, 3, 0.
  // 2. Comenta el test anterior y descomenta el siguiente.
  /*
  test('Debe manejar solo positivos correctamente', () => {
    // Para el conjunto [1, 2, 3], las medias son:
    // Positivos: (1 + 2 + 3) / 3 = 2
    // Negativos: 0 (porque no hay)
    const esperadoPositivos = 2;
    const esperadoNegativos = 0;

    expect(mediaPositivos).toBe(esperadoPositivos);
    expect(mediaNegativos).toBe(esperadoNegativos);
  });
  */
}) 