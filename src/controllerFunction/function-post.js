export const publishpost = () =>{

    let getpost =document.getElementById("textpost").value;

    var db = firebase.firestore();

    db.collection("Posts").add({
        newcomemt:getpost,
    })

    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("textpost").value ='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//mostrar los posts
    export const allposts = () =>{

        var db = firebase.firestore();
        
       // let showAllPost =document.getElementById("toPost");
        db.collection("Posts").get().then((querySnapshot) => {
            document.getElementById("root").innerHTML = '';
            querySnapshot.forEach((doc) => {

                console.log(`${doc.id} => ${doc.data().newcomemt}`);
                publishpost(doc);

                showAllPost.innerHTML+= `
                <div>${doc.data().newComemt}</div>
                `
            });
        });
    }
   
    /*export function deletep (id){
        var db = firebase.firestore();
        db.collection("Posts").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

    }*/




    