// aqui se crean mis div dinamicos 
<!-- *Formulario de Login* -->
<main>
        <div id="main-container">
          <section class="section-forms">
            <div id="formInicio">
                <img src="" class="logo-Scity" alt="logo-santiagocity"> 
                <div>
      
                  <h4 class="slogan-login">¡Tips para disfrutar mejor!</h4>
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
                      <input type="button" id="loginButton" class="" value="Ingresa">
                    </div>  
                  </form>
                </div>
                <br>
                
      
                <div>
                  <div><p class="go-register">¿Todavía no eres miembro?</p><a href="#" id="registerLink" class="link-to-register"> Únete ahora</a></div>
                </div>
            </div>    
                    
            <!-- * Formulario de Registro * -->
            <div id="formRegister" class="hidden">
              <form>
                <p class="slogan">¡Conéctate y disfruta tus salidas !</p>
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
                
                <a href="" id="registerButton" class=""> Registrar</a>
              </form>
            </div>
          </section>
        </div>
        </main>
      
      