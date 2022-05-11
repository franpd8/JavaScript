console.log("----------Ejercicios AXIOS-----------");

const container = document.getElementById("container");
const containerDogs = document.getElementById("containerDogs");
// const API_URL = "https://dog.ceo/dog-api/";
// const perritosDiv = document.querySelector(".perritos");
// const formBuscar = document.getElementById("form");

// Imprimir por consola la lista de razas de todos los perros.
// axios.get("https://dog.ceo/api/breeds/list/all")
// .then((res1) => console.log(res1.data.message))
// .catch((err1) => console.error(err1));

// Imprimir por consola una imagen random de una raza.

// axios.get("https://dog.ceo/api/breeds/image/random")
// .then((res2) => console.log(res2.data.message))
// .catch((err2) => console.error(err2));

// Imprimir por consola todas las imágenes de una raza concreta.
// por ejemplo del akita

// axios.get("https://dog.ceo/api/breed/akita/images")
// .then((resultado) => console.log(resultado.data.message))


// EXTRAS


const API_URL = "https://dog.ceo/api/breed/";
const formBuscar = document.getElementById("form");
const buscar = document.getElementById("buscar");
const random = document.getElementById("random")
const all = document.getElementById("all")

const mostrarPerros = (perros) => {
  // console.log(perros)
  containerDogs.innerHTML = ``
  perros.forEach((perro) => {
    console.log(perro)
    
    containerDogs.innerHTML += `
    <div class="row">
    <div class="col-sm-6">
                        <div class="card-body">
                        <img style="height: 200px;" src="${perro}">
                        </div>
                        </div>
                        </div>
                         `;
                        
  });
};

const mostrarNombres =(perros) =>{
  containerDogs.innerHTML = ``
  perros.forEach((perro) => {
    
    containerDogs.innerHTML += `
    <div class="card-header" onclick="buscarPerrosLista('${perro}')" >
    ${perro}
  </div>
                         `;
                        
  });
}


const buscarPerrosLista= (perro) =>{
  // console.log("he hecho click en ",perro)
let searchUrl = API_URL + perro + "/images";
// console.log("estoy buscando a:", searchUrl)
axios
    .get(searchUrl)
    .then((res) => {
      // console.log(res) peticion api
      // console.log(res.data.message); array de resultados
      const perritos = res.data.message;
      mostrarPerros(perritos);
    })
    .catch((err) => console.error(err));

}
const buscarPerros = (e) => {
  e.preventDefault();
  // console.log("he hecho click en funcion")
  let busqueda = buscar.value;
  //  console.log(busqueda) es el valor del input
  let searchUrl = API_URL + busqueda + "/images";
  buscar.value = ""
  // console.log(searchUrl) es la nueva url customizada
  axios
    .get(searchUrl)
    .then((res) => {
      // console.log(res) peticion api
      // console.log(res.data.message); array de resultados
      const perritos = res.data.message;
      mostrarPerros(perritos);
    })
    .catch((err) => console.error(err));
};


const perroAleatorio = (e) =>{
  e.preventDefault();
  let searchUrl = "https://dog.ceo/api/breeds/image/random"
  axios
  .get(searchUrl)
  .then((res) => {
    // console.log(res) peticion
    // console.log(res.data.message);  un unico resultado, por eso convierto en array de forma manual 
    const perrito = [res.data.message]
    mostrarPerros(perrito);
  })
  .catch((err) => console.error(err));

}


const todosPerros = (e) =>{
  e.preventDefault();
  let searchUrl = "https://dog.ceo/api/breeds/list"
  axios
  .get(searchUrl)
  .then((res) => {
    // console.log(res) 
    // console.log(res.data.message)  
     const perrito = res.data.message
   mostrarNombres(perrito)
  })
  .catch((err) => console.error(err));

}



formBuscar.addEventListener("submit", buscarPerros);
random.addEventListener("click", perroAleatorio)
all.addEventListener("click", todosPerros)

