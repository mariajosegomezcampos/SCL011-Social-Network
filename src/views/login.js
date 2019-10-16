// aqui se crean mis div dinamico
import{validarCredenciales}from './controller-function/funcion-login.js';
import{obtenerListaUsuario}from './controller-function/funcion-login.js';
 // se crea la primera vista a imprimir 
 export const viewIni=()=>{
    // defino mi container 
const container = document.getElementById("root");
container.innerHTML=
`   <img src="" class="logo-Scity" alt="logo-santiagocity"> 
 <h4 class="sloganLogin">¡Tips para disfrutar mejor!</h4>
<p class="validInputs" id="validInputs2"> </p>
<form class="">
  <div class="">
    <input id="emailLogin" type="email" class="validate">
    <label for="emaiLogin">Email</label>
  </div>
  <div class="">
    <input id="passwordLogin" type="password" class="validate">
    <label for="passwordLogin">Contraseña</label>
    <div><a href="#" class="updatePassword"><p id="updatePassword">¿Olvidó su contraseña?</p></a></div>
  </div>
  <div>
    <input type="button" id="btnIngresar" class="" value="Iniciar sesion">
  </div>  
</form>
<div>
<div><p class="goRegister">¿Todavía no eres miembro?</p><a href="#" id="registerLink" class="linkToRegister"> Únete ahora</a></div>
</div>`
// querySelector me devuelve el elemento con el selector buscado , si es un id me devuelve el elemento que tenga dicho id
// logica interfaz sesion inicio 
document.querySelector("btnIngresar").addEventListener("click",);
console.log("funciona boton ingresar");

export function iniciarSesion(){

const sCorreo ='';
const sContraseña ='';
const bAcceso = false;
sCorreo = document.querySelector( '#emailLogin').Value;
sContraseña = document.querySelector('#passwordLogin').Value;
bAcceso = validarCredenciales(sCorreo,sContraseña);
bAcceso = true;
console.log('bAcceso');
}
return listaUsuario;
 };
// const loginButton1= document.getElementById("loginButton1")
// console.log("funciona boton de ingresar");

// loginButton1.addEventListener("click",()=>{
//  const emailLogin = document.getElementById("emailLogin").value
// const passwordLogin = document.getElementById("passwordLogin").value
//  console.log("contraseña y correo");
 
// login(emailLogin ,passwordLogin);

// logica de la interfaz inicio sesion 
// creo un evento al boton ingresar 
//cuan se le de click al ingresar se llama la funcion iniciar sesion 
 