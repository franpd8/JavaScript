// alert("hola")
// https://docs.google.com/document/d/1hgj3t-YltjkdhwJiXMJ9XFs_f3v6-tSMs6DdQ0pI3XI/edit

console.log("----------Ejercicios destructuring-----------")

// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:{"name":"Ana", "email":"Ana@gmail.com"}

const[Luis,Ana,Andrea] = empleados
console.log(Ana) 

const {name:nombre, email:correo} = Ana
console.log(`Hola soy ${nombre} y mi correo es: ${correo}`)
// Extrae el email del empleado Luis --> Luis@gmail.com
const {name, email} = Luis
console.log("El email de Luis es:", email)

// Usa la desestructuración para intercambiar los valores de a y b
// // Inicialmente
// let a = 5;
// let b = 3;
// // Al final
// let a = 3;
// let b = 5;

// --------Versión Función
// let a = 5
// let b = 3
// const arr = [a,b]
// console.log(valorInicial)
// const invertirValor = ([primerValor,segundoValor] = arr) =>{
//     console.log(segundoValor,primerValor)
// } 
// invertirValor()

// ---------Version Sencilla
// array original
let a = 5
let b = 3
const array = [a,b]
console.log(array)
// desestucturacion
const [inicial,final] = array
// nuevo array
const arrayInvertido = [final,inicial]
console.log(arrayInvertido)





console.log("----------Ejercicios Spread/Rest-----------")

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26 

const sumEveryOther= (...numeros) =>{
    const resultado= numeros.reduce((a,b)=> a + b)
    return resultado
}

const resultadoSuma1 = sumEveryOther(6, 8, 2, 3, 1)
console.log(resultadoSuma1)
const resultadoSuma2= sumEveryOther(11, 3, 12)
console.log(resultadoSuma2)

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7

const addOnlyNums = (...numerosycosas) =>{
    console.log(numerosycosas)
    // const arrayNumeros = numerosycosas.filter(Number)
    const arrayNumeros = numerosycosas.filter(cosa => typeof cosa == 'number')
    console.log(arrayNumeros)
    const resultado = arrayNumeros.reduce((a,b)=> a + b)
    return resultado
}

const resultadoSuma3 = addOnlyNums(1, 'perro', 2, 4)
console.log(resultadoSuma3)


// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4


const countTheArgs = (...argumentos) => {return argumentos.length}

const resultadoArgumentos1 = countTheArgs('gato', 'perro')
console.log(resultadoArgumentos1)

const resultadoArgumentos2 = countTheArgs('gato', 'perro', 'pollo', 'oso')
console.log(resultadoArgumentos2)


// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

// arrays ejemplo
const arrayOne = ["Hola"]
const arrayTwo = ["Caracola"]
const arrayThree = ["Cocacola"]

combineTwoArrays = (arr1,arr2)=>{
  const combinarArray = [...arr1, ...arr2]
  return combinarArray
}

const arrayCombinado =combineTwoArrays(arrayOne,arrayThree)
console.log(arrayCombinado)
