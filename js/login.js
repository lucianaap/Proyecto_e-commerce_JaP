let email = document.getElementById("email-form");
let contraseña = document.getElementById("password-form")
function loginRedirect (){
    if (email.value === "" || contraseña.value === ""){
        alert ("Necesita rellenar los campos vacíos")
    } else{
        window.location = "inicio.html";
    }
}

function saveUsuario() {
    if (email.value === ""){
        alert ("No hay datos para guardar")
    }
    let usuario = {
        correo: document.getElementById("email-form").value,
    };
    let usuario_json = JSON.stringify(usuario)
    localStorage.setItem("usuario", usuario_json);
}
function recuperarUsuario(){
    if (localStorage.getItem("usuario")) {
        usuario_json = localStorage.getItem("usuario");
    
    usuario = JSON.parse(usuario_json)

    document.getElementById("usuario").innerHTML = 
    "Usuario: " + usuario.correo
    
}else{
    document.getElementById("usuario").innerHTML = "No hay datos almacenados"
}
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});




