import { publishpost } from "../controllerFunction/function-post.js"

export const templatePost = () =>{
    const containerPost = document.createElement('div');

    const contentPost = ` <h3>Recomendando lugares de Santigo!!</h3>
    <textarea id="textpost" rows="10" cols="70" placeholder="dejanos tus post" ></textarea>
                               <button  id="toPost">publicar</button>
                               <button id="like">like</button>`

     containerPost.innerHTML =  contentPost;
      document.getElementById('root').appendChild(containerPost).innerHTML;

 const toPostbtn  = document.getElementById("toPost");
 toPostbtn.addEventListener("click" , () =>{
   publishpost();
 })
 return containerPost;
}
