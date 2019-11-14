
//crear el valor de posts para luego mostar post
export const publishpost = () =>{

     let getpost =document.getElementById("textpost").value;

     var db = firebase.firestore();
     db.collection("Posts").add({
        userId: firebase.auth().currentUser.email,
         newcomemt:getpost,
     })
     .then(function(docRef) {
         console.log("Document written with ID: ", docRef.id);
         document.getElementById("textpost").value = '';
     })
     .catch(function(error) {
         console.error("Error adding document: ", error);
     });
 }
//mostrar los posts 
     export const publishpos = () =>{
         var db = firebase.firestore();
        
         db.collection("Posts").get().then((querySnapshot) => {
             document.getElementById("root").innerHTML = '';
             querySnapshot.forEach((doc) => {
                 console.log(`${doc.id} => ${doc.data().newcomemt}`);
                 print(doc);
                 
            
             })
       });
    };
   
    export function deletePost (id){
        var db = firebase.firestore();
        db.collection("Posts").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

    }  
   