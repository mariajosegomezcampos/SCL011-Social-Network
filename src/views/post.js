
import { publishpost } from "../controllerFunction/function-post.js"
import{SignOff} from '../controllerFunction/functionLogin.js';

export const templatePost = (user) =>{
    const containerPost = document.createElement('div');

    const contentPost = ` <h3>Recomendando lugares de Santigo!!</h3>
    <textarea id="textpost" rows="10" cols="70" placeholder="dejanos tus post" ></textarea>
                               <button  id="toPost">publicar</button>
                               <button id="like">like</button>
                               <button id = 'btnSignOff'>cerrar sesion</button>`

     containerPost.innerHTML =  contentPost;
      

 const toPostbtn  = document.getElementById("#toPost");
 toPostbtn.addEventListener("click" , () =>{
   publishpost();
 })
 return containerPost;


 const btnSignOff = containerPost.querySelector('#btnSignOff');
btnSignOff.addEventListener("click", ()=>{
    SignOff();
    containerPost.innerHTML="Sesión Cerrada"  

})
return containerPost;

}
