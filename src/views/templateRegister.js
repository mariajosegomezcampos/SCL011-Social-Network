

export const templateRegister = ()=>{
    const containerROOT = document.getElementById('root')
containerROOT.innerHTML = `     
<div id="formRegister" class="hidden">
<form>
  <p class="slogan">¡Conéctate con un estilo de vida saludable!</p>
  <p class="valid-inputs" id="valid-inputs"> </p>
  <div class="inputs">
    <div class="input-field col s12">
      <i class="material-icons prefix">person_outline</i>
      <input id="nameUser" type="text" class="validate">
      <label for="nameUser">Nombre</label>
    </div>
  </div>

  <div class="inputs">
    <div class="input-field col s12">
      <i class="material-icons prefix">mail_outline</i>
      <input id="email" type="email" class="validate">
      <label for="email">Email</label>             
    </div>
  </div>
  <div class="inputs">
    <div class="input-field col s12">
      <i class="material-icons prefix">lock_outline</i>
      <input id="password" type="password" class="validate">
      <label for="password">Contraseña</label>
      <span id="error-password"></span>
    </div>
  </div>
  <div class="inputs">
    <div class="input-field col s12">
      <i class="material-icons prefix">check</i>
      <input id="confirPassword" type="password">
      <label for="confirPassword">Confirmar contraseña</label>
    </div>
  </div>         
  <!-- <button id="registerButton" type="button" class="bot btn-large light-green darken-2">Registrar</button> -->
  <a href="#terms" id="registerButton" class="btn modal-trigger light-green darken-2"> Registrar</a>
</form>
</div>
`
}