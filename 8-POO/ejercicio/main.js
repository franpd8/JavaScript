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
    registrar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} y soy ${this.genero}. Además, estoy en ${this.curso} y voy al grupo ${this.grupo}`)
    }
}

console.log(Estudiante)
let chopper = new Estudiante ("Chopper","8 años", "reno", "2º", "B")

chopper.registrar()
// --------------------------------------------------------------------------
// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona{
    constructor (nombre,edad, genero,asignatura,nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura,
        this.nivel  = nivel
    }
    asignar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} y soy ${this.genero}. Además, enseño ${this.asignatura} ${this.nivel}`)
    }
}

console.log(Profesor)
let Kureha = new Profesor ("Kureha","63 años", "mujer", "Medicina", "Avanzada")

Kureha.asignar()

console.log("----------Kata Aztecas/Mayas-----------")

class Warrior {

    constructor(life,power){
        this.life = life,
        this.power = power
    }

    attack (){
        console.log(this.power)
        return this.power
    }
    defend(damage){
        let hp = this.life - damage
        console.log(hp)

    }
}

let warrior1 = new Warrior (100,40)
console.log(warrior1)
warrior1.attack()

class Maya extends Warrior {
    constructor (life,power){
        super (life,power)
    }
    drinkColaCao(){
        this.power = this.power + 10
        console.log(this.power)
    }
}

let Maya1 = new Maya(100,40)
console.log(Maya1)
Maya1.drinkColaCao()

class Aztec extends Warrior{
    constructor(life,power){
        super(life,power)
    }
    drinkNesquick(){
        this.life = this.life +10
        console.log(this.life)
    }
}