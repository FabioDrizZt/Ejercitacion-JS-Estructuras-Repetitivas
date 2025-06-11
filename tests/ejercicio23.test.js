const { encontrarTresMayores } = require('../ejercicio23');
const { mayor1, mayor2, mayor3 } = require('../ejercicio23');

describe('Ejercicio 23 - Tres valores mayores', () => {
  test('Debe encontrar tres mayores correctamente', () => {
    const numeros = [1, 34, 45, 3, 2, 10, 9, 8, 78, 55, 3, 78, 43];
    const resultado = encontrarTresMayores(numeros);
    expect(resultado).toHaveLength(3);
    expect(resultado).toContain(78);
    expect(resultado).toContain(55);
    expect(resultado).toContain(45);
  });

  test('Debe manejar menos de tres números', () => {
    expect(encontrarTresMayores([3, 78])).toEqual([78, 3]);
  });
});

describe('Ejercicio 23 - Encontrar los 3 mayores (sin funciones ni arrays)', () => {
  // Los datos de entrada están definidos en `ejercicio23.js`.
  test('Las tres variables deben contener los tres números más grandes', () => {
    // Los tres números más grandes en la secuencia son 100, 90 y 85.
    // Como no se requiere un orden específico en las variables mayor1, mayor2 y mayor3,
    // una forma sencilla de verificar es sumar los resultados y compararlos con la suma esperada.
    const sumaEsperada = 100 + 90 + 85;
    const sumaObtenida = mayor1 + mayor2 + mayor3;

    expect(sumaObtenida).toBe(sumaEsperada);

    // También verificamos que ninguno de los valores sea null, para asegurar que fueron asignados.
    expect(mayor1).not.toBeNull();
    expect(mayor2).not.toBeNull();
    expect(mayor3).not.toBeNull();
  });
}); 