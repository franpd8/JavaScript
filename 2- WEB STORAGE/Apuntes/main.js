// alert("ey")

// localStorage.setItem('name','Sofia')
// localStorage.surname = "La Profe"


// // EJEMPLO.
// let personajesAnime = ['Levi', 'Mikasa', 'Zoro', 'Luffy', 'Tanjiro', 'Nezuko'];

// localStorage.setItem("anime", JSON.stringify(personajesAnime));

// let data = JSON.parse(localStorage.getItem("anime"));

// console.log("Mi array", data);


// 1.Crear el array
let onepiece = ["zoro","luffy","chopper"]
console.log(onepiece)

// 2. Almacenar el array en localStorage como cadena con JSON.stringify donde "KeyName" es piratas y "KeyValue" es onepiece
localStorage.setItem("piratas", JSON.stringify(onepiece));

// 3. Imprimir la cadena desde localStorage con JSON.parse
let tripulacion = JSON.parse(localStorage.getItem("piratas"))
console.log("La tripulación es:", tripulacion)


// -- Segundo array ejemplo
 
let kimetsu = ["tanjiro","nezuko"]
console.log(kimetsu)
localStorage.setItem("guardianes",JSON.stringify(kimetsu))
let hermanos = JSON.parse(localStorage.getItem("guardianes"))
console.log("Los hermanos son:", hermanos)


// Imprimir todo lo que hay almacenado en localStorage, esto será un bucle que nos irá leyendo las key de cada elemento y las imprimirá por pantalla.


for(let i=0; i<localStorage.length; i++) {
    // para acceder a cada una de las key
    let key = localStorage.key(i);
    // imprimimos la key con su valor sacado por getItem
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
