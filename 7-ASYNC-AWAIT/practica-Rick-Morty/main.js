const API_URL = "https://rickandmortyapi.com/api/character/";
const personajesDiv = document.querySelector(".personajes");
const formBuscar = document.getElementById("form");

const mostrarPersonajes = (personajes) => {
  personajesDiv.innerHTML = "";
  personajes.forEach((personaje) => {
    personajesDiv.innerHTML += `
                  <div class="card col-lg-3 col-xs-12 col-md-6">
                      <div class="personaje">
                      <div class="card-body">
                      <h3 class="card-header">${personaje.name}</h3>
                      <h5 class="card-title">${personaje.status}</h5>
                      <img style="height: 200px; width: 100%; display: block;" src="${personaje.image}"  alt="Card image">
                      </div>
                      </div>
                      </div>
                       `;
  });
};

const buscarPersonajes = async (e) => {
    e.preventDefault();
    try {
      let busqueda = e.target.buscar.value
      const res = await axios.get(API_URL + "?name=" + busqueda);
      const personajes = res.data.results;
      e.target.buscar.value = "" // No podemos utilizar la variable busqueda porque lo que cambia es la variable
      mostrarPersonajes(personajes);
    } catch (error) {
      console.error(error);
    }
  };

formBuscar.addEventListener("submit",buscarPersonajes);

  
