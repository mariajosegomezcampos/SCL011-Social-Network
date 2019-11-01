import {login} from '../controllerFunction/functionLogin.js';
import {loginGoogle} from '../js/auth.js';
// import{facebookOnClick} from '../js/auth.js';


// template de iniciar sesion con boton ingresar
export const templateLogin = ()=>{
  // const containerLogin = document.createElement('div');
  const contentLogin =  `<section class="section-forms"> 
<div id="formInicio">
<img src="./img/santiagocity.jpeg" class="logoSantiago" alt="logoSantiago"> 
<div>

  <h6 class="sloganLogin">¡Tips para disfrutar tus salidas mejor!</h6>
  <p class="validInputs" id="validInputs2"> </p>
  <form class="">
    <div class="">
      <input id="email-login" type="email" class="validate">
      <label for="email-login">Email</label>
    </div>
    <div class="">
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
  <div class="icono-snf"><a href="#" ><img src="" class="face" id="faceButton" alt="icono-facebook"></a></div>
  <div class="icono-sng"><a href='#'><img src="" class="goo" id="googleButton" alt="icono-google"></a></div>
</div>

<div>
  <div><p class="go-register">¿Todavía no eres miembro?</p><a href="#" id="registerLink" class="link-to-register"> Únete ahora</a></div>
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

//  const btnfacebook = containerLogin.querySelector('#faceButton');
//  btnfacebook.addEventListener('click',);

 const btnGoogle = containerLogin.querySelector('#googleButton');
 btnGoogle.addEventListener('click', loginGoogle);
 console.log('funciona boton google');

 const btnRegisterLink = containerLogin.querySelector('#registerLink');
 btnRegisterLink.addEventListener('click', () => {
     console.log('funciona boton unete ahora')
  changeHash('/register');  
 });

 return containerLogin;
} 
// vista de registar 
export const templateRegister = () => {
  const containerRegister = document.createElement('div');
  const contentRegister = `     
  <div id="formRegister" class="hidden">
  <form>
    <p class="slogan">¡Conéctate con un estilo de vida saludable y haz de tus salidas una experiencia inolvidable!</p>
    <p class="valid-inputs" id="valid-inputs"> </p>
    <div class="inputs">
      <div class="">
        <input id="nameUser" type="text" class="validate">
        <label for="nameUser">Nombre</label>
      </div>
    </div>
    <div class="inputs">
      <div class="">
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>             
      </div>
    </div>
    <div class="inputs">
      <div class="">
        <input id="password" type="password" class="validate">
        <label for="password">Contraseña</label>
        <span id="error-password"></span>
      </div>
    </div>
    <div class="inputs">
      <div class="">
        <input id="confirPassword" type="password">
        <label for="confirPassword">Confirmar contraseña</label>
      </div>
    </div>         
    <a href="#" id="registerButton" class="> Registrar</a>
  </form>
  </div>
  `                         
  // le asignamos ese contenido al contenedor 
  containerRegister.innerHTML = contentRegister;;
  const registerButton = containerRegister.querySelector('#registerButton');
  registerButton.addEventListener('click',() => {
  console.log('funciona boton registar');
    createAccuont()
  
  });
   return containerRegister;
  }