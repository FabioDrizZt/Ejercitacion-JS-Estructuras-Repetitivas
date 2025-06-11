const { fibonacciString } = require('../ejercicio10');

describe('Ejercicio 10 - Primeros 100 números de Fibonacci (sin funciones ni arrays)', () => {
  test('Debe generar el listado correcto de los primeros 100 números de Fibonacci', () => {
    // Usamos BigInt porque los números de Fibonacci crecen muy rápido y superan
    // el límite de los números seguros en JavaScript.
    const fib = [0n, 1n];
    for (let i = 2; i < 100; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    const esperado = fib.join(', ');

    expect(fibonacciString).toBe(esperado);
  });
}); 