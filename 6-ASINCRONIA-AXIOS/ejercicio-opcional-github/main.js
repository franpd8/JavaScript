
const container = document.getElementById("container")
const form = document.getElementById("form")
const search = document.getElementById("search")
const profile = document.getElementById("profile")
const pic = document.getElementById("pic")
const username = document.getElementById("username")
const link = document.getElementById("link")
const repo = document.getElementById("repo")
const btn = document.getElementById("btn")
const API_URL = " https://api.github.com/users/";




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
const searchUser = (e) => {
    e.preventDefault();
    let user = search.value;
    let userUrl = API_URL+user;
    console.log(userUrl)
    search.value = ""
    axios
      .get(userUrl)
      .then((res) => {
        const {public_repos, login, avatar_url,html_url } = res.data
        console.log(res.data)
        console.log(public_repos, login, avatar_url,html_url)
        
        printPicture(avatar_url)
        printLogin(login)
        printRepo(public_repos)
        printUrl(html_url)
        showUser()
      })
      .catch((err) => printLogin(no_encontrado));
  };








btn.addEventListener("click", searchUser)