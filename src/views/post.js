import { publishpost } from "../controllerFunction/function-post.js"
//import{SignOff} from '../controllerFunction/functionLogin.js';

export const templatePost = () =>{
    const containerPost = document.createElement('div');

    const contentPost = ` <h3>Recomendando lugares de Santigo!!</h3>
    <textarea id="textpost" rows="10" cols="70" placeholder="dejanos tus post" ></textarea>
                               <button  id="toPost">publicar</button>`

     containerPost.innerHTML =  contentPost;
      document.getElementById('root').appendChild(containerPost).innerHTML;

//Boton para publicar
 const toPostbtn  = document.getElementById("toPost");
 toPostbtn.addEventListener("click" , () =>{
   publishpost();
 });
 return containerPost;
}


/*Imprimir post
export const print = (doc) => {
  document.getElementById("root").innerHTML += `
   <div id="allPosts">${doc.data().newComment}</div>
   <p id=emailPost>${doc.data().userId}</p>
   <button id=deletePost>Borrar</button>
       `
let getPost = doc.id
console.log(getPostId)
const deleteBtn = document.getElementById("deletePost");
deleteBtn.addEventListener('click', () => {
  deletePost(getPost);
      })
}*/

