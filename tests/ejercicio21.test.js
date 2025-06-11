const { calcularSalarios, informeSalarios } = require('../ejercicio21');

describe('Ejercicio 21 - Cálculo de salarios', () => {
  test('Debe calcular salarios correctamente', () => {
    const resultado = calcularSalarios(4);
    expect(resultado).toHaveLength(4);
    expect(resultado[0]).toBe(0.01);
    expect(resultado[1]).toBe(0.02);
    expect(resultado[2]).toBe(0.04);
    expect(resultado[3]).toBe(0.08);
  });
});

describe('Ejercicio 21 - Informe de salarios (sin funciones ni arrays)', () => {
  // El número de semanas (nSemanas) está definido en `ejercicio21.js`.
  test('Debe generar el informe de salarios correctamente para 5 semanas', () => {
    // Se construye la cadena esperada para nSemanas = 5.
    // Usamos centavos para evitar problemas de punto flotante y luego formateamos.
    const lineas = []
    let salarioSemanalCentavos = 1
    let totalAcumuladoCentavos = 0

    for (let i = 1; i <= 5; i++) {
      totalAcumuladoCentavos += salarioSemanalCentavos
      const salarioFormateado = (salarioSemanalCentavos / 100).toFixed(2)
      const totalFormateado = (totalAcumuladoCentavos / 100).toFixed(2)
      lineas.push(`Semana ${i}: Salario: $${salarioFormateado}, Total: $${totalFormateado}`)
      salarioSemanalCentavos *= 2
    }
    const esperado = lineas.join('\n')

    expect(informeSalarios).toBe(esperado)
  })
}) 