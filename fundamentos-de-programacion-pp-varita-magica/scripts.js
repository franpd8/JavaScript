//———————————————————————————————————————————————
// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

// 1. Acceder al html del documento

let noClick = document.querySelector("HTML");
console.log(noClick);

// 2. Crear funcion que anule click
function anularClick(algo) {
  algo.preventDefault();
}
// 3. Crear evento que al hacer click ejecute función

noClick.addEventListener("click", anularClick);

//———————————————————————————————————————————————
// Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
// https://www.tabnine.com/academy/javascript/how-to-use-setattribute/

// 2.1.1. Acceder a la imagen
let viejaImagen = document.querySelectorAll("img")
console.log(viejaImagen)

// 2.1.2. Modificar la ruta de la imagen
// viejaImagen.setAttribute('src','assets/magic-2.gif') 

function cambiarImagen() {
    viejaImagen[0].setAttribute('src','assets/magic-2.gif') ;
  }
//2.1.3. Crear evento que al hacer click ejecute función

viejaImagen[0].addEventListener("click", cambiarImagen);

// Extra cambiar todas las imágenes

// for (i of viejaImagen){
//     viejaImagen[i].setAttribute('src','assets/magic-2.gif') ;
// }

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
// https://www.w3schools.com/js/js_htmldom_css.asp
// 2.2.1 Acceder a un párrafo

let parrafos = document.querySelectorAll("p")

console.log(parrafos)

// 2.2.2 Modificar el estilo del parrafo

function cambiarEstilo() {
    parrafos[0].style.color="red" 
}
//2.2.3. Crear evento que al hacer click ejecute función

parrafos[0].addEventListener("click", cambiarEstilo);

// 2.3 Bloques de article o section: Cambia el color de fondo.
// https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

// 2.3.1 Acceder a los articulos

let  articulos = document.querySelectorAll('article')
console.log(articulos)

for( let i of articulos){
    i.addEventListener('click',cambiarArticulo)
    function cambiarArticulo (){
        i.style.backgroundColor="red"
        // ojo que la propiedad color de fondo es distinta en el DOM
    }
}    
// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
// 3.1.1 Recuperar la variable

// let viejaImagen = document.querySelectorAll("img")

// 3.1.2 cambiar el evento, porque será mouseover en lugar de click
viejaImagen[0].addEventListener("mouseover", cambiarImagen2);
// 3.1.3 cambiar la funcion para hacer el abracadabra
function cambiarImagen2() {
    viejaImagen[0].setAttribute('src','assets/abracadabra.gif') ;
  }

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

// 3.2.1 recuperar varaible de parrafos.

// let parrafos = document.querySelectorAll("p")

// 3.2.2 cambiar el evento, porque será mouseover en lugar de click
// 3.2.3 Crear un bucle para que me lea todos los parrafos
for(let parrafo of parrafos){
    parrafo.addEventListener('mouseover',cambiarEstilo2)
    function cambiarEstilo2 (){
        parrafo.style.backgroundColor="red"
    }
}

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

// 3.3.1 recuperar variable
// let  articulos = document.querySelectorAll('article')
// 3.3.2 cambiar el evento, porque será mouseover en lugar de click
// 3.3.3 crear un bucle para que lea todos los parrafos
for(let articulo of articulos){
    articulo.addEventListener('mouseover',cambiarArticulo2)
    function cambiarArticulo2 (){
        articulo.style.backgroundColor="orange"
    }
}

//4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

// https://parzibyte.me/blog/2021/11/30/elemento-aleatorio-arreglo-javascript/
// const array = ["Luis", "Chris", "Link", "María", "Maggie", "Grim"];
// const getRandom = array[Math.floor(Math.random() * array.length)];

// function getRandom (){
    
    
// }

const colors = ['red','blue','green']
console.log(colors)

const colors2 = ["#8ECAE6","#219EBC","#023047","#FFB703","#FB8500"]
function getRandom(arr) {
    // console.log(Math.floor(Math.random()*arr.length))
    return arr[Math.floor(Math.random()*arr.length)];
    // la funcion requiere del return para obtener el valor 
}
console.log(getRandom(colors))
console.log(getRandom(colors2))

// Aplicamos los colores aleatorios a los bloques
for(let parrafo of parrafos){
    parrafo.addEventListener('mouseover',cambiarEstilo2)
    function cambiarEstilo2 (){
        parrafo.style.backgroundColor=getRandom(colors2)
    }
}