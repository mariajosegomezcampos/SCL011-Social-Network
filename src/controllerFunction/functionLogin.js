// controlador de vista
// controlador de iniciar sesion 
// import{singInFunction} from '../js/auth.js';
//  FUNCION PARA INICIAR SESION UNA CUENTA DE USUARIO YA CREADA
import{ templatePost} from '../views/post.js'
   export const  login  = () =>{
const email = document.querySelector('#email-login').value;
const userPassword = document.querySelector('#password-login').value;
firebase.auth().signInWithEmailAndPassword(email, userPassword)
  .catch(function(error) {
            // Handle Errors here.
         var errorCode = error.code;
          var errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
      
     });


 }
// FUNCION PARA REGISTRAR UN USUARIO CON IMAIL Y CONTRASEÑA
// catch es una promesa que se hace 
 export const createAccuont = () =>{
   console.log("llego aqui")
// const nameUser = document.querySelector('#nameUser').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
// const confirPassword = document.querySelector('#confirPassword').value;
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
  verificar();
})
.catch(function(error) {
// //   // Handle Errors here.
 var errorCode = error.code;
 var errorMessage = error.message;
console.log('errorCode');
console.log('errorMessage');
//...
 });

}

//Configuracion de un observador para la aplicacion 
export const observer  = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(' existe usuario activo');
      window.location.hash = '#/post'
      // User is signed in.
     let displayName = user.displayName;
     let email = user.email;
     console.log('**************************');
     console.log(user.emailVerified);
     console.log('**************************');
     let  emailVerified = user.emailVerified;
     let photoURL = user.photoURL;
     let  isAnonymous = user.isAnonymous;
     let  uid = user.uid;
     let  providerData = user.providerData;

      if (emailVerified === true) {
        console.log("Iniciada sesión");
      } else {
        console.log("El correo no está registrado o no ha sido verificado")

      }
             // ...
    } else {
      console.log('no existe usuario activo')
      window.location.hash = '#/login'
      // User is signed out.
      // ...
    }
  });
}

//FUNCION DE CERRAR SESION 
export const SignOff= () => {

  firebase.auth().signOut()
    .then(function () {
      console.log("saliendo...")
    })
    .catch(function (error) {
      console.log(error);
    })
}
// funcion envia correo electronico al usuario nuevo que se esta registrando para verificar su correo electronico
 export const verificar = () =>{
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    console.log('enviando correo de validacion ...');
    // Email sent.
  }).catch(function(error) {
    console.log(error);
    // An error happened.
  });
}
// FUNCION PARA INICIAR SESION CON FACEBOOK

export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(res =>{ 
    console.log(user);
  })
  .catch(console.error)
}