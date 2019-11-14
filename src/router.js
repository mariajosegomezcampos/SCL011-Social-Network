
// /*rutas de direccion de carpetas */ 
import{templateLogin} from './views/templateLogin.js';
import{templateRegister}from './views/templateRegister.js';
import{templatePost} from './views/post.js';



// //faltan rutas de direccion de carpetas archivos
// //si el hash es igual al solicitado que se ejecute mi funcion de dom SCL011-Social-Network SCL011-Social-Network
// /* changeRouter llama a la función que carga cada template */
export const changeRouter = (hash) => {
      
     if (hash === '#/' || hash === '' || hash === '#') {
    return showTemplate('#/login');
      } 
  else if (hash === '#/login' ||hash === '#/register' || hash === '#/post'){
     return showTemplate(hash);
       }

     return showTemplate(hash);
   
 }

// //exporta las funciones a root ((funciones de dom!))
//  // imprimirá el template en el html

 export const showTemplate = (hash) => {
const router = hash.substring(2);
const containerROOT = document.getElementById('root');
containerROOT.innerHTML = '';

// //hash me abre la ruta que estoy buscando en el caso de no estar que de error
switch(router){

   case 'login':
         console.log(containerROOT)
         containerROOT.appendChild(templateLogin());
            break;

   case 'register':
         containerROOT.appendChild(templateRegister());
            break;

       case 'Post':
     containerROOT.appendChild(templatePost());
     break;


        default:
       containerROOT.innerHTML= `<p>Página no encontrada, Error 404</p>`
   case 'Post':
          containerROOT.appendChild(templatePost());
          break;



   }

 };
// //si window tiene atributo de cambio se agrega la locacion de hash
// /* escucha los cambios de esa ventana , apena ocurre un cambio la la funcion changeRouter para que se ejecute*/
//   /* initRouter es la función que 'escucha' los cambios de hash */

export const initRouter = () => {
     window.addEventListener('load',
      changeRouter(window.location.hash));

//     /* reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter*/
  if('onhashchange' in window){
      window.onhashchange = () => {
          changeRouter (window.location.hash);
       }
    }
 }



