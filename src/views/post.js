

export const templatePost = () =>{
    const containerPost = document.createElement('div');

    const contentPost = ` <p></p>
    <textarea id="text" cols="90" rows="10" placeholder="dejanos tus post" ></textarea>
                               <button class="btn-btn-info" id="post"onclick="save()">publicar</button>
                               <button id="like">like</button>`

     containerPost.innerHTML =  contentPost;
      document.getElementById('root').appendChild(containerPost);

 //const postbtn  = containerPost.querySelector("post");
 //postbtn.addEventListener("click" , () =>{
   //  templatePost();
 //})
 return containerPost;
}
