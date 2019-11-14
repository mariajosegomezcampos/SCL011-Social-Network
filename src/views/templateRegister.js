
import{createAccuont} from '../controllerFunction/functionLogin.js';


// vista de registar 
export const templateRegister = () => {
  const containerRegister = document.createElement('div');
    const contentRegister =`<section class="section-forms"> 
    <div id="formRegister">
    <form>
      <h3 class="sloganRegister">¡Conéctate y haz de tus salidas una experiencia inolvidable!</h3>
      <div class="inputs">
        <div>
          <input id="nameUser" type="text" class="validate">
          <label for="nameUser">Nombre</label>
        </div>
      </div>
      <div class="inputs">
        <div>
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>             
        </div>
      </div>
      <div class="inputs">
        <div>
          <input id="password" type="password" class="validate">
          <label for="password">Contraseña</label>
          <span id="error-password"></span>
        </div>
      </div>
      <div class="inputs">
        <div>
          <input id="Password" type="password" />
          <label for="Password">Confirmar contraseña</label>
        </div>
      </div>   
      <button id="registerButton" class="btnRegister" type="button">REGISTRAR</button>      
 </form>
    </di>
    </section>`;                        
    // le asignamos ese contenido al contenedor <<<<<<<<<<<<<<<<<
    containerRegister.innerHTML = contentRegister;
    const registerButton = containerRegister.querySelector('#registerButton');
    registerButton.addEventListener('click', () => {
    console.log('funciona boton registar');
    createAccuont();
    });
     return containerRegister
    }


   