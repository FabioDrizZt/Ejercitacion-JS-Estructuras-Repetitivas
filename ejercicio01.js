// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync

// let nota = 0
// let suma = 0
// let cantidad = 0
/* do {
  cantidad++
  suma += nota
  nota = prompt(`Ingrese la nota N° ${cantidad}: `) // alt+96 -> `
  nota = parseInt(nota) // Convertir lo leido en string a integer
} while (nota >= 0) */
/* while (nota >= 0) {
  nota = parseInt(prompt(`Ingrese la nota N° ${++cantidad}: `)) 
  if (nota >= 0) {
    suma += nota
  }
} */
for (let nota = suma = cantidad = 0; nota >= 0;) {
  suma += nota
  nota = parseInt(prompt(`Ingrese la nota N° ${++cantidad}: `))
}
console.log(`El promedio es: ${suma / --cantidad}`)
