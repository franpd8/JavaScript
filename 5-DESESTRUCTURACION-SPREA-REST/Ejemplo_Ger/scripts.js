// Desestructuración en Arrays
console.log("----------Desestructuracion en Arrays-----------")

const personas = ['Juan', 'Laura', 'Patricia', 'María', 'Paula']

// Como se accedia a cada una de las posiciones de la array
console.log(personas[2])
console.log(personas[5]) 
// la posicion 5 no existe por eso es undefined

// Desestructurando siguiendo un orden en el caso de las arrays, si pones de más evidentemente es "undefined"
const [p1,p2,p3,p4,p5,p6] = personas
console.log(p6)
// no existe valor en el array original correspondiente a posicion 6 >> undefined
console.log("Personas", personas)

// Solo quiero acceder a "Patricia"
const[ , , nombre_persona] = personas
console.log(nombre_persona)

// Vamos a probar con una función 1
const dameUnArray = () => ['ABC', 123]

const miArray = dameUnArray()
console.log(miArray)

const [letras, numeros] = dameUnArray()
console.log(numeros)
console.log(letras)

// Vamos a probar con una función 2
const useState = (name) => [name, () => console.log("Hola que tal")]
const [nombreState, funcionState] = useState('Goku')
console.log(nombreState)
funcionState()

// Vamos a probar con una función 3
const saludos = [ "hola", "dias" ]
function imprime ([ saludo1, saludo2 ]) {
	console.log(`${saludo1}, buenos ${saludo2}`)
}
imprime(saludos);
// saludos es el array con "hola" y "dias"
// entonces dentro de la funcion lo hemos desestructurado en dos partes 

// ------------------------
// Desestructuración en Objetos
console.log("----------Desestructuracion en objetos-----------")

const Usuario = {
    nombre: 'Javier',
    email: 'javi@gmail.com',
    edad: 23,
    registrado: true,
    seguidores: ['Ger', 'Gabriel', 'Jorge', 'Rebeca']
}

// Como se accedia a cada una de las propiedades del objeto
console.log(Usuario.email)
console.log(Usuario["registrado"])
console.log(Usuario.seguidores[3])

// Desestructurando objetos no hace falta seguir un orden, pero si tienes que llamar a propiedades que existan
// También les puedes dar nuevos nombres a las propiedades (renombrar)
const { nombre, seguidores, registrado, email:correo, edad = 38 } = Usuario
console.log(seguidores)
console.log(correo)
console.log(edad)

// Desestructuración de objetos en parámetros de entrada de funciones y además con valores nuevos o por defecto
const dameUnUsuario = ({nombre, edad = 38}) => {
    console.log(nombre, edad)
}
dameUnUsuario (Usuario)

// Ejercicio donde se junta desestructuración de objetos y arrays - Array de de objetos y acceder a una positión de un array

const Pokemon = {
    "count": 1126,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        }
    ]
}

// acceder al count del pokemon
const {count} = Pokemon
// acceder a Ivysaur unicamente, lo hacemos en 3 pasos
// // 1. acceder a results(objeto)
// //const { results: resultados } = Pokemon
// // 2. acceder a Ivysaur (array)
// //const [ , poke2, ] = resultados
// //3. acceder a nombre( name en inglés) de Ivysaur (objeto)
// //const { name } = poke2

const { results: resultados } = Pokemon
const [ , poke2, ] = resultados
const { name } = poke2
console.log(name)

// obtener todas las url de los pokemon
// //usamos un bucle (forEach)
// //y desestructuramos el objeto del pokemon para acceder a su nombre y url


resultados.forEach(pokemon => {
    const { name, url } = pokemon
    console.log(`Mi nombre es ${name} y mi url es ${url}`)
})

// Operador Spread
console.log("----------Operador Spread-----------")

const array1 = ['patata', 'tomate', 'lechuga'];
const array2 = [1, true, 'chocolate']
const objeto1 = {
    a: 10,
    b: 'caracola'
}
const objeto2 = {
    c: 2,
    d: 'cocacola'
}

// Concatenar 2 arrays
const concatenarArray = [...array1, ...array2]
console.log(concatenarArray)
// añadir nuevos elementos dentro del array
const pushArray = ['pimiento',...array1]
console.log(pushArray)

// Mergear 2 objetos
const mergearObjeto = {...objeto1, ...objeto2, y:true}
console.log(mergearObjeto)

// Funciones que esperan muchos parámetros de entrada

const arraySpread = [1,2,5,3]

const spread = (a,b,c,d) => {
    return (a + b) * (c - d)
}

console.log(spread(...arraySpread)) 
// usando el array unicamente no entraría en los valores

// Clonar objetos
const Ciudad = {
    nombre: 'Valencia',
    provincia: 'Valencia'
}

// 
const copyCiudad = {...Ciudad}
// nos clonamos la ciudad, dejando intacta la original.

// de haber hecho copyCiudad = ciudad; al modificar uno, se modificarian ambos

copyCiudad.nombre = 'Alicante'
// renombramos la ciudad en el objeto clonado
console.log(copyCiudad)
console.log(Ciudad)

// Operador Rest
console.log("----------Operador Rest-----------")

const Usuario2 = {
    nombre: 'Laura',
    email: 'laura@gmail.com',
    password: 'mimamamemima',
    edad: 31,
    registrado: false,
    seguidores: ['Ger', 'Gabriel', 'Angela']
}

const {password, ...losdemas} = Usuario2
// usando rest desestructuramos en dos partes el objeto (una cosa),rest(losdemas)
console.log(password)
console.log(losdemas)

const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a)
console.log(b)
console.log(rest)

// Parámetros de entrada en una función

// me permiten meter cualquier cantidad de parametros
const listarArticulos = (...articulos) => {
    console.log(articulos);
}

listarArticulos('Hola', 2, true, {a:3, c:17}, [1,2,3,4])
listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
listarArticulos(2)

// Coger el resto de parámetros
function mostrar(x, y, ...z) {
    console.log(x, ' ', y);
    // 1ª de mostrar, espacio, 2ª de mostrar
    console.log(z);
    // todo lo demás (ni 1ª ni 2ª)
    console.log(z[0]); 
    // primer elemento de todo lo demás
    console.log(z.length); 
    // numero de elementos de todo lo demás
  }
  
mostrar("hey", "hello", "wassup", "goodmorning", "hi", "howdy")