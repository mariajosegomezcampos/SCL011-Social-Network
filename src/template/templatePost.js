const compartir = () =>{
    console.log("aca deveria ir la funcion de compartir");
}


export const templatePost = () =>{
    const containerPost = document.createElement('div');

    const contentPost = ` <p></p>
    <textarea id="text" cols="90" rows="10" placeholder="dejanos tus post" ></textarea>
                               <button id="post">publicar</button>`

     containerPost.innerHTML =  contentPost;
     document.getElementById('root').appendChild(containerPost);

     const btn = containerPost.querySelector('#Post');
     btn.addEventListener("click" , () =>{
         compartir();
     })
     return containerPost;
}

//*return containerPost;
