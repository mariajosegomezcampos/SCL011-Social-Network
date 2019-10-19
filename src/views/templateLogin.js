
import{validarCredenciales}from './js/auth.js'

export const templateLogin = () => {
const containerROOT = document.getElementById('root')
containerROOT.innerHTML= ` 
<section class="section-forms"> 
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
      <input type="button" id="btnIngresar" class="btnIngresar" value="INGRESAR">
    </div>  
  </form>
</div>
<div>
  <div><p class="go-register">¿Todavía no eres miembro?</p><a href="#" id="registerLink" class="link-to-register"> Únete ahora</a></div>
</div>
</div> 
</section>  `


   email ='';
   password ='';
   acceso = false;
 document.getElementById("btnIngresar").addEventListener('click', () => {
  console.log("funciona boton ingresar");
 const email = document.getElementById("email-login").value;
 const password = document.getElementById("password-login").value;
 acceso = validarCredenciales(email,password);
  acceso = true;
 console.log('acceso')

 });

 }

 
