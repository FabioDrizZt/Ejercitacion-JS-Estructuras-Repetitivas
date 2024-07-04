// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.
// A * B = A+A+A+A (B veces) = B+B+B+B (A veces)
// 2 * 5 = 2+2+2+2+2
// 2 * 5 = 5+5
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync

let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))
let suma = 0
let negativo = false
// Lógica opcional para que se sume la menor cantidad de veces
if (B < 0) {
  B *= -1
  negativo = !negativo
}
if (A < 0) {
  A *= -1
  negativo = !negativo
}

if (B > A) {
  // Intercambio de los valores de las variables [A, B] = [B, A]
  const aux = B
  B = A
  A = aux
}

for (let i = 0; i < B; i++) {
  suma += A
  console.log({ suma })
}

if (negativo) {
  suma *= -1
}

console.log({ suma })
