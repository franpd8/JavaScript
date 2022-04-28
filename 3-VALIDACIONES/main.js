// // alert("ey")

// const name = document.querySelector('#name')
// const surname = document.querySelector('#surname')
// const email = document.querySelector('#email')
// const btn = document.querySelector('#btn')

// // Creamos las variables pero no las guardamos todavia(cuando se carga la pagina),sino cuando hagamos click en el boton



// btn.addEventListener('click',function(e){
//     e.preventDefault()
//     console.log(`Mi nombre es ${name.value} ${surname.value} y mi email es: ${email.value}`)

// })

//  EJEMPLO VALIDACIONES.
// Nos traemos los elementos del DOM

// Ahora nos traemos los siguientes elementos del DOM (formulario,el nombre y el correo):
const myForm = document.querySelector("#my-form");

const name = document.querySelector("#name");

const email = document.querySelector("#email");

// Función onSubmit()

// Validando que se rellenen los campos
// Ahora que ya sabemos que recogemos los datos de los inputs, vamos a validar que se rellenen esos campos
function onSubmit(e) {

    e.preventDefault();
    // si alguno de los dos está vacío
    if (name.value === "" || email.value === "") {
    
    console.log("Please enter all fields");
    
    } else {
    
    console.log("success");
    
    }
    
    }
// myForm addEventListener()

// Ahora le decimos al formulario que cuando escuche el evento “submit” ejecute la función “onSubmit”: "submit" incluye hacer click y dar intro. 

myForm.addEventListener("submit", onSubmit);