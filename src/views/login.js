// aqui se crean mis div dinamico
 // se crea la primera vista a imprimir 
 export const viewIni=()=>{
    // defino mi container 
const container = document.getElementById("mainContainer");
container.innerHTML=
`  <h4 class="sloganLogin">¡Tips para disfrutar mejor!</h4>
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
    <input type="button" id="loginButton1" class="" value="Iniciar sesion">
  </div>  
</form>
<div>
<div><p class="goRegister">¿Todavía no eres miembro?</p><a href="#" id="registerLink" class="linkToRegister"> Únete ahora</a></div>
</div>`


const loginButton1= document.getElementById("loginButton1")
console.log("ingresar");

loginButton1.addEventListener("click",()=>{
const emailLogin = document.getElementById("emailLogin").value
const passwordLogin = Number(document.getElementById("passwordLogin").value);
console.log("emailLogin");
 
login(emailLogin ,passwordLogin);
});
}
