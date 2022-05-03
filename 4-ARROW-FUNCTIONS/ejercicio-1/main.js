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

console.log(`2. forEach`)
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    

// Crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayores25 = []
gente.forEach(persona => {
  if(persona.edad > 25){
    mayores25.push(persona)
  }
  })
console.log(mayores25)

// mismo ejemplo usando .filter()
const mayores25Filter = gente.filter(persona => persona.edad > 25)

console.log(mayores25Filter)

// Crea un array con la gente que empieza por J. 

gente.forEach(persona=>{
  if(persona.nombre.startsWith('J')){
    console.log(persona)
  }
})
// la diferencia es que aqui muestro por consola directamente y no lo guardo en ningun array como hice en el ejemplo de arriba

console.log(`3. Map`)

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbersElevados = numbers.map(numero => numero**numero)

console.log(numbersElevados)

// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/

const gourmet = foodList.map(plato =>{
  if(plato == "Pizza"){
    return  `Como soy de Italia, amo comer ${plato}`
  } else if (plato == "Ramen"){
    return  `Como soy de Japón, amo comer ${plato}`
  } else if(plato == "Paella") {
    return  `Como soy de Valencia, amo comer ${plato}`
  }else {
    return `Aunque no como carne, el ${plato} es sabroso`
  }
})
console.log(gourmet)


console.log(`4. Filter`)

// Crea un segundo array que devuelva los impares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros)

const numerosImpares = numeros.filter( numerito => (numerito % 2 !== 0))
console.log(numerosImpares)


// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:


const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }
];
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/

const veggie = foodList2.filter(comida =>(comida.isVeggie == true)).map(comidaVegana => {
  if(comidaVegana.name == 'Tofu burguer'){
    return `Que rica Tofu burguer me voy a comer!`
  } else {
    return  `Que rico Tempeh me voy a comer!`}
})
console.log(veggie)

// version usando indices en lugar de nombres => Revisar Mike & Rebeca & Vicent

// const veggie2 = foodList2.filter(comida =>(comida.isVeggie == true)).map(comida,indice => {
//   if(indice == 1){
//     return `Que rica Tofu burguer me voy a comer!`
//   } else {
//     return  `Que rico Tempeh me voy a comer!`}
// })
// console.log(veggie2)

console.log("5. Reduce")

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros2 = [39, 2, 4, 25, 62];
// Salida--> 483600
const numerosMultiplicados= numeros2.reduce((a,b) =>(a * b))
console.log(numerosMultiplicados)


 console.log("Extras: Map")

// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
 
// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */

    const guessWho = staff.map(persona => {

      if(persona.name == "Pepe"){
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]}  y ${persona.hobbies[1]}`}
      else if (persona.name == "Carlos"){
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]}  y ${persona.hobbies[1]}`}
      else if (persona.name == "Ana"){
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]}  y ${persona.hobbies[1]}`} 
      else (persona.name == "Luis")
       return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]}  y ${persona.hobbies[1]}`
     

    })

    console.log(guessWho)

    // update en una linea, version más limpia.
    const guessWho2 = staff.map(persona => {
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]}  y ${persona.hobbies[1]}`
    })

    console.log(guessWho2)

    console.log("Extras: Filter")
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */

const precio300 = inventory.filter(articulo => articulo.price > 300).map(nombreArticulo => nombreArticulo.name)
console.log(precio300)

// filter me da el array con los objetos cuyo precio es superior a 300euros pero map es quien me crea un array nuevo con los nombres solamente.



console.log("Extra:Reduce")

// Concatena todos los elementos del array con reduce para que devuelva una sola frase


const sentenceElements = [
  'Me',
  'llamo',
  'Fran',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
  ];
 
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const fuerzaJavascript = sentenceElements.reduce((a,b) =>(a +' '+ b))
console.log(fuerzaJavascript)