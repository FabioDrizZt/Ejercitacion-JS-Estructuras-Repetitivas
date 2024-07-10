// 22. Calcular la nota promedio de un salón de clase y la nota mayor y el código del estudiante
// que la obtuvo, validar que las notas ingresadas se encuentren en el intervalo [0,10]. El
// ingreso de notas finaliza a pedido del operador.
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync

let mayorNota = Number.MIN_SAFE_INTEGER
let codMejorEstudiante = 0
let sumaNotas = 0
let cantidadNotas = 0
let opcion = 'S'
let nota = 0
let codAlumno
do {
  do {
    nota = Number(prompt('Ingrese una nota entre 0 y 10: '))
  } while (nota < 0 || nota > 10)
  codAlumno = Number(prompt('Ingrese el código del alumno: '))
  // Calcular mayor nota
  if (nota > mayorNota) {
    mayorNota = nota
    codMejorEstudiante = codAlumno
  }
  // TODO: Calcular el promedio de las notas ingresadas
  sumaNotas += nota
  cantidadNotas++
  opcion = prompt('Desea ingresar mas notas? Si o No: ')
} while (opcion[0].toUpperCase() === 'S')
console.log(`La mayor nota ingresada fue: ${mayorNota}`)
console.log(`El alumno que la obtuvo fue: ${codMejorEstudiante}`)
// Mostramos el promedio
const promedioNotas = sumaNotas / cantidadNotas
console.log(`El promedio de notas ingresadas es: ${promedioNotas}`)
