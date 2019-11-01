// controlador de vista
// controlador de iniciar sesion 
// import{singInFunction} from '../js/auth.js';
//  FUNCION PARA INICIAR SESION Conuna cuenta ya creada 
   export const  login  = () =>{
const userEmail = document.querySelector('#email-login').value;
const userPassword = document.querySelector('#password-login').value;
firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .catch(function(error) {
            // Handle Errors here.
         var errorCode = error.code;
          var errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
      
     });

 }
// FUNCION PARA CREAR UNA CUENTA
 export const createAccuont = () =>{
const nameUser = document.querySelector('#nameUser').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
const confirPassword = document.querySelector('#confirPassword').value;



}
 

 








