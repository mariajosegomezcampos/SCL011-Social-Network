//logica del negocio
//realizo funcion 
import{iniciarSesion}from './views/login.js';
 export function obtenerListaUsuario(){
    const listaUsuario = JSON.parse(localStorage.getItem('listadeUsuarioLs'));
    if(listaUsuario == null){
        listaUsuario =
        [
            // id nombre apellido correo contraseña fecha de nacimiento
// usuarios registrados
        ["1","pablo","monastel","pablomonastel@gmail.com","1pablo9","08-08-1990"],
        ["2","pedro","campos","pedrocampos@gmail.com","1pedro9","09-09-1992"],
       ]
    }
    return listaUsuario;
}
//     document.querySelector("btnIngresar").addEventListener("click",iniciarSesion);
//     console.log("funciona boton ingresar");

//    export function iniciarSesion(){


//    const sCorreo ='';
//    const sContraseña ='';
//    const bAcceso = false;
//    sCorreo= document.querySelector( '#emailLogin').Value;
//    sContraseña= document.querySelector('#passwordLogin').Value;
//    bAcceso= validarcredenciales(sCorreo,sContraseña);
//     console.log('bAcceso');
//    }
// }

//     return listaUsuario;
// realizo funcion que me va indciar si la persona puede iniciar sesion o no
// le paso por parametro correo y contraseña
     export function validarCredenciales(pCorreo , pContraseña){
        const listaUsuario = obtenerListaUsuario();
        const bAcceso = false;
        for ( [i] = 0; [i] < listaUsuario.length; i++) {
            if(pCorreo == listaUsuario[i][3]&& pContraseña == listaUsuario[i][4]){
                bAcceso = true;
                sessionStorage.setItem('usuarioactivo',listaUsuario[i][1]+''+listaUsuario[i][2]);
            }
        }

        return bAcceso;
        
    }



