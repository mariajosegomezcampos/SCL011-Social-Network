
// local Storage :guarda cadena de texto a traves de una clave y su respectivo valor
// Set => Guardando
 // Get =>obtener
// variables globales

//  contenedor donde se imprime
const container = document.getElementById("mainContainer");
container.innerHTML=""

const contentLogin = document.createElement("div")
contentLogin.className="login"
const logContainer = document.createElement("div");
logContainer.className="logoScity";
logContainer.innerHTML= `<img src="" alt="santiagoCity" id=""></img>`;
const loginButton = document.createElement("div");
loginButton.className="loginnButton"
console.log("imprime div dinamico en pantalla");
loginButton.innerHTML=
`  <h4 class="sloganLogin">¡Tips para disfrutar mejor!</h4>
<p class="validInputs" id="validInputs2"> </p>
<form class="">
  <div class="">
    <input id="email-login" type="email" class="validate">
    <label for="email-login">Email</label>
  </div>
  <div class="">
    <input id="passwordLogin" type="password" class="validate">
    <label for="passwordLogin">Contraseña</label>
    <div><a href="#" class="updatePassword"><p id="updatePassword">¿Olvidó su contraseña?</p></a></div>
  </div>
  <div>
    <input type="button" id="loginButton" class="" value="Ingresa">
  </div>  
</form>
<div>
<div><p class="goRegister">¿Todavía no eres miembro?</p><a href="#" id="registerLink" class="linkToRegister"> Únete ahora</a></div>
</div>`
contentLogin.appendChild(logContainer);
contentLogin.appendChild(loginButton);
container.appendChild(contentLogin).innerHTML;
