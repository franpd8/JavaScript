// const name = document.querySelector('#name')
// const surname = document.querySelector('#surname')
// const email = document.querySelector('#email')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click',function (e) {
//     e.preventDefault()
//     console.log(`Mi nombre es ${name.value} ${surname.value} y mi correo es ${email.value}`)
// })

const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
let msg = document.querySelector(".msg");
let validationEmail = /(\w+?@\w+?\x2E.+)/

function onSubmit(e) {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    msg.innerHTML = "Please enter all fields";
  } else if (validationEmail.test(email.value) !== true) {
    msg.innerHTML = "Please enter a correct email";
  } else {
    msg.innerHTML = "Success";
  }

  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

myForm.addEventListener("submit", onSubmit);

let re;

re = /hello/;

re = /hello/i; // que contenga hello

re = /^h/i;

re = /World$/i;

re = /^hello$/i; // que tenga solo hello

re = /^h.llo$/i;

const result = re.test("h7llo");
console.log(result);
