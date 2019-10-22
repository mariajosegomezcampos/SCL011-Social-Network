

export const templateRegister = ()=>{
const containerRegister = document.createElement('div');
const contentRegister = `     
<div id="formRegister" class="hidden">
<form>
  <p class="slogan">¡Conéctate con un estilo de vida saludable!</p>
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
containerRegister.innerHTML = contentRegister;
const registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click',() =>{

  createAccuont()

});
return containerRegister;
}