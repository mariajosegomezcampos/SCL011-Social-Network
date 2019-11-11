export const publishpost = () =>{

    let getpost =document.getElementById("textpost").value;

    var db = firebase.firestore();
    db.collection("Posts").add({
        newcomemt:getpost,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

    export const allposts = () =>{

        var db = firebase.firestore();
        
        let showAllPost =document.getElementById("toPost");
        db.collection("Posts").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                console.log(`${doc.id} => ${doc.data().newcomemt}`);
                showAllPost.innerHTML+= `
                <div>${doc.data().newComemt}</div>
                `
            });
        });
    }
   



   /*db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
    var db = firebase.firestore();
    db.collection("users").add({
        first: "publishpost",
    
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('text').value =""
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
 
      

 }*/

    