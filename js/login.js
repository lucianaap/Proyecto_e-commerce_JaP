let inputEmail = document.getElementById("email-form");
let inputContraseña = document.getElementById("password-form")
let imgSesion = localStorage.setItem("img",`<a href="https://ibb.co/n3vW4GX"><img src="https://i.ibb.co/DGyqmJB/aziz-acharki-549137-unsplash-1200x775.jpg" width="50px" alt="aziz-acharki-549137-unsplash-1200x775" border="0"></a>`)

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




