// se importa la primera vista a imprimir 

// se importa la primera vista a imprimir 
import { initRouter } from './router.js';
const init = () => {
    //la primera vista que se imprime en pantalla
 
    initRouter();

 }
 // aquí le decimos que cada vez que la pagina cargue debe realizar la funcion init
window.addEventListener('load', init);

const nombre = 'ignacio';
localStorage.setItem("nombreusuarios", nombre);

const personas ={ 
       id: "1",
       nombre:"pablo",
       apellido:"monastel",
       Correo:"pablomonastel@gmail.com",
       clave:"pablo",
       fecha:"08-08-1990",
       coords:{
                  lat: 10,
                  ing: -10
      }
    }
    localStorage.setItem("listaUsuariosLs", JSON.stringify(personas))
