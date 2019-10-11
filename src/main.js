
// local Storage :guarda cadena de texto a traves de una clave y su respectivo valor
// Set => Guardando
 // Get =>obtener
// variables globales
const emailLogin = document.getElementById("emaiLogin");
const passwordLogin = document.getElementById("passwordLogin");
const loginButton = document.getElementById("loginButton");


const nameUser = document.getElementById("nameUser");
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirPassword = document.getElementById('confirPassword');
const errorPassword = document.getElementById('errorPassword');
const registerButton = document.getElementById('registerButton');


//  contenedor donde se imprime
const logContainer = document.getElementById("logContainer");

// declaro mis variables globales
const registerLink = document.querySelector("#registerLink");
const formRegister = document.querySelector("#formRegister");

(()=>{
    registerLink.addEventListener("click",agregrarFormRegister);
} )();

function agregrarFormRegister(e){
e.preventDefault();
formRegister.innerHTML
}

