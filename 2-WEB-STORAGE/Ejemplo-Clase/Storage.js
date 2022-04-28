const boton = document.querySelector('button')
const contenedor = document.getElementById('contenedor')
const anime = document.querySelector('#contenedor_anime')

function pintarEnPantalla () {
    let firstName = localStorage.getItem('name');
    let lastName  = localStorage.surname; // Si lo coges así y no hay nada en el resultado es "undefined" no "null"
    console.log(`Hola, mi nombre es ${firstName} ${lastName}`)
    contenedor.innerHTML = `
                        <h2>${firstName}</h2>
                        <h2>${lastName}</h2>
                        `
}

boton.addEventListener('click', function () {
    localStorage.setItem('name', 'Sofia') 
    localStorage.surname = 'La Profe' 

    sessionStorage.setItem('name', 'Ger') 
    sessionStorage.surname = 'Fernández' 
    pintarEnPantalla()
})

// localStorage.removeItem('name')

// localStorage.clear()

for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }

// Objetos
localStorage.setItem('user', JSON.stringify({
    username: 'Ivan',
    password: 'contraseñajaja'
}));

const user = JSON.parse(localStorage.getItem('user'));

console.log("Mi objeto", user)

// Arrays
let personajesAnime = [];

const pintarPersonajes = () => {
    let data = JSON.parse(localStorage.getItem("anime"));
    for (let i = 0; i < data.length; i++) {
        anime.innerHTML += `<p>${data[i]}</p>`
    }
}

function añadirPersonaje () {

    const valorInput = document.querySelector('#añadirPersonaje').value
    personajesAnime.push(valorInput)
    localStorage.setItem("anime", JSON.stringify(personajesAnime));
    anime.innerHTML = ''
    pintarPersonajes();

}

pintarPersonajes();