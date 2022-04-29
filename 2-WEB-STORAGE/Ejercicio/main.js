// alert("ey")
// 1.creamos el boton para llamar la funcion
const submitButton = document.querySelector("#submit");
console.log(submitButton);
const clearButton = document.querySelector("#reset");
console.log(clearButton);
const userList = document.querySelector(".new-users")
console.log(userList)

// 2.creamos el evento del boton que llama la funcion
submitButton.addEventListener("click", getUser);
clearButton.addEventListener("click",deteleAllUsers);

// 3.creamos el array donde guardaremos la info
let users =[]
console.log(users,"arr usuarios inicial")
// 4.funcion que recopile datos del formulario.
function getUser(item) {
    item.preventDefault()
  // 5.recoger datos de los inputs del formulario
  let getName = document.querySelector("#name")
  let getEmail = document.querySelector("#email")
  let getMessage = document.querySelector("#message")
  console.log(getName, getEmail, getMessage);

  // 6.creamos el objeto donde se guardará la info del formulario
  let userData = {
    name: getName.value,
    email: getEmail.value,
    message: getMessage.value,
  };

  console.log(userData," obj nuevo usuario")
  console.log(users,users.length +1 ,"arr total usuarios")

  // 7.pushea en el array los valores del objeto
  users.push(userData);
  //   8.almacena en local el array como cadena JSON
localStorage.setItem("stringUsers", JSON.stringify(users));
userList.innerHTML = ``;
  printUsers()
 
}

function printUsers(){
  //   9.Muestra por consola la informacion del DOM
  let infoUser = JSON.parse(localStorage.getItem("stringUsers",users));
console.log(infoUser)

for(let i = 0; i < infoUser.length; i++){

  userList.innerHTML+= `
                        <p>${infoUser[i].name}</p> <p>${infoUser[i].email}  </p>
                        <button onclick = "borrame('${infoUser[i].name}')">Borrar usuario</button>
                        `
                        // creamos en html el boton para borrar. Este boton incluye el evento onclick que llama a la funcion directamente. En esta funcion entra el valor(del nombre en este caso) asi que cuando la llame también hará falta que algo entre tambien
              
}
  
}
function deteleAllUsers(){

  // https://es.stackoverflow.com/questions/103670/c%C3%B3mo-vaciar-un-array-en-javascript

  // limpiar localStorage
localStorage.clear()
// limpiar el array
while(users.length > 0)
 users.pop(); 

 console.log(users,"todos borrados")
// limpiar la pantalla 
 userList.innerHTML = ``;
}

function borrame (nombre) {
  // a esta funcion le entra de antes un valor, asi que ahora debe entrarle algo tambien. El nombre de ese algo da igual,pero podré usarlo dentro de la funcion como quiera.
  console.log(nombre)
}


// Ahora al imprimir por pantalla me identifica qué usuario es con la funcion borrame,lo que necesito ahora es hacer un bucle que me recorra el Array y pare donde coincida ese valor con el usuario

//  Ahora ese objeto del array deberá ser eliminado del array original, porque hemos borrado el usuario. El nuevo array sin el usuario eliminado deberá guardarse en localStorage de nuevo, ya que pintamos en pantalla por esa vía. Después habrá que volver a imprimir por pantalla el nuevo array (sin el elemento borrado).