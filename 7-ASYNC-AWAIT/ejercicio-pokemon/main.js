
const container = document.getElementById("container")
const form = document.getElementById("form")
const search = document.getElementById("search")
const profile = document.getElementById("profile")
const pic = document.getElementById("pic")
const number = document.getElementById("number")
const link = document.getElementById("link")
const btn = document.getElementById("btn")
const type = document.getElementById("type")
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const imagen404 = "./assets/404.png"



showPkm = () =>{
    profile.className = 'card mx-auto visible'
}
printPicture = (pictureLink) =>{
pic.src = pictureLink
}
printNumber = (pkmID,pkmName) =>{
const capitalizedName = pkmName.charAt(0).toUpperCase()+ pkmName.slice(1)

number.innerHTML = `
<h6>#${pkmID}</h6 <br>
${capitalizedName}
` 
}
printType = (pkmTypesData)=>{
  // console.log(pkmTypesData)
  type.innerHTML = ``
  pkmTypesData.forEach(pkmType =>{
    console.log(pkmType.type.name)
    // develop a switch for next version
    if(pkmType.type.name == 'fire' ){
      type.innerHTML += `
      <div class="btn btn-danger"> 
      ${pkmType.type.name} 
      </div>`
    }else{
      type.innerHTML += `
      <div class="btn btn-success"> 
      ${pkmType.type.name} 
      </div>`
    }
  })


}


printError = () =>{
    printPicture(imagen404)
    printNumber("Pokemon not Found")
    // printRepo("Sorry")
    // printUrl()

}

const searchPkm = async(e) => {
    e.preventDefault();
    let pkmName = search.value;
    let pkmUrl = API_URL+pkmName;
    console.log(pkmUrl)
    search.value = ""

    try{
      const res = await axios.get(pkmUrl)
      const pokemon = res.data
        const {id, sprites, types,name} = pokemon
        

        // console.log(id)
        // console.log(pokemon)
        // console.log(sprites.front_default)
        
        printPicture(sprites.front_default)
        printNumber(id,name)
        printType(types)
        // printUrl(html_url)
        showPkm()
    }
    catch(error){
        // printError()
      } 
  
  };








form.addEventListener("submit", searchPkm)
btn.addEventListener("click", searchPkm)