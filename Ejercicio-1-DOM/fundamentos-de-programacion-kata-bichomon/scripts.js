console.log(document.title);


let noClick = document.querySelector("HTML");
function anularClick(algo) {
  algo.preventDefault();
}
noClick.addEventListener("click", anularClick);

// let pkm = document.querySelectorAll('.infocard')
// console.log(pkm)


// .nextElementSibling buscar más tarde:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling



// 1.Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let title1 = document.getElementById('gen-1')
console.log(title1)
function changeTitle(){
   title1.innerText="Generasión 1 Pokimon"
//    title1.innerHTML="<h2>Generasión 1</h2><h3>Pokimon</h3"
}
title1.addEventListener('click',changeTitle)

// // 2. Cambia el color de fondo de la primera generacion de pokimon.

// // https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/

// //  // Este codigo permite cambiar el color de CADA pokemon, de la generacion 1, no de la generación en si.
let pokimons = document.querySelectorAll('.infocard')
console.log(pokimons)
// Transformar el NodeList en un Array
let pokimonsArr = Array.from(pokimons)
console.log(pokimonsArr)
// Escoger los 151 pokemon de la Gen1
let gen1 = pokimonsArr.slice(0,151)
console.log(gen1)
// // Esto nos permite cambiar el color al hacer click en cada uno de los pokemon de la generacion 1.
for( let i of gen1){
    i.addEventListener('click',cambiarFondo)
    function cambiarFondo (){
        i.style.backgroundColor = 'cyan';
    }
} 
// ADEMÁS. Esto nos permite cambiar el color de fondo al hacer click en titulo de la generacion 1
function cambiarFondo2(){
for( let i of gen1){
    i.style.backgroundColor = "beige"
}   
}
title1.addEventListener('click',cambiarFondo2)

// // Este codigo ejecuta el cambio de color de la generacion uno atacando al primer infocard-list.

// let generacion1 = document.querySelector(".infocard-list")
// console.log(generacion1)

// let titleGen1 = document.getElementById('gen-1')
// console.log(titleGen1)

// titleGen1.addEventListener("click",colorGen1)
// function colorGen1(){
// generacion1.style.backgroundColor = "aqua"
// }

// //  Vamos a probar a colorear la segunda generacion

// let generaciones = document.querySelectorAll(".infocard-list")
// console.log(generaciones)
// console.log(generaciones[1])
// let titleGen2 = document.getElementById('gen-2')
// console.log(titleGen2)

// titleGen2.addEventListener("click",colorGen2)
//  function colorGen2(){
//  generaciones[1].style.backgroundColor="aqua"
// }


//  3.Imprime por consola la URL de la página.

let urlPag = document.URL
console.log(urlPag)
alert(`La URL es: ${urlPag}`)

//  4.Imprime por consola el dominio de la página.

// If you wish a full domain origin, you can use this:
// document.location.origin

// And if you wish to get only the domain, use can you just this:
// document.location.hostname

// But you have other options, take a look at the properties in:
// document.location
let domain = document.location.hostname
console.log(domain)
alert(`El dominio es: ${domain}`)

// 5. Imprime todos los nodos de imagen.
let imagenes = document.querySelectorAll("img")
console.log(imagenes)
// // nos devuelve el nodo con todas las imagenes
// imagenes.forEach(function(node) {
//   console.log(node);
// })
// // nos devuelve cada imagen dentro del nodo, usando el forEach() entendiendo que usamos el node pero "node" podría ser cualquier nombre


// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let imagenesPkm = document.querySelectorAll("img")
console.log(imagenesPkm)

for (let i =0; i <imagenesPkm.length;i++){
  imagenesPkm[i].setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

// // Esto sí funciona, utilizando un for/of con src (el codigo de Rebeca)

// for (i of imagenesPkm){
//   i.src= "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
// }

//  // Esto también funciona, usando un bucle y setAttribute (el codigo de David)

// let allImages = document.querySelectorAll("img");
// console.log(allImages);
// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].setAttribute(
//     "src",
//     "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
//   );
// }
 

// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let voladores = document.querySelectorAll(".itype.flying")
console.log(voladores)

for (let volador of voladores){
  volador.parentNode.parentNode.parentNode.style.backgroundColor = "red"
  
}

