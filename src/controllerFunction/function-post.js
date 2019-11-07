

export const publishpost = () =>{


let textpost=document.getElementById('text').value;
let publishpost =document.getElementById('save').value;
textpost
publishpost

//agregar documento 
function save(){

    var db = firebase.firestore();
    db.collection("users").add({
        first: "publishpost",
    
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('text').value ='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
 
      

 }
}
    