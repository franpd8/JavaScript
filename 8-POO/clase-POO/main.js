// // // const coche1 ={
// // //     modelo:'kuga',
// // //     marca:'Ford',
// // //     color:'gris',
// // // }

// // // const coche2 ={
// // //     modelo:'a3',
// // //     marca:'Audi',
// // //     color:'blanco',
// // // }

// // // const coche3 ={
// // //     modelo:'model3',
// // //     marca:'Tesla',
// // //     color:'negro',
// // // }

// // // console.log(coche1)
// // // console.log(coche2)
// // // console.log(coche3)

// // // let yo = {
// // //   nombre: "yeison",
// // //   edad: 22,
// // //   hablar: function () {
// // //     console.log(this.nombre);
// // //   },
// // // };

// // // yo.hablar();
// // function decirNombre(obj) {
// //     obj.hablar = function () {
// //       console.log(this.nombre);
// //     };
// //   };

// //   const Mateo = {
// //     nombre: "Mateo",
// //     edad: 22,
// //   };

// //   const juan = {
// //     nombre: "Juan",
// //     edad: 25,
// //   };

// //   const yeison = {
// //     nombre: "Yeison",
// //     edad: 2,
// //   };

// //   decirNombre(yeison);

// //   yeison.hablar()
// // //   juan.hablar();
// // //   Mateo.hablar()

// let Coche = function (marca, modelo, antiguedad, color, tipo) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.antiguedad = antiguedad
//     this.color = color;
//     this.tipo = tipo;
//     this.detalles = function(){
//   return "Tu coche es un "+this.marca+" "+this.modelo+" del "+this.antiguedad+" , clase "+this.tipo+" y color "+this.color;
//       }
// };

// let miCoche3 = new Coche ("Peugeot", "607", 2002, "rojo", "turismo");
// console.log(miCoche3.detalles());

// const miCoche = new Coche("Mercedes", "Volador", "2009", "Rojo", "Automatico");
// const miCoche2 = new Coche("Tesla", "Electrico", "2022", "Negro", "Automatico");

// console.log(miCoche);
// console.log(miCoche2);

// const coche1 = {
//   modelo: "kuga",
//   marca: "Ford",
//   color: "gris",
//   arrancar: function () {
//     return this.marca + " es de color " + this.color;
//   },
// };

// const coche2 = {
//   modelo: "a3",
//   marca: "Audi",
//   color: "blanco",
//   arrancar: function () {
//     return this.marca + " es de color " + this.color;
//   },
// };

class Gato {
  constructor(raza, nombre, color, tamaño, accion) {
    this.raza = raza;
    this.nombre = nombre;
    this.color = color;
    this.tamaño = tamaño;
    this.accion = accion;
  }
  acciones() {
    return `${this.accion} fue poco efectivo`;
  }
}

const pascual = new Gato("pokemon", "Pascual", "azul", "gordo", "arañazo");
console.log(pascual);
// console.log(pascual.acciones());

//otra forma de crear el constructor
function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
}

function Revista(titulo, autor, año, mes) {
  Libro.call(this, titulo, autor, año);
  this.mes = mes;
}

const mag1 = new Revista("Mag One", "John Doe", "2018", "Enero");
console.log(mag1);

// class Coche {
//   constructor(marca, modelo, antiguedad, color, tipo) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.antiguedad = antiguedad;
//     this.color = color;
//     this.tipo = tipo;
//   }
//   detalles() {
//     console.log(
//       `Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`
//     );
//   }
// }

//   let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
//   console.log(miCoche.detalles());

//   class Furgon extends Coche {
//     constructor (marca, modelo, antiguedad, color, tipo,taraMinima, cargaUtil, volumenCarga) {
//       super(marca, modelo, antiguedad, color, tipo)
//       this.taraMinima = taraMinima;
//       this.cargaUtil = cargaUtil;
//       this.volumenCarga = volumenCarga;
//       }
//   };

//   let miFurgon = new Furgon("Peugeot", "607", 2002, "rojo", "turismo",1200, 768, 4.5);

class Coche {
  static info(edad) {
    console.info(
      `Tienes ${edad} años ${
        edad >= 18
          ? "y puedes conducir"
          : "y ... ¡Sorry! Sigue esperando para conducir."
      }`
    );
  }
  // constructor(marca, modelo, antiguedad, color, tipo) {
  //   this.marca = marca;
  //   this.modelo = modelo;
  //   this.antiguedad = antiguedad;
  //   this.color = color;
  //   this.tipo = tipo;
  // }
  // detalles() {
  //   console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  // }
}
Coche.info(50);
Coche.info(8);
//   let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
