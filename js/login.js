let email = document.getElementById("email-form");
let contraseña = document.getElementById("password-form")
function loginRedirect (){
    if (email.value === "" || contraseña.value === ""){
        alert ("Necesita rellenar los campos vacíos")
    } else{
        window.location = "inicio.html";
    }

}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});




