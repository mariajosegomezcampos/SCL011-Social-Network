// se importa la primera vista a imprimir 

// se importa la primera vista a imprimir 
import { initRouter } from './router.js';
const init = () => {
    //la primera vista que se imprime en pantalla
 
    initRouter();

 }
 // aquí le decimos que cada vez que la pagina cargue debe realizar la funcion init
window.addEventListener('load', init);


