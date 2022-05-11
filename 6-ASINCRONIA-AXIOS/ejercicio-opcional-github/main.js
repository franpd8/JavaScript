const form = document.getElementById("form")
const example = document.getElementById("example")
const perfil =document.getElementById("perfil")



myFunction = () =>{
    perfil.className = 'card mx-auto visible'

}
example.addEventListener("click", myFunction)