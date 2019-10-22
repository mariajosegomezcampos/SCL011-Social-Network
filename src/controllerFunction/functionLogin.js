
// Función para poder Registrar una Cuenta Nueva
export const createAccuont = (email, password) =>
 firebase.auth().createUserWithEmailAndPassword(email, password);


// funcion ingreso de usuario
 export const loginUser = () =>{
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
    
  }




 








