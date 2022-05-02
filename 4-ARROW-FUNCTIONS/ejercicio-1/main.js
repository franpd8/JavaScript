// alert("ey")
console.log(`1. Funciones flecha`)
// —————————————————————————————————————————————————————
// Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
}
console.log(saludar())
//función flecha
const saludarF = () => "hola";
console.log(saludarF())
// —————————————————————————————————————————————————————
// Convierte la siguiente función en una función flecha en línea:
function division(a,b) {
    return a / b;
  }
  console.log(division(6,2))
//función flecha
const divisionF = (a,b) => a / b
console.log(divisionF(6,2))
// —————————————————————————————————————————————————————
// Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}
console.log(miNombre("Pepe"))
//función flecha
const miNombreF = (nombre) => `Mi nombre es ${nombre}`
console.log(miNombreF("Joan"))
// —————————————————————————————————————————————————————
// Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	
//función flecha
const test2F = () => console.log("Función test 2 ejecutada.")
const test1F = (callback) => callback()
// —————————————————————————————————————————————————————