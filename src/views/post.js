
import { publishpost } from "../controllerFunction/function-post.js"
import{SignOff} from '../controllerFunction/functionLogin.js';
  const compartir = () =>{
console.log("aca deveria ir la funcion de compartir");
  }


 export const templatePost = () =>{
 const containerPost = document.createElement('div');
const contentPost = ` <h1>Bienvenido</h1>
                      <h3>Recomendando lugares de Santigo!!</h3>
                      <textarea id="textpost" rows="10" cols="70" placeholder="dejanos tus post" ></textarea>
                      <button  id="post">publicar</button>
                      <button id = 'btnSignOff'>cerrar sesion</button>`
 containerPost.innerHTML =  contentPost;   
  const btn = containerPost.querySelector('#post');
  btn.addEventListener("click" , () =>{
    publishpost();
 })

 const btnSignOff = containerPost.querySelector('#btnSignOff');
btnSignOff.addEventListener("click", ()=>{
    SignOff();
    containerPost.innerHTML="Sesión Cerrada"  

})
return containerPost;
}
