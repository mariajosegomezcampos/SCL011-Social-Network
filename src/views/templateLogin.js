import {login , facebookLogin} from '../controllerFunction/functionLogin.js';
import {loginGoogle} from '../js/auth.js';

// import{facebookOnClick} from '../js/auth.js';
 
  
// template de iniciar sesion con boton ingresar
export const templateLogin = ()=>{
  const contentLogin =  ` 
  <section class="section-forms"> 
<div id="formInicio">

<img src="./img/santiagocity.jpeg" class="logoSantiago" alt="logoSantiago"> 
<div>

  <h6 class="sloganLogin">¡Tips para disfrutar tus salidas mejor!</h6>
  <p class="validInputs" id="validInputs2"> </p>
  <form>
    <div>
      <input id="email-login" type="email" class="validate">
      <label for="email-login">Email</label>
    </div>
    <div>
      <input id="password-login" type="password" class="validate">
      <label for="password-login">Contraseña</label>
      <div><a href="#" class="update-password"><p id="update-password">¿Olvidó su contraseña?</p></a></div>
    </div>
    <div>
      <input type="button" id="loginButton" class="btnIngresar" value="INGRESAR">
    </div>  
  </form>
</div>
<p class="simple-text">O ingresa con:</p>
<div class="icon-redes">
  <div class="icono-snf"><a href="#/post" ><img src="./img/facebook.jpg" class="face" id="faceButton" alt="icono-facebook"></a></div>
  <div class="icono-sng"><a href='#/post'><img src="./img/google.jpg" class="google" id="googleButton" alt="icono-google"></a></div>
</div>

<div>
  <div><p class="go-register">¿Todavía no eres miembro?</p><a href="#/register" id="registerLink" class="link-to-register"> Únete ahora</a></div>
</div>
</div> 
</section>
 ` 
const containerLogin = document.createElement('div');                                 
containerLogin.innerHTML = contentLogin;
const loginButton = containerLogin.querySelector('#loginButton');
loginButton.addEventListener('click',() => {
   console.log('funciona boton registrar');
   login();
});

const btnfacebook = containerLogin.querySelector('#faceButton');
 btnfacebook.addEventListener('click',() =>{
  console.log('funciiona btn face')
  facebookLogin();
 });


 const btnGoogle = containerLogin.querySelector('#googleButton');
   btnGoogle.addEventListener('click', () =>{
    console.log('funciona boton google');
    loginGoogle();
   });
 
 const btnRegisterLink = containerLogin.querySelector('#registerLink');
 btnRegisterLink.addEventListener('click', () => {
     console.log('funciona boton unete ahora')
 
 });

 return containerLogin;
}

