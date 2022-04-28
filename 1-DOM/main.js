// console.log(document.getElementById('my-form'))

const ul = document.querySelector(".items")
console.log(ul)


ul.firstElementChild.innerText ="HELLO"
// innerText permite modificar solo el texto que haya, pero no entiende de etiquetas html
ul.children[1].innerText ="The BRIDGE"
ul.lastElementChild.innerHTML ='<h1>hello</h1>'
// utilizar innerHTML nos permite modificar el html del texto porque sí leerá la etiqueta
ul.lastElementChild.remove()


const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Esta funcion nos permite cambiar el color de fondo del formulario y el ultimo elemento de la lista
function onSubmit (e){
    e.preventDefault();
    document.getElementById('my-form').style.background = '#ccc';
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
}

btn.addEventListener('click', onSubmit);

// También podría ser con:

const form = document.querySelector('form')
form.addEventListener('submit',onSubmit);



let listaSinOrden = document.createElement("ul");

document.body.appendChild(listaSinOrden);
// Metemos la lista sin orden en el body

let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "It's funny";
// .textContent nos permite agregar texto
listaSinOrden.appendChild(elemento1Lista)
// metemos el elemento 1 en la lista sin orden 

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "It's Awesome";
listaSinOrden.appendChild(elemento2Lista)


