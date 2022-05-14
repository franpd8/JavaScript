
const container = document.getElementById("container")
const form = document.getElementById("form")
const search = document.getElementById("search")
const profile = document.getElementById("profile")
const pic = document.getElementById("pic")
const username = document.getElementById("username")
const link = document.getElementById("link")
const repo = document.getElementById("repo")
const btn = document.getElementById("btn")
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const imagen404 = "./assets/404.png"



showUser = () =>{
    profile.className = 'card mx-auto visible'

}
printPicture = (pictureLink) =>{
pic.src = pictureLink
}
printLogin = (gitHubId) =>{
username.innerText = gitHubId
}
printRepo = (repos)=>{
repo.innerText = `${repos} repositories`
}
printUrl = (url) =>{
link.href= url 
}

printError = () =>{
    printPicture(imagen404)
    printLogin("User not Found")
    printRepo("Sorry")
    printUrl()

}
const searchUser = (e) => {
    e.preventDefault();
    let user = search.value;
    let userUrl = API_URL+user;
    console.log(userUrl)
    search.value = ""
    axios
      .get(userUrl)
      .then((res) => {
        const {id, sprites, types} = res.data
        console.log(types)
        // console.log(public_repos, login, avatar_url,html_url)
        
        printPicture(avatar_url)
        printLogin(login)
        printRepo(public_repos)
        printUrl(html_url)
        showUser()
      })

      .catch((err) => {
        console.error(err)
        printError()
      } 
      );
  };








btn.addEventListener("click", searchUser)