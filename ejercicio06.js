// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync

// 10 / 3 = 10 - 3 - 3 - 3

let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))
let contar = 0

while (A >= B) {
  A = A - B
  contar++
}
console.log(`el resultado de la division es ${contar}`)
console.log(`el resto de la division es ${A}`)
