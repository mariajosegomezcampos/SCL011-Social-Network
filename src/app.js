// se importa la primera vista a imprimir 
// se importa la primera vista a imprimir 
import{viewIni}from './views/login.js';
const init = () => {
    //la primera vista que se imprime en pantalla
 
    viewIni()
 }
 // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', init);