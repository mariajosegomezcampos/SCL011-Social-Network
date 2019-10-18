import { templatePost } from './template/templatePost.js';

//faltan rutas de direccion de carpetas archivos



//si el hash es igual al solicitado que se ejecute mi funcion de dom
const changeRouter = (hash)=>{
    if (hash === '#/Post'){
        return showTemplate(hash);
    }
}

//exporta las funciones a root ((funciones de dom!))
export const showTemplate=(hash)=>{
const router = hash.substring(2);
const containerROOT = document.getElementById('root');
containerROOT.innerHTML = '';

//hash me abre la ruta que estoy buscando en el caso de no estar que de error
switch(router){
    case 'Post':
    containerROOT.appendChild(templatePost());
    break;
    
    default:
    containerROOT.innerHTML= `error 404`
}

}
//si window tiene atributo de cambio se agrega la locacion de hash
export const initRouter = ()=>{
    window.addEventListener('load',changeRouter(window.location.hash));


 if('onhashchange'in window){
     window.onhashchange=()=>{
         changeRouter
         (window.location.hash);
     }
 }
}

