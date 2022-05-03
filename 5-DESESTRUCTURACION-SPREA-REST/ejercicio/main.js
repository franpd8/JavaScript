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
const arrayOne = ["Hola",1]
const arrayTwo = ["Caracola",2]
const arrayThree = ["Cocacola",3]

combineTwoArrays = (arr1,arr2)=>{
  const combinarArray = [...arr1, ...arr2]
  return combinarArray
}

const arrayCombinado =combineTwoArrays(arrayOne,arrayThree)
console.log(arrayCombinado)

console.log("----------Extra-----------")

// // Dado el siguiente objeto:
// const HIGH_TEMPERATURES = {
//   yesterday: 30,
//   today: 35,
//   tomorrow: 32,
// };
// // Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy)
// console.log(maximaManana)

const HIGH_TEMPERATURES = {
      yesterday: 30,
      today: 35,
      tomorrow: 32,
    }

    const {today} = HIGH_TEMPERATURES
    // console.log(today)
    const MaximaHoy = today
    console.log(MaximaHoy)
    const {tomorrow} = HIGH_TEMPERATURES
    // console.log(tomorrow)
    const MaximaManana = tomorrow
    console.log(MaximaManana)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
//  onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');  //['gato', 'pollo', 'cerdo']
//  onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
// https://matiashernandez.dev/blog/post/4-formas-de-eliminar-elementos-duplicados-en-un-arreglo-con-javascript


 const onlyUniques = (...todos) =>{

    const sinRepetir = todos.filter((item,index)=>{
        return todos.indexOf(item) === index
    })
    return sinRepetir 
 }
 const unicos1 = onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
 console.log(unicos1)

//  otra version 
 const onlyUniques2 = (...todos) =>{

    const sinRepetir = new Set(todos)
    const sinRepetir2 = Array.from(sinRepetir);

    return sinRepetir2 
 }
 const unicos2 = onlyUniques2('gato', 'pollo', 'cerdo', 'cerdo');
 console.log(unicos2)


//  Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// https://stackoverflow.com/questions/5080028/what-is-the-most-efficient-way-to-concatenate-n-arrays

//  combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])//   
// sería: [3, 6, 7, 8, 2, 7, 3, 1]

//  combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]); 
// sería: [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
 

const combineAllArrays = (...arrays) => {

   return combinarArray = arrays.flat()
}

const todosArrays = combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1])
console.log(todosArrays)



// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.


const sumAndSquare = (...numeritos) =>{
    // console.log(numeritos)
    // const todos = numeritos.flat()
    // console.log(todos)
    console.log(numeritos)
    const num2 = numeritos.map(numerito=> numerito*numerito)
    console.log(num2)
    // todos.forEach(numeros => Math.pow(numeros,2))
    console.log(todos)

}



const valoresCuadrados = sumAndSquare(1,2,3)
console.log(valoresCuadrados)