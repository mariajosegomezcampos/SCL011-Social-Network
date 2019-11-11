import{SignOff} from '../controllerFunction/functionLogin.js';
  const compartir = () =>{
console.log("aca deveria ir la funcion de compartir");
  }


 export const templatePost = (user) =>{
 const containerPost = document.createElement('div');
const contentPost = ` <h1>Bienvenido</h1>
                      <textarea id="text" cols="90" rows="10" placeholder="dejanos tus post" ></textarea>
                      <button  id="post">publicar</button>
                      <button id = 'btnSignOff'>cerrar sesion</button>`
 containerPost.innerHTML =  contentPost;   
  const btn = containerPost.querySelector('#post');
  btn.addEventListener("click" , () =>{
    compartir();
 })

 const btnSignOff = containerPost.querySelector('#btnSignOff');
btnSignOff.addEventListener("click", ()=>{
    SignOff();
    containerPost.innerHTML="Sesión Cerrada"  

})
return containerPost;
}
