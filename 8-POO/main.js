// alert("hola")
console.log("----------Ejercicios Programacion Orientada Objetos-----------")

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor (nombre,edad, genero){
        this.nombre = nombre,
        this.edad  = edad,
        this.genero = genero  
    }
    obtDetalles (){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} y soy ${this.genero}`)
    }
}
console.log(Persona)

// ejemplo
let nami = new Persona ("Nami","19 años","mujer")
nami.obtDetalles()
// --------------------------------------------------------------------------

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.


class Estudiante extends Persona {
    constructor (nombre,edad, genero,curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso,
        this.grupo  = grupo
    }

}

