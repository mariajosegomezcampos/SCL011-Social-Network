

// se importa la primera vista a imprimir
import {initRouter} from './router.js';
import {initFirebase} from './js/initFirebase.js';
import { observer } from './controllerFunction/functionLogin.js';


 export  const init = () => {
    //la primera vista que se imprime en pantalla
    initFirebase();
    observer();
    initRouter();
    // para iniciar base de datos firebase
   
    
   
 }
 // aquí le decimos que cada vez que la pagina cargue debe realizar la funcion init
window.addEventListener('load', init);


