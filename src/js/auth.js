// //logica del negocio

 export function obtenerListaUsuario(){
    //  aca hago q deje de ser un string
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
     console.log(" listaUsuario");
 }

// // realizo funcion que me va indciar si la persona puede iniciar sesion o no
// // le paso por parametro correo y contraseña
  export function validarCredenciales(email, password){
    const listaUsuario = obtenerListaUsuario();
    const acceso = false;
     for ( [i] = 0; [i] < listaUsuario.length; i++) {
           if(email== listaUsuario[i][3]&& password== listaUsuario[i][4]){
                            acceso = true;
                                        sessionStorage.setItem('usuarioactivo',listaUsuario[i][1]+''+listaUsuario[i][2]);
            }
        }

        return acceso;
        
    }


















