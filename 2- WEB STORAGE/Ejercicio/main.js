// alert("ey")
const submitButton = document.querySelector("#submit")
console.log(submitButton)
submitButton.addEventListener("click",localUser())


// 1. Obtener datos de los campos del formulario: nombre, correo y mensaje.

let getName = document.querySelector("#name").value
let getEmail = document.querySelector("#email").value
let getMessage = document.querySelector("#message").value
console.log(getName,getEmail,getMessage)

// funcion que recoge datos del formulario?
// function addUser(){
// let getName = document.querySelector("#name").value
// let getEmail = document.querySelector("#email").value
// let getMessage = document.querySelector("#message").value
// console.log(getName,getEmail,getMessage)
// localUser()
// }

submitButton.addEventListener("click",localUser())

// funcion que guarda los datos del formulario en localStorage
function localUser(){
    localStorage.setItem("nombre",JSON.stringify(getName))
    localStorage.setItem("email",JSON.stringify(getEmail))
    localStorage.setItem("mensaje",JSON.stringify(getMessage))
}


// usuario.push(getName)


// console.log(usuario)

