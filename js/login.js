let inputEmail = document.getElementById("email-form");
let inputContraseña = document.getElementById("password-form")

function loginRedirectAndSaveUser(){
        if (inputEmail.value === "" || inputContraseña.value === ""){
            alert ("Necesita rellenar los campos vacíos")
        } else{
            window.location = "inicio.html";
            localStorage.setItem("User-Logged", JSON.stringify({email: inputEmail.value}));
           
        }

};
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    

});




