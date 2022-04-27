// alert("ey")
// 1.creamos el boton para llamar la funcion
const submitButton = document.querySelector("#submit");
console.log(submitButton);
// 2.creamos el evento del boton que llama la funcion
submitButton.addEventListener("click", getUser);

// 3.creamos el array donde guardaremos la info
let users =[]
// 4.funcion que recopile datos del formulario.
function getUser(item) {
    item.preventDefault()
  // 5.recoger datos de los inputs del formulario
  let getName = document.querySelector("#name").value;
  let getEmail = document.querySelector("#email").value;
  let getMessage = document.querySelector("#message").value;
  console.log(getName, getEmail, getMessage);

  // 6.creamos el objeto donde se guardará la info del formulario
  let userData = {
    name: getName,
    email: getEmail,
    message: getMessage,
  };
  console.log(userData)

  // 7.pushea en el array los valores del objeto
  users.push(userData);
//   8.almacena en local el array como cadena JSON
  localStorage.setItem("stringUsers", JSON.stringify(users));
//   9.Muestra por consola la informacion del DOM
  let infoUser = JSON.parse(localStorage.getItem("stringUsers",users))
console.log(infoUser)
}

// let infoUser = JSON.parse(localStorage.getItem("stringUsers",users))
// console.log(infoUser)

// let tripulacion = JSON.parse(localStorage.getItem("piratas"))
